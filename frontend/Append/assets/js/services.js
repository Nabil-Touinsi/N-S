// URL de l'API backend pour récupérer un service spécifique
console.log("Script `services.js` chargé !");

const apiUrl = "http://localhost:3000/api/services/1"; // L'ID 1 correspond à "Locations Confortables"

// Élément cible dans le DOM (emplacement du service)
document.addEventListener("DOMContentLoaded", () => {
    const locationsConfortablesContainer = document.querySelector("#service-row");
    console.log("Conteneur ciblé :", locationsConfortablesContainer);
    if (!locationsConfortablesContainer) {
        console.error("Erreur : l'élément #service-row n'existe pas dans le DOM.");
    }
    fetch(apiUrl)
      .then((response) => {
        console.log("Réponse brute :", response);
        return response.json();
      })
      .then((service) => {
        console.log("Données service :", service);
        locationsConfortablesContainer.innerHTML = `
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="${service.icon}"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">${service.title}</a></h4>
                <p class="description">${service.description}</p>
              </div>
            </div>
          </div>`;
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  });
  
