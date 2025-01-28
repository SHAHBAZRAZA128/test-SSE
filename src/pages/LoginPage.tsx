import React, { useState } from "react";
import { ButtonField } from "../components/index";
import { SafetyCulturelogo } from "../assets/index";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Get stored user data from localStorage
        const storedUserData = localStorage.getItem("user");
    if (!storedUserData) {
        setError("No users found. Please sign up first.");
        return;
    }

    // Parse the stored user data
    const users = JSON.parse(storedUserData);

    // Ensure that 'users' is an array
    if (!Array.isArray(users)) {
        setError("Invalid data format. Please sign up again.");
        return;
    }

    // Check if the email exists in the users array
    const userExists = users.some((user: { email: string }) => user.email === email);

    if (userExists) {
        setSuccessMessage("Login successful!");
        setEmail(""); // Clear the email field
        setError(""); // Clear any previous errors
        navigate(""); // Redirect to the desired page
    } else {
        setError("Invalid email. Please try again.");
    }
    };

    return (
        <div
            style={{ backgroundColor: "rgb(233, 238, 246)" }}
            className="min-h-screen w-full flex flex-col items-center pb-14"
        >
            <div className="pt-14 w-[35vw]">
                <img className="mb-8 w-40" src={SafetyCulturelogo} alt="logo" />
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h1 className="text-2xl font-medium pb-6">Log in</h1>
                    <form onSubmit={handleLogin} className="flex flex-col">
                        {/* Email Input */}
                        <label className="font-medium mb-2">Email</label>
                        <input
                            className={`h-10 mb-6 pl-4 rounded-lg outline-none border ${error
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-gray-400 focus:border-blue-700"
                                } focus:ring-0`}
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

                        {/* Continue Button */}
                        <ButtonField text="Continue" path="" />
                        {successMessage && (
                            <div className=" text-green-800 p-4 rounded-lg mb-4">
                                <p>{successMessage}</p>
                            </div>
                        )}
                    </form>
                    <div className="flex justify-center mt-4">
                        <p>Don't have an account?</p>
                        <Link className="text-blue-900 pl-1" to="/sign-up">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
