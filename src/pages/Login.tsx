import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";

interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  // Simulated login function
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      console.log("Logging in with:", data);
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // TODO: Handle successful login (e.g., redirect, save token, etc.)
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Language switcher
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
          {t("Login to Your Account")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder={t("Email or Username")}
              {...register("email", { required: t("Email is required") })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder={t("Password")}
              {...register("password", { required: t("Password is required") })}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4"
              />
              <span className="ml-2">{t("Remember Me")}</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              {t("Forgot Password?")}
            </a>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            {isSubmitting ? t("Logging in...") : t("Login")}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t("Or login with")}
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
            {t("Don't have an account?")}{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              {t("Sign Up")}
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

export default LoginPage;
