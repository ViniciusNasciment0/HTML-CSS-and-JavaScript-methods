function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); 


function scrolltoSection(event) { 
  event.preventDefault(); 
  const href = event.currentTarget.getAttribute('href'); 
  const section = document.querySelector(href); 
  const topo = section.offsetTop;
  window.scrollTo({ 
    top:topo,
    behavior: "smooth",
   });
}

linksInternos.forEach((link) => { 
  link.addEventListener("click", scrolltoSection); 
})
} 
initScrollSuave();


function initAnimacaoScroll() {  //13 
  const sections = document.querySelectorAll(".js-scroll"); //1

  if (sections.length) { // 12 
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() { // 2 
      sections.forEach((section) => { // 4 why ? 
        const sectionTop = section.getBoundingClientRect().top; // 5
        const isSectionVisible = (sectionTop - windowMetade) < 0; //9

        if (isSectionVisible) { // 6 
          section.classList.add("ativo"); // 7
        } else { // 10 
          section.classList.remove("ativo"); // 10
        }
      });
    }

    animaScroll(); // 11 

    window.addEventListener("scroll", animaScroll); // 3 
  }
}

initAnimacaoScroll();
