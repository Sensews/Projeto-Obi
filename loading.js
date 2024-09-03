// loading.js
let loadingDiv = null; // Track the current loading div

function showLoading() {
    if (loadingDiv) return; // Don't create another loading screen if one exists

    loadingDiv = document.createElement("div");
    loadingDiv.classList.add("loading", "centralize");

    const img = document.createElement("img");
    img.src = "/assets/eye_loading.gif";
    img.alt = "Carregando...";

    loadingDiv.appendChild(img);
    document.body.appendChild(loadingDiv);

    // Força o navegador a processar os estilos antes de aplicar a transição
    loadingDiv.offsetHeight; 

    loadingDiv.style.opacity = 1; 

    setTimeout(() => hideLoading(), 2000); 
}

function hideLoading() {
    if (!loadingDiv) return; // Do nothing if no loading screen is present

    loadingDiv.style.opacity = 0; 
    setTimeout(() => {
        loadingDiv.remove();
        loadingDiv = null; // Reset the loadingDiv variable
    }, 500); 
}