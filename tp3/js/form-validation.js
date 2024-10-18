window.onload = function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire pour effectuer la validation

        // Récupérer les valeurs des champs
        const name = document.getElementById("name").value;
        const prenom = document.getElementById("prenom").value;
        const birthday = document.getElementById("birthday").value;
        const email = document.getElementById("email").value;
        const adresse = document.getElementById("adresse").value;

        // Vérification si tous les champs sont remplis
        if (!name || !prenom || !birthday || !email || !adresse) {
            // Afficher la modal pour les champs obligatoires
            var mandatoryModal = new bootstrap.Modal(document.getElementById("mandatoryFieldsModal"));
            mandatoryModal.show();
            return; // Arrête le traitement
        }

        // Validation des champs
        if (name.length < 5 || prenom.length < 5) {
            alert("Le nom et le prénom doivent contenir au moins 5 caractères.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Adresse email invalide.");
            return;
        }
        const birthdayDate = new Date(birthday);
        if (birthdayDate > new Date()) {
            alert("La date de naissance ne peut pas être dans le futur.");
            return;
        }

        // Si tout est valide, afficher les informations dans la modal
        const userInfo = `
            <h6>Informations saisies :</h6>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Prénom :</strong> ${prenom}</p>
            <p><strong>Date de naissance :</strong> ${birthday}</p>
            <p><strong>Adresse :</strong> ${adresse}</p>
            <p><strong>Email :</strong> ${email}</p>
        `;
        document.getElementById("userInfo").innerHTML = userInfo;

        // Afficher la modal avec les informations
        var myModal = new bootstrap.Modal(document.getElementById("myModal"));
        myModal.show();
    });
};

// Fonction pour valider l'email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
