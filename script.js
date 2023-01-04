const submitRating = document.querySelectorAll(".form__rating");
const submitBtn = document.querySelector(".form__submit");
let finalRating = document.querySelector(".modal__ratings");
const formWrapper = document.querySelector(".form__wrapper");
const modal = document.querySelector(".modal");

submitRating.forEach((rate) => {
  rate.addEventListener("click", () => {
    let rating = rate.value;
    finalRating.innerHTML = `You selected ${rating} out of 5`;
  });
});

formWrapper.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  formWrapper.style.display = "none";
});
