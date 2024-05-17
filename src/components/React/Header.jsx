import React, { useEffect, useState } from "react";
import clsx from "clsx";
// import DarkModeSwitcher from "./DarkModeSwitcher";
// import BtnDL from "../Button/BtnDarkLight.astro"
import "./style.css";

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setIsScrolling(scrollTop > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 transition duration-500"
    >
      <nav
        className={clsx(
          "flex items-center justify-between font-medium border-gray-100 rounded-full text-gray-600 dark:text-gray-200",
          isScrolling && "px-3 border-none bg-white shadow-lg text-gray-700",
          !isScrolling && "pb-5"
        )}
      >
        <a
          className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
          aria-label="proyectos"
          href="/#proyectos"
        >
          Proyectos
        </a>
        <a
          className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
          aria-label="sobre-mi"
          href="/#sobre-mi"
        >
          Sobre mi
        </a>
        <a
          className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
          aria-label="contacto"
          href="mailto:carlosstqm2225@gmail.com"
        >
          Contacto
        </a>
        {/* <DarkModeSwitcher/> */}
        {/* <<div className="relative ml-1 mr-1">
          <button
            id="theme-toggle-btn"
            className="appearance-none border-none flex hover:scale-125 transition"
          >
            <span className="sr-only">Elige el tema</span>
            <svg
              id="light"
              className="theme-toggle-icon size-5 transition-all"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: themePreference === "light" ? "scale(1)" : "scale(0)" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path
                d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
              ></path>
            </svg>
            <svg
              id="dark"
              className="theme-toggle-icon absolute size-5 transition-all"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: themePreference === "dark" ? "scale(1)" : "scale(0)" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
              ></path>
            </svg>
            <svg
              id="system"
              className="theme-toggle-icon absolute size-5 transition-all"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: themePreference === "system" ? "scale(1)" : "scale(0)" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"
              ></path>
              <path d="M7 20h10"></path>
              <path d="M9 16v4"></path>
              <path d="M15 16v4"></path>
            </svg>
          </button>

          <div
            id="themes-menu"
            className="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
          >
            <ul>
              <li className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
                Light
              </li>
              <li className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
                Dark
              </li>
              <li className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
                System
              </li>
            </ul>
          </div>
        </div>> */}
      </nav>
    </header>
  );
}

export default Header;

// import clsx from "clsx"
// import { useEffect, useState } from "react";
// import "./style.css"
// function Header (){
//   const [isScrolling, setIsScrolling] = useState(false);

//   useEffect(() => {
//     let remove = null;
//   const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
//   const themesMenu = document.getElementById("themes-menu");

//   const getThemePreference = () => {
//     if (typeof localStorage !== "undefined") {
//       return localStorage.getItem("theme") ?? "system";
//     }

//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   };

//   const updateIcon = (themePreference) => {
//     document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
//       element.style.scale = element.id === themePreference ? "1" : "0";
//     });
//   };

//   const updateTheme = () => {
//     if (remove != null) {
//       remove();
//     }
//     matchMedia.addEventListener("change", updateTheme);
//     remove = () => {
//       matchMedia.removeEventListener("change", updateTheme);
//     };

//     const themePreference = getThemePreference();
//     const isDark =
//       themePreference === "dark" ||
//       (themePreference === "system" && matchMedia.matches);

//     updateIcon(themePreference);
//     document.documentElement.classList[isDark ? "add" : "remove"]("dark");
//   };

//   updateTheme();
//   document.addEventListener("click", () =>
//     themesMenu.classList.remove("open")
//   );

//   document
//     .getElementById("theme-toggle-btn")
//     .addEventListener("click", (e) => {
//       console.log("click");
//       e.stopPropagation();
//       const isClosed = !themesMenu.classList.contains("open");
//       themesMenu.classList[isClosed ? "add" : "remove"]("open");
//     });

//   document.querySelectorAll(".themes-menu-option").forEach((element) => {
//     element.addEventListener("click", (e) => {
//       localStorage.setItem(
//         "theme",
//         e.target.innerText.toLowerCase().trim()
//       );
//       updateTheme();
//     });
//   });
//   }, []);
//   useEffect(() => {
//     function handleScroll() {
//       const scrollTop = window.scrollY;
//       setIsScrolling(scrollTop > 0);
//     }

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
// return(
//     <header
//     className={`fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 transition duration-500`}
// >
//   <nav
//     className={clsx(
//       "flex items-center justify-between font-medium border-gray-100 rounded-full text-gray-600 dark:text-gray-200",
//       isScrolling && "sentinel px-3 border-none bg-white shadow-lg text-gray-700",

//     )}
//   >
//     <a
//       className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
//       aria-label="proyectos"
//       href="/#proyectos"
//     >
//       Proyectos
//     </a><a
//       className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
//       aria-label="sobre-mi"
//       href="/#sobre-mi"
//       data-astro-cid-3ef6ksr2=""
//     >
//       Sobre mi</a
//     ><a
//       className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
//       aria-label="contacto"
//       href="mailto:carlosstqm2225@gmail.com"
//     >
//       Contacto
//     </a>

//     <div className="relative ml-1 mr-1">
//       <button
//         id="theme-toggle-btn"
//         className="appearance-none border-none flex hover:scale-125 transition"
//       >
//         <span className="sr-only" data-astro-cid-x3pjskd3="">Elige el tema</span>
//         <svg
//           id="light"
//           className="theme-toggle-icon size-5 transition-all"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           style={{ transform: "scale(0)" }}
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//           <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
//           <path
//             d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
//           >
//           </path>
//         </svg>
//         <svg
//           id="dark"
//           className="theme-toggle-icon absolute size-5 transition-all"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           style={{ transform: "scale(0)" }}
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none"> </path>
//           <path
//             d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
//           >
//           </path>
//         </svg>
//         <svg
//           id="system"
//           className="theme-toggle-icon absolute size-5 transition-all"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           style={{ transform: "scale(1)" }}
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none"> </path>
//           <path
//             d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"
//           >
//           </path>
//           <path d="M7 20h10"> </path>
//           <path d="M9 16v4"> </path>
//           <path d="M15 16v4"> </path>
//         </svg>
//       </button>

//       <div
//       data-astro-cid-x3pjskd3
//         id="themes-menu"
//         className="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
//       >
//         <ul >
//           <li
//           data-astro-cid-x3pjskd3
//             className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
//           >
//             Light
//           </li>
//           <li
//           data-astro-cid-x3pjskd3
//             className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
//           >
//             Dark
//           </li>
//           <li
//           data-astro-cid-x3pjskd3
//             className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
//           >
//             System
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </header>
// )
// }

// export default Header;
