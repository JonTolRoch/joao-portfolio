function logoAnimate() {

  const iconContainers = document.querySelectorAll('.iicon-container');
  let delay = 0;
  iconContainers.forEach((container) => {
    const animationShown = container.dataset.animationShown === "true";

    if (!animationShown) {
      setTimeout(() => {
        container.style.opacity = 1;
        container.dataset.animationShown = "true";
      }, delay);
    }
    delay += 0;
  });
}
document.addEventListener('DOMContentLoaded', () => {
  logoAnimate();
});