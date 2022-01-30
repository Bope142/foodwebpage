const navbar = (s)=>{
  if(!document.querySelector( '.mobile-menu' ).classList.contains('menu-active')){
     if(s < 120){
    document.querySelector('.header__nav').classList.remove('header__nav_show')
  }
  else{
     document.querySelector('.header__nav').classList.add('header__nav_show')
  }
  }

}
const menuMobil=()=>{
    const menu = document.querySelector( '.mobile-menu' );
        menu.addEventListener( 'click', ( ) => {
            menu.classList.toggle( 'menu-active' );
            document.querySelector('.navigation__mobile').classList.toggle( 'navigation__mobile_show' );

              // document.querySelector('.header__nav').classList.add('header__nav_show')
              if((!document.querySelector( '.mobile-menu' ).classList.contains('menu-active'))&& (window.scrollY < 120)){
 document.querySelector('.header__nav').classList.remove('header__nav_show')
              }else{
                 document.querySelector('.header__nav').classList.add('header__nav_show')
              }
        } );
}
const scroll = document.querySelector('#scroll-top');
window.addEventListener('scroll', ()=>{
 navbar(window.scrollY)
 if (this.scrollY > 800) {
        scroll.style.visibility = 'visible';
    } else {
        scroll.style.visibility = 'hidden';
    }
})
window.addEventListener('load', (e)=>{
  document.querySelector('.load__page').style.display="none"
    document.querySelector('.container').style.display="flex"
 menuMobil()
})
