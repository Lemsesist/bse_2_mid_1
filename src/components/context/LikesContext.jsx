import { createContext, useState } from "react";

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
    const [likes, setLikes] = useState(0);

    const addLike = () => {
        setLikes((prev) => prev + 1);
    };

    return (
        <LikesContext.Provider value={{ likes, addLike }}>
            {children}
        </LikesContext.Provider>
    );
};
