import React, { createContext, useState } from 'react';
const AppContext = createContext();

const AppProvider = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    }
    return (
        <AppContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;
export { AppProvider }