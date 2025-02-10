import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(20)
    .required("Please enter your first name"),
  lastName: Yup.string().min(3).max(20).required("Please enter your last name"),
  email: Yup.string()
    .email()
    .required("Please enter your email")
    .test(
      "unique-email",
      "Email already exists. Please use another email.",
      function (value) {
        if (!value) return true; // Agar email field empty hai to Yup required error dikhayega
        const storedUsers: { email: string }[] = JSON.parse(
          localStorage.getItem("users") || "[]",
        );
        return !storedUsers.some(
          (user: { email: string }) => user.email === value,
        );
      },
    ),

  password: Yup.string().min(8).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), ""], "Password must match"),
  agreeToTerms: Yup.boolean().oneOf(
    [true],
    "You must be  agree with the terms & conditions",
  ),
  checkInTime: Yup.date()
    .nullable() // Allows null initially
    .required("Please select your Check-in Time")
    .typeError("Invalid date format"), // Ensures correct format
});
