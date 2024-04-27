const color_btn = document.querySelector('#color-btn');

color_btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    if(color_btn.textContent === 'ダークモード'){
        color_btn.textContent = "ライトモード";
    } else {
        color_btn.textContent = "ダークモード";
    }
});


