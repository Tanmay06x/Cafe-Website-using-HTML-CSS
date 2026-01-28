  const menuIcon = document.querySelector(".icon");
  const menu = document.querySelector(".secondnav");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
  });