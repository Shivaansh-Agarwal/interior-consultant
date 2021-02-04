const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const popup = document.querySelector('.popup');

const btnHamburgerMenu = document.querySelector('i.fa-bars');
const btnCross = document.querySelector('i.fa-times');

const debounce = function(func, threshold, execAsap){
    let timeout;
    return function debounced(){
      const scopeObj=this, args=arguments;
      function delayed(){
        if(!execAsap)
          func.apply(scopeObj,args);
        timeout = null;
      }
      if(timeout)
        clearTimeout(timeout);
      else if(execAsap)
        func.apply(scopeObj, args);
      
      timeout = setTimeout(delayed, threshold || 100);
    };
}

function adjustView(){
    if(window.innerWidth < 1330){
        nav.classList.add('inactive');
        btnHamburgerMenu.classList.remove('inactive');
        btnCross.classList.add('inactive');
    } else {
        nav.classList.remove('inactive');
        btnHamburgerMenu.classList.add('inactive');
        btnCross.classList.add('inactive');
    }
}

function openMenuList(e){
    header.classList.add('flex-end');
    logo.classList.add('inactive');
    main.classList.add('inactive');
    footer.classList.add('inactive');
    popup.classList.remove('inactive');
    btnHamburgerMenu.classList.add('inactive');
    btnCross.classList.remove('inactive');
}

function closeMenuList(e){
    header.classList.remove('flex-end');
    logo.classList.remove('inactive');
    main.classList.remove('inactive');
    footer.classList.remove('inactive');
    popup.classList.add('inactive');
    btnHamburgerMenu.classList.remove('inactive');
    btnCross.classList.add('inactive');
}

btnHamburgerMenu.addEventListener('click',openMenuList);
btnCross.addEventListener('click', closeMenuList);
window.addEventListener('resize', debounce(adjustView, 300, true));
adjustView();