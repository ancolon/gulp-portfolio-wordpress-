jQuery(window).on('scroll' , function(){
    if( 100 < jQuery(this).scrollTop()){
      jQuery('.c-btn__top').addClass('u-is-show')
    }else {
      jQuery('.c-btn__top').removeClass('u-is-show')
    };
  });

  jQuery('.c-btn__top').on('click',function(){
    
  });

const color_btn = document.querySelector('#color-btn');

color_btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    if(color_btn.textContent === 'ダークモード'){
        color_btn.textContent = "ライトモード";
    } else {
        color_btn.textContent = "ダークモード";
    }
});