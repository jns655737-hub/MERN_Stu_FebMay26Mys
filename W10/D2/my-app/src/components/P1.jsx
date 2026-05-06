//useContext hook 
//Context: lets you share data between components
//without passing props manually through every level 

import { createContext, useContext, useState } from "react";
import{useDocumentTitle} from "./P2"

//why to use useContext?
//1.it helps us avoid prop drilling
//2.useful for share the values:
//- theme details
//- logged-in user details 
//- language settings
//- app settings 

//Basics steps:
//1.create a context
//2.Wrap components with Provider
//3.Read value using useContext()

//1.create context
const ThemeContext = createContext();


//Child Component1
function Header() {
    const theme = useContext(ThemeContext);
    return (
        <header style={{
            padding: '20px',
            marginTop: '20px',
            background: theme === 'dark' ? '#222' : '#eee',
            color: theme === 'dark' ? '#eee' : '#000'
        }}>
            <h3>Heading Component</h3>
            <p>Current theme from Context:{theme}</p>
        </header>
    )
}

//child component 2
function Context() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{
            padding: '20px',
            margin: '20px',
            background: theme === 'dark' ? '#333' : '#f9f9f9',
            color: theme === 'dark' ? '#fff' : '#000'
        }}>
            <p>This Component also uses the same context value </p>
        </div>
    )
}

function Layout() {
    return (
        <div>
            <Header />
            <Context />
            <useDocumentTitle/>
            {/* <CustomHooksIntro/> */}
        </div>
    )
}

export function UseContextIntro() {
    //shared stste 
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <section>
            <h2>useContext Example via theme</h2>
            <p>
                Example to show the usage of context sharing
            </p>
            <button onClick={toggleTheme}>
                Toggle theme
            </button>
            <ThemeContext.Provider value={theme}>
                <Layout/>
            </ThemeContext.Provider>
        </section>
    )
}