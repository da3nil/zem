const articleBtnControlls = document.getElementById("articleControlls").querySelectorAll("button")

const changeContentInPDF = (e) => document.getElementById("ViewPDF").setAttribute("src", `./docs/${e.target.innerText}.pdf`)

for (const button of articleBtnControlls) {
  button.addEventListener("click", changeContentInPDF)
}
