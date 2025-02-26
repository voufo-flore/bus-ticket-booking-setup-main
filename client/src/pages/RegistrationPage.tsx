import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";

interface RegistrationFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const RegistrationPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormInputs>();

  const password = watch("password");

  const onSubmit = async (data: RegistrationFormInputs) => {
    try {
      console.log("Registering with:", data);
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // TODO: Handle successful registration (e.g., redirect, show message, etc.)
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  // Change language dynamically
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 to-white text-gray-900"
      }`}
    >
      <div className="w-full max-w-md p-8 bg-white/90 dark:bg-gray-800 rounded-xl shadow-xl transition duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-center mb-6">
          {t("Create Your Account")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder={t("Full Name")}
              {...register("name", { required: t("Name is required") })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder={t("Email Address")}
              {...register("email", { required: t("Email is required") })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder={t("Password")}
              {...register("password", {
                required: t("Password is required"),
                minLength: {
                  value: 6,
                  message: t("Password must be at least 6 characters"),
                },
              })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder={t("Confirm Password")}
              {...register("confirmPassword", {
                required: t("Please confirm your password"),
                validate: (value) =>
                  value === password || t("Passwords do not match"),
              })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("terms", {
                required: t("You must accept the terms and conditions"),
              })}
              className="h-4 w-4"
            />
            <label className="ml-2 text-sm">
              {t("I agree to the")}{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                {t("Terms & Conditions")}
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
          >
            {isSubmitting ? t("Registering...") : t("Register")}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t("Or register with")}
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              <FaGoogle size={20} />
            </button>
            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <FaFacebook size={20} />
            </button>
            <button className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              <FaApple size={20} />
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t("Already have an account?")}{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              {t("Login")}
            </a>
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          {/* Language selection */}
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage("en")} className="text-2xl">
              🇺🇸
            </button>
            <button onClick={() => changeLanguage("fr")} className="text-2xl">
              🇫🇷
            </button>
            <button onClick={() => changeLanguage("es")} className="text-2xl">
              🇪🇸
            </button>
          </div>
          {/* Dark mode toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm">{t("Dark Mode")}</span>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? "bg-gray-600" : "bg-gray-300"
              } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300`}
            >
              <span
                className={`${
                  darkMode ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 bg-white rounded-full transition-transform duration-300`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
