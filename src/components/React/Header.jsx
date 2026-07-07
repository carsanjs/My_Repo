import { useEffect, useState } from "react";
import clsx from "clsx";

import "./style.css";

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme = savedTheme ?? (systemDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 z-[999] w-full transition-all duration-500",
        isScrolling ? "px-0 pt-0" : "px-4 pt-4",
      )}
    >
      <div
        className={clsx(
          "mx-auto flex w-full items-center justify-center transition-all duration-500",
          isScrolling ? "max-w-full" : "max-w-4xl",
        )}
      >
        <nav
          className={clsx(
            "flex items-center justify-between gap-1 font-medium transition-all duration-500",
            "text-sm sm:text-base",
            isScrolling
              ? "w-full rounded-none border-b border-white/10 bg-slate-950/85 px-4 py-3 text-white shadow-lg backdrop-blur-xl dark:bg-slate-950/85"
              : "w-fit rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white shadow-md backdrop-blur-md",
          )}
        >
          <div className="flex items-center gap-1">
            <a className="nav-link" aria-label="inicio" href="/">
              Inicio
            </a>

            <a
              className="nav-link"
              aria-label="proyectos"
              // href="/trabajos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trabajos
            </a>

            <a
              className="nav-link"
              aria-label="sobre-mi"
              // href="/trabajos#sobre-mi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sobre mí
            </a>

            <a
              className="nav-link"
              aria-label="contacto"
              // href="/trabajos#contacto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-button"
            aria-label={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
            title={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
          >
            {theme === "dark" ? (
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            ) : (
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
// import { useEffect, useState } from "react";
// import clsx from "clsx";

// import "./style.css";

// function Header() {
//   const [isScrolling, setIsScrolling] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       const scrollTop = window.scrollY;
//       setIsScrolling(scrollTop > 0);
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 transition duration-500"
//     >
//       <nav
//         className={clsx(
//           "flex items-center justify-between font-medium border-gray-100 rounded-full text-gray-600 dark:text-gray-200",
//           isScrolling && "px-3 border-none bg-red-500 shadow-lg",
//           !isScrolling && "pb-5"
//         )}
//       >
//         <a
//           className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
//           aria-label="proyectos"
//           href="/#proyectos"
//         >
//           Proyectos
//         </a>
//         <a
//           className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
//           aria-label="sobre-mi"
//           href="/#sobre-mi"
//         >
//           Sobre mi
//         </a>
//         <a
//           className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
//           aria-label="contacto"
//           href="mailto:carlosstqm2225@gmail.com"
//         >
//           Contacto
//         </a>
//         {/* <DarkModeSwitcher/> */}
//         {/* <<div className="relative ml-1 mr-1">
//           <button
//             id="theme-toggle-btn"
//             className="appearance-none border-none flex hover:scale-125 transition"
//           >
//             <span className="sr-only">Elige el tema</span>
//             <svg
//               id="light"
//               className="theme-toggle-icon size-5 transition-all"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               style={{ transform: themePreference === "light" ? "scale(1)" : "scale(0)" }}
//             >
//               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//               <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
//               <path
//                 d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
//               ></path>
//             </svg>
//             <svg
//               id="dark"
//               className="theme-toggle-icon absolute size-5 transition-all"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               style={{ transform: themePreference === "dark" ? "scale(1)" : "scale(0)" }}
//             >
//               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//               <path
//                 d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
//               ></path>
//             </svg>
//             <svg
//               id="system"
//               className="theme-toggle-icon absolute size-5 transition-all"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               style={{ transform: themePreference === "system" ? "scale(1)" : "scale(0)" }}
//             >
//               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//               <path
//                 d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"
//               ></path>
//               <path d="M7 20h10"></path>
//               <path d="M9 16v4"></path>
//               <path d="M15 16v4"></path>
//             </svg>
//           </button>

//           <div
//             id="themes-menu"
//             className="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
//           >
//             <ul>
//               <li className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
//                 Light
//               </li>
//               <li className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
//                 Dark
//               </li>
//               <li className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
//                 System
//               </li>
//             </ul>
//           </div>
//         </div>> */}
//       </nav>
//     </header>
//   );
// }

// export default Header;
