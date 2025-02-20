import React from "react";

const UserPanel = ({ theme, toggleTheme, language, toggleLanguage, translations, likes, addLike }) => {
    return (
        <div className={`panel ${theme}`}>
            <h1>{translations[language]["greeting"]}</h1>
            <p>{translations[language]["likes"]}: {likes}</p>

            <button className="like-button" onClick={addLike}>
                ❤️ {likes > 0 ? "Liked!" : "Like"}
            </button>

            <button onClick={toggleTheme}>
                {translations[language]["toggleTheme"]}
            </button>

            <button onClick={toggleLanguage}>
                {translations[language]["toggleLanguage"]}
            </button>
        </div>
    );
};

export default UserPanel;
