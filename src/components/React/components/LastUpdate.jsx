import { useEffect, useState } from "react";
function LastUpdate() {
  const [lastModified, setLastModified] = useState("");


  useEffect(() => {
    //propietario de la repo y la repo
    const repoOwner = 'carsanjs';
    const repoName = 'My_Repo'
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const lastCommit = data[0];
          const lastCommitDate = new Date(lastCommit.commit.author.date).toLocaleString();
          setLastModified(lastCommitDate);
        }
      })
      .catch(error => console.error('Error fetching last commit:', error));
  }, []);
    // Verificar si estamos en el navegador
  //   if (typeof document !== "undefined") {
  //     setLastModified(document.lastModified);
  //   }
  // }, []);

  return (
    <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
      <span className="text-sm sm:text-center inline-grid text-center text-zinc-800/90 dark:text-zinc-200/90 md:flex">
        Última actualización: <em className="text-black">{lastModified}</em>
      </span>
    </div>
  );
}

export default LastUpdate;
