let elImgHolder = document.querySelector(".img-holder");
let elCircleImg = document.querySelector(".circle-box img");

elImgHolder.addEventListener("mousemove", (e) => {
  let x = e.offsetX - 50;
  let y = e.offsetY - 60;
  elCircleImg.style.transform = `translate(-${x}px, -${y}px) scale(2)`;
})