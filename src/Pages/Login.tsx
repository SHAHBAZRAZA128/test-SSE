import { useFormik } from "formik";
import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import useNotification from "../hooks/useNotification";
import { userAuth } from "../Context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { notifySuccess, notifyError } = useNotification();
  const navigate = useNavigate();
  const user = userAuth();

  const { handleBlur, handleChange, errors, touched, handleSubmit, values } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

        if (
          savedUser &&
          savedUser.email === values.email &&
          savedUser.password === values.password
        ) {
          notifySuccess("Login Successful!");
          localStorage.setItem("isAuthenticated", JSON.stringify(true));
          user?.login({savedUser})
          setTimeout(() => navigate("/dashboard"), 3000);
        } else {
          notifyError("Invalid Email or Password");
        }
      },
    });

  return (
    <div
      style={{ backgroundColor: "rgb(233, 238, 246)" }}
      className="min-h-screen w-full flex flex-col items-center pb-14"
    >
      <div className="pt-14 w-[35vw]">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-medium pb-6">Log in</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className={`h-10 mb-6 pl-4 rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0
                                  `}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-red-800 text-sm mt-[-24px] mb-6">
                {errors.email}
              </p>
            ) : null}
            <label className="font-medium">Password</label>
            <div className="relative w-full">
              <input
                className="h-10 mb-2 pl-4 pr-10 w-full rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
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
            {errors.password && touched.password ? (
              <p className="text-red-800 text-sm">{errors.password}</p>
            ) : null}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 text-white w-48 ml-28 py-2 "
            >
              Continue
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <p>Don't have an account?</p>
            <Link className="text-blue-900 pl-1" to="/">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
