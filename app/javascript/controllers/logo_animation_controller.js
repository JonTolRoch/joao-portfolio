function logoAnimate() {

  const faceAnimate = document.querySelector('.face-logo');
  const iconContainers = document.querySelectorAll('.icon-container');
  let delay = 0;

  if (faceAnimate){
    setTimeout(()=>{
      faceAnimate.style.opacity = 1;
    },delay);
    delay += 500;
  }

  iconContainers.forEach((container) => {
    const animationShown = container.dataset.animationShown === "true";

    console.log("Animation Shown:", animationShown);

    if (!animationShown) {
      setTimeout(() => {
        container.style.opacity = 1;
        container.dataset.animationShown = "true";
      }, delay);
    }
    delay += 250;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  logoAnimate();
});
