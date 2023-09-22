document.querySelectorAll(".copy__link").forEach((copyLinkParent) => {
  // Récupération des différents éléments
  const inputField = copyLinkParent.querySelector(".copy__link__input");
  const copyBtn = copyLinkParent.querySelector(".copy__link__btn");
  const text = inputField.value;

  // Ecoute de l'événement "focus" sur l'input
  inputField.addEventListener("focus", () => inputField.select());

  // Ecoute de l'événement "click" sur le bouton copier
  copyBtn.addEventListener("click", () => {
    inputField.select();
    navigator.clipboard.writeText(text);

    inputField.value = "Copied!";
    setTimeout(() => (inputField.value = text), 2500);
  });
});
