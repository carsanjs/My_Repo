import { useEffect, useState } from 'react';
// import useLocalStorage from './useLocalStorage';

const useColorMode = () => {

// const item = localStorage.getItem(key);
const [colorMode, setColorMode] = useState('light');
console.log(colorMode)

console.log(setColorMode)
const getThemePreference = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("theme") ?? "light";
  }

  // return window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? "dark"
  //   : "light";
};
useEffect(() => {

    const className = 'dark';
    const matchMedia = window.matchMedia(`(prefers-color-scheme:${className})`);
    const bodyClass = document.documentElement.classList

    colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  
const themePreference = getThemePreference();
const isDark =
  themePreference === "dark" ||
  (themePreference === "system" && matchMedia.matches);
  
  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0";
    });
  };
updateIcon(themePreference);
document.documentElement.classList[isDark ? "add" : "remove"]("dark");


  return [colorMode, setColorMode];
};

export default useColorMode;
