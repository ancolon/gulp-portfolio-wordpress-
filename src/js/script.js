jQuery(window).on('scroll' , function(){
    if( 100 < jQuery(this).scrollTop()){
      jQuery('.c-btn__top').addClass('u-is-show')
    }else {
      jQuery('.c-btn__top').removeClass('u-is-show')
    };
  });

  jQuery('.c-btn__top').on('click',function(){
    
  });

{
  const hamburger = document.querySelector('#hamburger');
  const drawer_box = document.getElementsByClassName("p-drawer-box");
  const hamburger_center = document.getElementsByClassName("");
  
  hamburger.addEventListener('click', ()=>{
    for (let i = 0; i < drawer_box.length; i++) {
          drawer_box[i].classList.toggle('u-drawer-is-open');
      }
      console.log(hamburger);
  });
    // drawer_box.classList.toggle('u-drawer-is-open');
      // 各要素に対してループを行い、クラスを追加する
      // for (let i = 0; i < drawer_box.length; i++) {
      //     drawer_box[i].classList.add('u-drawer-is-open');
      // }
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