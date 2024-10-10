function toggleMode() {
  const modal = document.getElementById("modal")
  if (modal.classList.contains("exibeModal")) {
    modal.classList.toggle("exibeModal")
  }
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag image
  const img = document.querySelector("#profile img")

  // se tiver dark mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/logo/logo-dark.png")
  }
  //se tiver light mode, adicionar a imagem dark
  else {
    img.setAttribute("src", "./Assets/logo/logo-light.png")
  }
}

function exibeModal() {
  const modal = document.getElementById("modal")
  modal.classList.toggle("exibeModal")
}
