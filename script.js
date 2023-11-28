function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag image
  const img = document.querySelector("#profile img")

  // se tiver dark mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatar-claro-callup.png")
  }
  //se tiver light mode, adicionar a imagem dark
  else {
    img.setAttribute("src", "./Assets/avatar-escuro-callup.png")
  }
}

// if (html.classList.contains("light")) {
// html.classList.remove("light")
// else {
//  html.classList.add("light")
