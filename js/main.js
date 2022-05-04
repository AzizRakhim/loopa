let elImgHolder = document.querySelector(".img-holder");
let elCircleImg = document.querySelector(".circle-box img");
let elCircleBox = document.querySelector(".circle-box");

elImgHolder.addEventListener("mousemove", (e) => {
  elCircleBox.style.display = "block";
  let x = e.offsetX;
  let y = e.offsetY;
  elCircleImg.style.transform = `translate(-${x}px, -${y}px) scale(2)`;
});

elImgHolder.addEventListener("mouseleave", () => {
  elCircleBox.style.display = "none";
});