import { navigate } from "./router.js";

document.querySelectorAll("[data-view]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigate(link.dataset.view);
  });
});