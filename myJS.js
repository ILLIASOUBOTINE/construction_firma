// const h12 = document.querySelector('.wraperr');
// console.dir(h12);
// const rest = document.querySelector('body');

// rest.addEventListener('mousemove',()=>{
//     if(h12.clientWidth <= 600){
//         h12.classList.add('wraperr1');
//     }else{
//         h12.classList.remove('wraperr1');
//     }
// })

 
const elem = document.querySelector('#carusel');
const arrowUp = document.querySelector('.arrow_up');
const arrowDown = document.querySelector('.arrow_down');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const arrElem = elem.querySelectorAll('img');

function carusel(btn1, btn2, arrElem){
    let caunt = 0;
    btn1.addEventListener('click', function(){
        // elem.classList.remove('carusel_reverse')
        // elem.classList.add('carusel')
        elem.append(arrElem[caunt]);
        caunt+=1;
        if(caunt === arrElem.length){
            caunt = 0;
        }
        console.log(caunt);
    });

    btn2.addEventListener('click', function(){
        // elem.classList.remove('carusel')
        // elem.classList.add('carusel_reverse')
        if(caunt === 0){
        caunt = arrElem.length ;
        }
        caunt-=1;
        elem.prepend(arrElem[caunt]);
        console.log(caunt);
    });
}

carusel(arrowUp, arrowDown, arrElem);
carusel(arrowLeft,arrowRight,arrElem);
