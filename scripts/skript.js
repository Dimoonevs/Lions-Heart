var burger = document.querySelector('.header_burger')

burger.addEventListener('click', function () {
    if(burger.classList.contains('header_burger--active')){
        burger.classList.remove('header_burger--active');
    }else{
        burger.classList.add('header_burger--active');
    }
})
var menuBlock = document.querySelector('.menu')

burger.addEventListener('click', function() {
    if(menuBlock.classList.contains('menu--act')){
        menuBlock.classList.remove('menu--act')
    }else{
        menuBlock.classList.add('menu--act')
    }
})

var buttonModal = document.querySelector('.offer_btn');

var modalAct = document.querySelector('.modal_wrap');

var closeAct = document.querySelector('.modal_close');

buttonModal.addEventListener('click', function () {
    modalAct.classList.add('modal_wrap--act');
})

closeAct.addEventListener('click', function(){
    modalAct.classList.remove('modal_wrap--act')
})