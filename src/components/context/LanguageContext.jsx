import { createContext, useState } from "react";
import en from "../translations/en.json";
import ru from "../translations/ru.json";

export const LanguageContext = createContext();

const translations = { en, ru };

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "ru" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};
