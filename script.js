document.querySelectorAll(".copy__link").forEach((copyLinkParent) => {
  // Récupération des différents éléments
  const inputField = copyLinkParent.querySelector(".copy__link__input");
  const copyBtn = copyLinkParent.querySelector(".copy__link__btn");
  const text = inputField.value;

  // Ecoute de l'événement "focus" sur l'input
  inputField.addEventListener("focus", () => inputField.select());

  // Ecoute de l'événement "click" sur le bouton copier
  copyBtn.addEventListener("click", () => {
    // La méthode select() sélectionne tout le texte d'un élément <textarea> ou d'un élément <input> qui inclut un champ de texte.
    inputField.select();

    // La méthode writeText() de l'interface Clipboard écrit le texte spécifié dans le presse-papiers du système
    navigator.clipboard.writeText(text);

    inputField.value = "Copied!";
    // La méthode globale setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
    setTimeout(() => (inputField.value = text), 2500);
  });
});
