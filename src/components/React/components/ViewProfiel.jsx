import React, { useEffect, useState } from "react";

function ViewProfile() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window !== "undefined") {
      //obtenemos el contador de visitas desde el localstorage
      let visitCount = localStorage.getItem("visitCount");
      let hasVisited = localStorage.getItem("hasVisited");

      // si no existe lo inicializamos en 0
      if (!visitCount) visitCount = 0;
      // si no ha visitado la página lo inicializamos en 1
      if (!hasVisited) {
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem("visitCount", visitCount);
        localStorage.setItem("hasVisited", "true");
      }
      //actualizamos el estado del contador
      setCount(visitCount);
    }
  }, []);

  return (
    <div class="rounded-lg max-w-screen-xl mx-auto md:flex md:items-center md:justify-between">
      <span class="text-sm sm:text-center text-center text-zinc-800/90 dark:text-zinc-200/90">Esta página ha sido visitada <em className="text-black">{count} veces.</em></span>
    </div>
  );
}

export default ViewProfile;
