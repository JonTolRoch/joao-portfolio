import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  connect(){
    const hamburgerIcon = this.element;
    const mobileMenu = document.getElementById("mobile-menu");

    hamburgerIcon.addEventListener("click",()=>{
      hamburgerIcon.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.addEventListener("click",()=>{
      hamburgerIcon.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  }
}

