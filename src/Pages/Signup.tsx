import { useFormik } from "formik";
import { signupSchema } from "../schemas/signupSchema";
import useNotification from "../hooks/useNotification";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from "react-dropzone";
import useHttp from "../hooks/useHttp";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirm_password: "",
  checkInTime:  null as Date | null,
  agreeToTerms: false,
};

function Signup() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);
    setPreview(URL.createObjectURL(uploadedFile));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    multiple: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {request} = useHttp();
  const navigate = useNavigate();
  const { notifyError } = useNotification();
  
  const {
    values,
    handleBlur,
    touched,
    handleChange,
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      if (!file) {
        notifyError("Please upload file .");
        return;
      }

      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("password", values.password);
      formData.append("confirm_password", values.confirm_password);
      formData.append("checkInTime", values.checkInTime ? values.checkInTime.toISOString() : "");
      formData.append("agreeToTerms", values.agreeToTerms.toString());
      

        const response = await request("https://jsonplaceholder.typicode.com/posts", formData, true);

      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
        setTimeout(() => navigate("/login"), 2000);
      }
    },
  });

  return (
    <div>
      <div
        style={{ backgroundColor: "rgb(233, 238, 246)" }}
        className="relative min-h-screen w-full flex flex-col items-center"
      >
        <div className="pt-14 pb-16 w-[35vw]">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold pb-2 text-gray-600">
              Create your free account
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="font-medium pb-2 text-gray-600">Email</label>
              <input
                className="h-10 mb-1 pl-4 rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-red-800 text-sm">{errors.email}</p>
              )}

              <div className="flex gap-3">
                <div className="flex flex-col w-[16vw]">
                  <label className="font-medium pb-2 text-gray-600">
                    First name
                  </label>
                  <input
                    className="h-10 mb-2 pl-4 rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="text-red-800 text-sm">{errors.firstName}</p>
                  )}
                </div>

                <div className="flex flex-col w-[16vw]">
                  <label className="font-medium pb-2 text-gray-600">
                    Last name
                  </label>
                  <input
                    className="h-10 mb-2 pl-4 rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="text-red-800 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <label className="font-medium pb-2 text-gray-600">
                Password (min 8 characters)
              </label>
              <div className="relative w-full">
                <input
                  className="h-10 mb-2 pl-4 pr-10 w-full rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              {errors.password && touched.password && (
                <p className="text-red-800 text-sm">{errors.password}</p>
              )}
              <label className="font-medium pb-2 text-gray-600">
                Confirmn Password
              </label>
              <div className="relative w-full">
                <input
                  className="h-10 mb-2 pl-4 pr-10 w-full rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  id="confirm-password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <Eye size={20} />
                  ) : (
                    <EyeOff size={20} />
                  )}
                </button>
              </div>

              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-800 text-sm">
                  {errors.confirm_password}
                </p>
              ) : null}
              <div className="flex space-x-3">
                <div className="flex flex-col w-[16vw]">
                  <label className="font-medium pb-2 text-gray-600">
                    Check-in-Time
                  </label>
                  <DatePicker
                    name="checkInTime"
                    selected={values.checkInTime}
                    onChange={(date) => setFieldValue("checkInTime", date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="h-10 mb-2 pl-4 w-full rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0"
                  />
                  {errors.checkInTime && touched.checkInTime ? (
                    <p className="text-red-800 text-sm">
                      {String(errors.checkInTime)}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col w-[16vw]">
                  <label className="font-medium pb-2 text-gray-600">
                    Upload file
                  </label>
                  <div
                    {...getRootProps()}
                    className="w-[16vw] border-2  border-gray-300 p-2  rounded-lg text-center cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    <p className="text-gray-500 w-[16vw]">
                      click here to select one
                    </p>
                  </div>
                </div>
              </div>
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-4 w-32 h-32 object-cover rounded-lg"
                />
              )}
              <label className="flex items-start space-x-2 mb-4 mt-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  className="mt-1"
                  checked={values.agreeToTerms}
                  onChange={handleChange}
                />
                <span className="text-sm text-gray-600">
                  By checking this box, I agree to receive updates, insights and
                  offers from SafetyCulture and its affiliates by email and
                  phone to the above contact information. I understand I can
                  withdraw my consent.
                </span>
              </label>
              {errors.agreeToTerms && touched.agreeToTerms ? (
                <p className="text-red-800 text-sm pb-2">
                  {errors.agreeToTerms}
                </p>
              ) : null}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-800 text-white w-48 ml-28 py-2"
              >
                Create free account
              </button>

              <div className="flex justify-center mt-4">
                <p>Already have an account?</p>
                <Link className="text-blue-900 pl-1" to="/login">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
