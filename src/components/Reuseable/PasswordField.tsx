import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import icons from lucide-react (can use other libraries too)

const PasswordField: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}> = ({ value, onChange, onBlur, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {/* Password Input */}
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Enter your password"
        className={`h-10 w-full mb-1 pl-4 pr-10 rounded-lg outline-none border ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-400 focus:border-blue-700"
        } focus:ring-0`}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Toggle Icon */}
      <span
        className="absolute top-2.5 right-3 cursor-pointer"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
            <Eye className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        ) : (
            <EyeOff className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        )}
      </span>
    </div>
  );
};

export default PasswordField;
