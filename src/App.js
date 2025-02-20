import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./components/context/ThemeContext.jsx";
import { LanguageProvider } from "./components/context/LanguageContext.jsx";
import { LikesProvider } from "./components/context/LikesContext.jsx";
import UserPanelContainer from "./components/UserPanel/UserPanelContainer.jsx";
import "./index.css";

const App = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <LikesProvider>
                    <UserPanelContainer />
                </LikesProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;