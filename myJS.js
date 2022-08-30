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

let caunt = 0;
function carusel(btn1, btn2, elem){
    
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


const elemBtn_menu = document.querySelector('#btn_menu');
const elem_menu_700px = document.querySelector('.menu_700px');
const elem_p_x = document.querySelector('.p_x');
elemBtn_menu.addEventListener('click', function(){
    elem_menu_700px.style.display = 'flex';
    console.dir(elem_menu_700px)
})

elem_menu_700px.addEventListener('click', function(event){
    const arrLista = elem_menu_700px.querySelectorAll('a');
    for(let e of arrLista){
        if( event.target === elem_p_x || event.target === e ){
            elem_menu_700px.style.display = 'none';
            return;
        }
    }
  
    console.dir(elem_menu_700px)
})