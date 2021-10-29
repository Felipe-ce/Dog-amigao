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

// Função navegação por tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll('#categoria');
  const tabContent = document.querySelectorAll('.card-dog');


  if(tabMenu.length && tabContent.length) {
    tabMenu[0].classList.add('ativo');
    tabContent.forEach((item) =>{
      item.classList.add('ativo')
    });

    

    function activeTab(index) {
      tabContent.forEach((item) =>{
        item.classList.remove('ativo')
      });
      switch (index) {
        case 0:
          tabContent.forEach((item) =>{
            item.classList.remove('ativo')
          });
          tabMenu.forEach((menu) =>{
            menu.classList.remove('ativo')
          })
          tabMenu[0].classList.add('ativo');

          tabContent.forEach((item) =>{
              item.classList.toggle('ativo')
          });
          break;
        case 1:
          tabMenu.forEach((menu) =>{
            menu.classList.remove('ativo')
          })
          tabMenu[1].classList.add('ativo');

          tabContent.forEach((item) =>{
            if(item.classList.contains('pequeno')){
              item.classList.add('ativo')
            }
          });
          break
        case 2:
          tabMenu.forEach((menu) =>{
            menu.classList.remove('ativo')
          })
          tabMenu[2].classList.add('ativo');

          tabContent.forEach((item) =>{
            if(item.classList.contains('medio')){
              item.classList.add('ativo')
            }
          });
          break
        case 3:
            tabMenu.forEach((menu) =>{
              menu.classList.remove('ativo')
            })
            tabMenu[3].classList.add('ativo');
  
            tabContent.forEach((item) =>{
              if(item.classList.contains('grande')){
                item.classList.add('ativo')
              }
            });
          break
        default:
          break;
      }
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  } 
}

initTabNav()
initAccosdionList()
iniMenuMobile()
