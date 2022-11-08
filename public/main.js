setInterval(() => {
  location.reload()
}, 110000)

//Nav
const navItem1 = document.getElementById('nav-item1')
const navItem2 = document.getElementById('nav-item2')
const textarea = document.getElementById('textarea')

let width = window.innerWidth

let width1 = 850
let width2 = 1640

navItem1.addEventListener('click', () =>{
  if (width < 1920 && width > 1020) {
    width1 = 902
  } else if (width < 840 && width > 500) {
    width1 = 1090
  }
    window.scroll({
        top: width1,
        behavior: 'smooth'
      });
})

navItem2.addEventListener('click', () =>{
  if (width < 1920 && width > 1020) {
    width2 = 1590
  } else if (width < 840 && width > 500) {
    width2 = 1780
  }
    window.scroll({
        top: width2,
        behavior: 'smooth'
      });
})

//Proyectos

const slider = document.getElementById('slider-proyectos')
const proyectos = document.getElementsByClassName('proyecto')
const leftBtn = document.getElementById('slide-left')
const rightBtn = document.getElementById('slide-right')


let iProyecto = 1
let cooldown = false

let proyecto = proyectos[iProyecto - 1]
proyecto.classList.remove('hidden')
proyecto.classList.add('block')

function deslizar (i) {
  let proyecto = proyectos[i - 1]
  proyecto.classList.remove('hidden')
  proyecto.classList.add('block')
}

function cooldownGenerator() {
  cooldown = true
  setTimeout(() => {
    cooldown = false
  }, 10000)
}

rightBtn.addEventListener('click', () => {
  if(iProyecto > 0  && iProyecto < proyectos.length) {
    let proyecto = proyectos[iProyecto - 1]
    proyecto.classList.remove('block')
    proyecto.classList.add('hidden')
    iProyecto++
    deslizar(iProyecto)
    cooldownGenerator()
  } else {
    proyectos[iProyecto - 1].classList.remove('block')
    proyectos[iProyecto - 1].classList.add('hidden')
    iProyecto = 1
    deslizar(iProyecto)
    cooldownGenerator()
  }
})

leftBtn.addEventListener('click', () => {
  if(iProyecto > 1  && iProyecto < proyectos.length + 1) {
    let proyecto = proyectos[iProyecto - 1]
    proyecto.classList.remove('block')
    proyecto.classList.add('hidden')
    iProyecto--
    deslizar(iProyecto)
    cooldownGenerator()
  } else {
    proyectos[iProyecto - 1].classList.remove('block')
    proyectos[iProyecto - 1].classList.add('hidden')
    iProyecto = proyectos.length
    deslizar(iProyecto)
    cooldownGenerator()
  }
})

setInterval(() => {
  if(iProyecto > 0  && iProyecto < proyectos.length) {
    if(!cooldown) {
      let proyecto = proyectos[iProyecto - 1]
      proyecto.classList.remove('block')
      proyecto.classList.add('hidden')
      iProyecto++
      deslizar(iProyecto)
    }
  } else {
    if(!cooldown) {
      proyectos[iProyecto - 1].classList.remove('block')
      proyectos[iProyecto - 1].classList.add('hidden')
      iProyecto = 1
      deslizar(iProyecto)
    }
  }
}, 7000)