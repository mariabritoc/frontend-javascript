const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMenuMobile);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu(){
    const isAsideClosed = productMenu.classList.contains('inactive');

    if(!isAsideClosed){
        productMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}


function toggleMenuMobile(){
    const isAsideClosed = productMenu.classList.contains('inactive');

    if(!isAsideClosed){
        productMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
        
    productMenu.classList.toggle('inactive');

}


