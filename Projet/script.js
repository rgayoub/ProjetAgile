const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active"); // Ajouter la classe active au menu hamburger
});



document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('emaill').value; // Utilisation de 'emaill' pour le champ email
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Affichage de l'alerte
    alert(`Merci ${name}, votre réservation a été soumise avec succès pour le ${date}. Nous vous contacterons bientôt à ${email}.`);

    // Affichage du message de confirmation dans la page
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block'; // Rendre le message visible
    confirmationMessage.innerHTML = `<div class="alert alert-success">Merci ${name}, votre réservation a été soumise avec succès pour le ${date}. Nous vous contacterons bientôt à ${email}.</div>`;

    // Ferme la modale après soumission
    $('#reservationModal').modal('hide');

    // Réinitialise le formulaire
    this.reset();
});


// email






