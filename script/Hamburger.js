export function toggle(menu, list) {
  menu.addEventListener("click", () => {
    list.classList.toggle("hidden");
    console.log("clicked");
  });
}
