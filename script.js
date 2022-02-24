const navIcon = document.querySelector(".nav-icon")
const navContent = document.querySelector("#nav-content")
const closeIcon = document.querySelector(".close-btn")
const navLinks = document.querySelectorAll("nav a")

navIcon.addEventListener("click", () => {
  navContent.classList.add("show")
  document.body.style.overflow = "hidden"
})

closeIcon.addEventListener("click", () => {
  navContent.classList.remove("show")
  document.body.style.overflow = "auto"
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContent.classList.remove("show")
    document.body.style.overflow = "auto"
  })
})
