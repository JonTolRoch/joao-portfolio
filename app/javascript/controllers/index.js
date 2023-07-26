import { Application } from "@hotwired/stimulus";
import CustomController from "./custom_controller";
import TypedController from "./typed_controller";
import LogoAnimate from "./logo_animation_controller"

const application = Application.start();
application.register("custom", CustomController);
application.register("typed", TypedController);
application.register("logoAnimation",LogoAnimate)


 document.addEventListener("DOMContentLoaded", function() {
   LogoAnimate();
 });

export { application };