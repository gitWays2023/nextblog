"use client"

import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

const getFromLocalStorage = () =>{
if(typeof Window !== "undefined"){
  const value = localStorage.getItem("theme") || "light"
  return value
}
}

export const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(()=>getFromLocalStorage())


  const toggle = ()=>{
    setTheme(theme === "light" ? "dark" : "light")
  }


  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])
  return (

    <ThemeContext.Provider value={{theme, toggle,setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};