jQuery(window).on('scroll' , function(){
    if( 100 < jQuery(this).scrollTop()){
      jQuery('.c-btn__top').addClass('u-is-show')
    }else {
      jQuery('.c-btn__top').removeClass('u-is-show')
    };
  });

  jQuery('.c-btn__top').on('click',function(){
    
  });

// ハンバーガーメニュー

{
  const hamburger = document.querySelector('#hamburger');
  const drawer_box = document.querySelectorAll(".p-drawer-box");
  const hamburger_item = document.querySelectorAll(".c-nav-item");
  
  hamburger.addEventListener('click', ()=>{
    for (let i = 0; i < drawer_box.length; i++) {
          drawer_box[i].classList.toggle('u-drawer-is-open');
      }
  });

    for(var i = 0; i < hamburger_item.length; i++){
      hamburger_item[i].addEventListener('click',function(){
        for (let i = 0; i < drawer_box.length; i++) {
          drawer_box[i].classList.remove('u-drawer-is-open');
      }
    },false);
  }
}

// トップボタン
{

}

{

const color_btn = document.querySelector('#color-btn');

color_btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    if(color_btn.textContent === 'ダークモード'){
        color_btn.textContent = "ライトモード";
    } else {
        color_btn.textContent = "ダークモード";
    }
});

}