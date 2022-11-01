const navItem1 = document.getElementById('nav-item1')
const navItem2 = document.getElementById('nav-item2')

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
