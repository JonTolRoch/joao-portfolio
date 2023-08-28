import { Controller } from "@hotwired/stimulus";
import Typed from 'typed.js';

export default class extends Controller {
  connect() {
    const typedTextElement = this.element;
    const animationShown = typedTextElement.dataset.animationShown === 'true';

    if (!animationShown) {
      new Typed(typedTextElement, {
        strings: ["Full Stack Development."],
        typeSpeed: 30,
        showCursor: true,
        onComplete: () => {
          typedTextElement.dataset.animationShown = 'true';
        }
      });
    }
  }
}