//Ici avec DOMContentLoaded, on s'assure que toute la page a chargé
document.addEventListener("DOMContentLoaded", () => {
  // Sur l'élement qui a pour id 'contact-form' on attend que l'on clique sur le bouton submit
  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      // Ici on empêche le refresh de la page
      event.preventDefault();

      // 1) On récupère les différentes values du formulaire
      const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value,
      };

      // 2) On envoie les datas au serveur
      // Ici je met la réponse dans une constante pour pouvoir effectuer une action après
      const response = await axios.post(
        "https://mailguntestback.herokuapp.com/form",
        data
      );
      console.log(response);
    });
});
