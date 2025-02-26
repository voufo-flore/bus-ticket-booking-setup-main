import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";

const TermsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  // Function to change the language
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header with Title, Language Switcher, and Dark Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            {t("Terms & Conditions")}
          </h1>
          <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-2">
              <span className="text-sm">{t("Dark Mode")}</span>
              <Switch
                checked={darkMode}
                onChange={setDarkMode}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-gray-300"
                } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300`}
              >
                <span
                  className={`${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                />
              </Switch>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("Introduction")}</h2>
            <p className="text-sm leading-relaxed">
              {t(
                "Welcome to our Bus Management System. These Terms & Conditions govern your use of our platform. By using our service, you agree to these terms in full. If you disagree with any part of these terms, please do not use our service."
              )}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("Acceptance of Terms")}
            </h2>
            <p className="text-sm leading-relaxed">
              {t(
                "By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions."
              )}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("Modifications to Terms")}
            </h2>
            <p className="text-sm leading-relaxed">
              {t(
                "We reserve the right to change, modify, or update these terms at any time. It is your responsibility to check this page periodically for any updates. Your continued use of the service following the posting of changes will mean that you accept and agree to the changes."
              )}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("Use of Service")}</h2>
            <p className="text-sm leading-relaxed">
              {t(
                "You agree to use our service only for lawful purposes and in accordance with these Terms & Conditions. You must not misuse our service or help anyone else to do so."
              )}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("Disclaimer")}</h2>
            <p className="text-sm leading-relaxed">
              {t(
                "Our service is provided on an 'as is' and 'as available' basis without any warranties of any kind, either express or implied. We do not guarantee the accuracy or completeness of the information provided."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("Contact Us")}</h2>
            <p className="text-sm leading-relaxed">
              {t(
                "If you have any questions or concerns about these Terms & Conditions, please contact us through our support page."
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
