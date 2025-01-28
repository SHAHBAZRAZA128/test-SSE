import React, { useState } from "react";
import { ButtonField } from "../components/index";
import { SafetyCulturelogo } from "../assets/index";
import { PasswordField } from "../components/index";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';

interface SignUpForm {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    password: string;
    agreeToTerms: any;
}

const SignupPage = () => {
    const [formData, setFormData] = useState<SignUpForm>({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<Partial<SignUpForm>>({});
    const [touchedFields, setTouchedFields] = useState<Partial<SignUpForm>>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");


    const validateField = (name: keyof SignUpForm, value: string | boolean) => {
        let error = "";

        if (name === "email" && typeof value === "string") {
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                error = "Please enter a valid email address.";
            }
            else {

                const users = JSON.parse(localStorage.getItem("user") || "[]");

                // Ensure that 'users' is an array
                if (Array.isArray(users)) {
                    // Check if the email already exists
                    const userExists = users.some((user: { email: string }) => user.email === value);

                    if (userExists) {
                        error = "Email already exists.";
                    }
                } else {
                    // If 'users' is not an array, initialize it as an empty array
                    localStorage.setItem("user", JSON.stringify([]));
                }
            }
        }

        if (name === "firstName" && typeof value === "string") {
            if (value.trim().length === 0) {
                error = "First name is required.";
            }
        }

        if (name === "lastName" && typeof value === "string") {
            if (value.trim().length === 0) {
                error = "Last name is required.";
            }
        }

        if (name === "password" && typeof value === "string") {
            if (value.length < 8) {
                error = "Password must be at least 8 characters.";
            }
            else if (!/[a-zA-Z]/.test(value)) {
                error = "Password must contain at least one alphabetic character.";
            }
            // Check if the password contains at least one numeric character
            else if (!/\d/.test(value)) {
                error = "Password must contain at least one number.";
            }
            // Check if the password contains at least one special character
            else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                error = "Password must contain at least one special character.";
            }
        }

        if (name === "agreeToTerms" && typeof value === "boolean") {
            if (!value) {
                error = "You must agree to the terms and conditions.";
            }
        }

        return error;
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Mark the field as touched
        setTouchedFields((prev) => ({
            ...prev,
            [name]: true,
        }));

        // Validate the field on blur
        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name as keyof SignUpForm, value),
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        // Re-validate field as the user types
        if (touchedFields[name as keyof SignUpForm]) {
            setErrors((prev) => ({
                ...prev,
                [name]: validateField(name as keyof SignUpForm, value),
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Partial<SignUpForm> = {};

        Object.keys(formData).forEach((key) => {
            const fieldKey = key as keyof SignUpForm;
            const error = validateField(fieldKey, formData[fieldKey]);
            if (error) {
                newErrors[fieldKey] = error;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            const users = JSON.parse(localStorage.getItem("user") || "[]");
            // Save the user data to local storage
            localStorage.setItem("user", JSON.stringify(formData));

            const userExists = users.some((user: { email: string }) => user.email === formData.email);

            if (userExists) {
                setErrors({
                    email: "Email already exists.",
                });
                return; // Exit the signup process if the email already exists
            }
            users.push(formData);

            // Save the updated users array back to localStorage
            localStorage.setItem("user", JSON.stringify(users));

            // Show success message
            setSuccessMessage("Signup successful! Your account has been created.");

            setFormData({
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                password: "",
                agreeToTerms: false,
            });
            setErrors({});
            setTouchedFields({});


        }
    };

    return (
        <div>
            <div
                style={{ backgroundColor: "rgb(233, 238, 246)" }}
                className="relative min-h-screen w-full flex flex-col items-center"
            >
                <div className="pt-14 pb-16 w-[35vw]">
                    <img
                        className="mb-2 w-40"
                        src={SafetyCulturelogo}
                        alt="logo"
                    />
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h1 className="text-2xl font-bold pb-2 text-gray-600">
                            Create your free account
                        </h1>
                        {successMessage && (
                            <div className="bg-green-200 text-green-800 p-4 rounded-lg mb-4">
                                <p>{successMessage}</p>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            {/* Email Field */}
                            <label className="font-medium pb-2 text-gray-600">
                                Email
                            </label>
                            <input
                                className={`h-10 mb-1 pl-4 rounded-lg outline-none border ${errors.email
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-gray-400 focus:border-blue-700"
                                    } focus:ring-0`}
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {touchedFields.email && errors.email && (
                                <p className="text-sm text-red-600">{errors.email}</p>
                            )}


                            <div className="flex gap-3">
                                <div className="flex flex-col w-[16vw]">
                                    <label className="font-medium pb-2 text-gray-600">
                                        First name
                                    </label>
                                    <input
                                        className={`h-10 mb-2 pl-4 rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0  
                                            ${errors.firstName
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-400 focus:border-blue-700"}   `}
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touchedFields.firstName && errors.firstName && (
                                        <p className="text-sm text-red-600">{errors.firstName}</p>
                                    )}
                                </div>
                                <div className="flex flex-col w-[16vw]">
                                    <label className="font-medium pb-2 text-gray-600">
                                        Last name
                                    </label>
                                    <input
                                        className={`h-10 mb-2 pl-4 rounded-lg outline-none border border-gray-400 focus:border-blue-700 focus:ring-0  
                                            ${errors.firstName
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-400 focus:border-blue-700"}   `}
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touchedFields.lastName && errors.lastName && (
                                        <p className="text-sm text-red-600">{errors.lastName}</p>
                                    )}

                                </div>
                            </div>

                            <label className="font-medium pb-2 text-gray-600">
                                Phone number (optional)
                            </label>
                            <PhoneInput
                                international
                                defaultCountry="PK" // Default country code
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                className="h-10 pb-3 mb-6 pl-4 pt-2 text-sm leading-[0.5] rounded-lg outline-none border border-gray-400 
                "
                                required
                            />

                            <label className="font-medium pb-2 text-gray-600">
                                Password (min 8 characters)
                            </label>
                            <PasswordField
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touchedFields.password && errors.password ? errors.password : undefined}
                            />

                            <label className="flex items-start space-x-2 mb-4 mt-2">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className="mt-1"
                                />
                                <span className="text-sm text-gray-600">
                                    By checking this box, I agree to receive updates, insights
                                    and offers from SafetyCulture and its affiliates by email
                                    and phone to the above contact information. I understand I
                                    can withdraw my consent.
                                </span>
                            </label>
                            {errors.agreeToTerms && (
                                <p className="text-sm text-red-600">
                                    {errors.agreeToTerms}
                                </p>
                            )}

                            <ButtonField
                                text="Create free account"
                                path=""
                            />
                            <div className="text-sm text-gray-600 mt-4">
                                <p>
                                    By creating an account you agree to SafetyCulture’s
                                    <Link
                                        className="hover:underline pl-1 text-blue-800"
                                        to="/terms-and-condition"
                                    >
                                        Terms & Conditions{" "}
                                    </Link>
                                    and
                                    <Link
                                        className="hover:underline pl-1 text-blue-800"
                                        to="/privacy-policy"
                                    >
                                        Privacy Policy.
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="flex mt-5 text-gray-600 font-normal">
                        <p>Already have an account?</p>
                        <Link className="text-blue-900 pl-1" to="/login">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SignupPage;
