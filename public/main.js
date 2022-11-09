//Nav
const navItem1 = document.getElementById('nav-item1')
const navItem2 = document.getElementById('nav-item2')
const navItem3 = document.getElementById('nav-item3')
const textarea = document.getElementById('textarea')

let scrWidth = window.innerWidth

let width1 = 875
let width2 = 1810
let width3 = 2640

function scrollW (w) {
  // Medium-Lg devices
  if (scrWidth <= 1224 && scrWidth > 840) {
    w = w * 1.18
  // Medium devices
  } else if (scrWidth <= 840 && scrWidth > 640) {
    w = w * 1.45
  // Small devices
  } else if (scrWidth <= 640) {
    w = w * 1.43
  }
  window.scroll({
    top: w,
    behavior: 'smooth'
  });
}

navItem1.addEventListener('click', () =>{
  scrollW(width1)
})

navItem2.addEventListener('click', () =>{
  scrollW(width2)
})

navItem3.addEventListener('click', () =>{
  scrollW(width3)
})

//Proyectos

const slider = document.getElementById('slider-proyectos')
const rightBtn = document.getElementById('slide-right')
const proyectos = document.querySelectorAll('[proyecto]')
const contenidos = document.querySelectorAll('[proyecto-ctn]')
const leftBtn = document.getElementById('slide-left')


let iProyecto = 1
let cooldown = false

let proyecto = proyectos[iProyecto - 1]
proyecto.classList.remove('hidden')
proyecto.classList.add('block')

function ocultar () {
  let proyecto = proyectos[iProyecto - 1]
    proyecto.classList.remove('block')
    proyecto.classList.add('hidden')
}

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
    ocultar()
    iProyecto++
    deslizar(iProyecto)
    cooldownGenerator()
  } else {
    ocultar()
    iProyecto = 1
    deslizar(iProyecto)
    cooldownGenerator()
  }
})

leftBtn.addEventListener('click', () => {
  if(iProyecto > 1  && iProyecto < proyectos.length + 1) {
    ocultar()
    iProyecto--
    deslizar(iProyecto)
    cooldownGenerator()
  } else {
    ocultar()
    iProyecto = proyectos.length
    deslizar(iProyecto)
    
  }
})

contenidos.forEach(contenido => {
  contenido.addEventListener('mouseover', () => {
    console.log('H')
    cooldown = true
  })
  contenido.addEventListener('mouseout', () => {
    cooldown = false
  })
})

  // Autoslide

// setInterval(() => {
//   if(iProyecto > 0  && iProyecto < proyectos.length) {
//     if(!cooldown) {
//       ocultar()
//       iProyecto++
//       deslizar(iProyecto)
//     }
//   } else {
//     if(!cooldown) {
//       ocultar()
//       iProyecto = 1
//       deslizar(iProyecto)
//     }
//   }
// }, 7000)