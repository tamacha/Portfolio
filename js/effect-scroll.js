let scrollAnimationElm = document.querySelectorAll('.effect-fade');
let scrollAnimationFunc = function(){
    for(let i = 0; i < scrollAnimationElm.length; i++){
        let triggerMargin = 300;
        if(window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin){
            scrollAnimationElm[i].classList.add('show'); //getBoundingClientRectは要素の高さを取得
        }
    }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);