// Select elements
const modal = document.getElementById("artModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".artwork");
const closeBtn = document.querySelector(".close");

// Open modal when image clicked
images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});
document.addEventListener("DOMContentLoaded", function () {

const modal = document.getElementById("artModal");
const modalImg = document.getElementById("modalImg");
const artTitle = document.getElementById("artTitle");
const artDesc = document.getElementById("artDesc");

const images = document.querySelectorAll(".artwork");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", function () {

        modal.style.display = "flex";
        modalImg.src = this.src;

        artTitle.textContent = this.dataset.title;
        artDesc.textContent = this.dataset.desc;
    });
});

closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
    if (e.target === modal)
        modal.style.display = "none";
};

});

// Close button
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close when clicking outside image
modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};