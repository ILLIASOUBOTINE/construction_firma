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

const arrImgTitle = ['imgs\\carusel\\car1.jpg', 'imgs\\carusel\\car2.jpg', 'imgs\\carusel\\car3.jpg', 'imgs\\carusel\\car4.jpg', 'imgs\\carusel\\car5.jpg'] 

const caruselPromise = new Promise(function(resolve, reject){
    const elem = document.querySelector('#carusel');
    for(let el of arrImgTitle){
        //console.log(el)
        let elImg = document.createElement('img');
        elImg.setAttribute('src', el);
        elem.append(elImg);
    }
     if(elem.querySelectorAll('img').length === 0){
        reject('imgs don\'t load');
     }else{
         resolve(elem);
     }
   
});



//const arrElem = elem.querySelectorAll('img');
const arrowUp = document.querySelector('.arrow_up');
const arrowDown = document.querySelector('.arrow_down');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


function carusel(btn1, btn2, elem){
    let caunt = 0;
    const arrElem = elem.querySelectorAll('img');
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

caruselPromise.then(data=>{
    carusel(arrowUp, arrowDown, data);
    carusel(arrowLeft,arrowRight, data);
}).catch(err => console.error(err));


