// Função menu mobile
function iniMenuMobile() {
  const btnMobile = document.querySelector("#btn-mobile")
  
  function toggleMenu(params) {
    const nav = document.querySelector("#nav")
    nav.classList.toggle('ativo')
  }
  
  btnMobile.addEventListener('click', toggleMenu)
}

// Função accordion list
function initAccosdionList() {
  const dt = document.querySelectorAll('dt')
  
  
  dt.forEach((item) =>{
    
    item.addEventListener('click', function () {
      
      
      this.classList.toggle('ativo')
      item.nextElementSibling.classList.toggle('ativo')
    })
  })
  
}

initAccosdionList()
iniMenuMobile()