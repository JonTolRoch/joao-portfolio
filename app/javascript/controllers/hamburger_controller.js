import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
  connect(){
    const hamburgerIcon = this.element;
    const nav = document.querySelector("nav");

    hamburgerIcon.addEventListener("click",()=>{
      hamburgerIcon.classList.toggle("open");
      nav.classList.toggle("open");
    });
  }


}