function logoAnimate() {
  const iconContainers = document.querySelectorAll('.icon-container');
  let delay = 0;

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
