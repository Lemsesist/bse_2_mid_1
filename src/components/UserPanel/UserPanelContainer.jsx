import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import { useLikes } from "../hooks/useLikes";
import UserPanel from "./UserPanel";

const UserPanelContainer = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, translations } = useLanguage();
    const { likes, addLike } = useLikes();

    return (
        <UserPanel
            theme={theme}
            toggleTheme={toggleTheme}
            language={language}
            toggleLanguage={toggleLanguage}
            translations={translations}
            likes={likes}
            addLike={addLike}
        />
    );
};

export default UserPanelContainer;
