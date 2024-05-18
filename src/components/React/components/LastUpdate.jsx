import { useEffect, useState } from "react";
function LastUpdate() {
  const [lastModified, setLastModified] = useState("");
  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof document !== "undefined") {
      setLastModified(document.lastModified);
    }
  }, []);
  return (
    <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
      <span className="text-sm sm:text-center inline-grid text-center text-zinc-800/90 dark:text-zinc-200/90 md:flex">
        Última actualización: <em className="text-black">{lastModified}</em>
      </span>
    </div>
  );
}

export default LastUpdate;
