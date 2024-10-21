/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firstname, _date, _address, _email);
Pour récupérer la liste:  contactStore.getList();
*/
var contactStore = (function () {
    // Variable privée pour stocker la liste des contacts
    let contactListString = localStorage.getItem("contactList");
    var contactList = contactListString ? JSON.parse(contactListString) : [];

    // Expose ces fonctions via une interface tout en cachant
    // l'implémentation du module dans le bloc de fonction

    return {
        add: function (_name, _firstname, _date, _address, _email) {
            var contact = {
                name: _name,
                firstname: _firstname,
                date: _date,
                address: _address,
                email: _email,
            };
            // Ajout du contact à la liste
            contactList.push(contact);

            // Persistance de la liste dans localStorage
            localStorage.setItem("contactList", JSON.stringify(contactList));

            return contactList;
        },
        reset: function () {
            localStorage.removeItem("contactList");
            contactList = []; // Réinitialiser la liste en mémoire
            return contactList;
        },
        getList: function () {
            return contactList;
        },
    };
})();
