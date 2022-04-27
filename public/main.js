const $btnMenu = document.getElementById("btn-menu");
const $Menu = document.getElementById("menu");

$btnMenu.addEventListener("click", () => {
  $btnMenu.classList.toggle("active");
  $Menu.classList.toggle("active");
  if (!$btnMenu.classList.contains("active")) {
    $btnMenu.innerHTML = `<i class='bx bx-menu' ></i>`;
  } else {
    $btnMenu.innerHTML = `<i class='bx bx-x' ></i>`;
  }
});
