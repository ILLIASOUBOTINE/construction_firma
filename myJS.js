
 //// for rs - carusel

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

////// for hd - is little menue
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

///// for ls 
const promiseLs = new Promise(function(resolve,reject){
    const works = ['Redecorating', 'Overhaul', 'Renovation', 'Apartment renovation in new buildings', 'Bathroom renovation', 
    'Floor coverings', 'Water supply', 'Laying tiles', 'Wallpaper pasting', 'Electrical work', 'Decorative plaster', 'Door installation']
    const listService = ['Repair work', 'Construction works', 'Design design', 'Complete set of objects', 'Equipment rent', 'Additional services']

    const list_service = document.querySelector('.list_service');

    for(let e of listService){
        createDivService(list_service, works, e)
    }
    resolve(list_service);
})

promiseLs.then(e =>f1(e));

function f1(list_service) {
    const arrA = list_service.querySelectorAll('.a_title_service');

    let previousElem;
   // let togle = true;
    list_service.addEventListener('click',function(event){
        
        

        
        console.dir(event.target);
        console.log(arrA);
        for(let e of arrA){
            //console.log(e);
            if(event.target === e){
                let divSevice = e.parentElement; 
                //console.dir(divSevice);
                if(previousElem === event.target || previousElem === undefined){
                    e.classList.toggle('a_active');
                    divSevice.children[1].classList.toggle('div_for_a_activ');
                    //divSevice.children[1].style.display = 'flex';

                }else{
                    divSevice.children[1].classList.toggle('div_for_a_activ');
                    e.classList.toggle('a_active');

                    let divSevicePrevious = previousElem.parentElement;
                    divSevicePrevious.children[1].classList.remove('div_for_a_activ');
                    previousElem.classList.remove('a_active');
                }
                //togle = !togle;
                previousElem = event.target;
            }
        }
        
        
    })

}


function createDivService(elemDiv, arrWorks, e) {
    let divSevice = document.createElement('div');
    divSevice.classList.add('service');
    elemDiv.append(divSevice);
    let div_for_a = document.createElement('div');
    div_for_a.classList.add('div_for_a');
    let a_title_service = document.createElement('a');
    a_title_service.classList.add('a_title_service');
    a_title_service.setAttribute('href', '#');
    a_title_service.innerText = e;
    divSevice.append(a_title_service);
    divSevice.append(div_for_a);
   
    for(let e of arrWorks){
        let a1 = document.createElement('a');
        a1.setAttribute('href', '#')
        a1.innerText = e; 
         div_for_a.append(a1);
    }
}





// function createDivService(elemDiv, arrWorks) {
//     let divSevice = document.createElement('div');
//     divSevice.classList.add('service');
//     elemDiv.append(divSevice);
//     let div_for_a = document.createElement('div');
//     div_for_a.classList.add('div_for_a');
//     let a_title_service = document.createElement('a');
//     divSevice.append(a_title_service);
//     divSevice.append(div_for_a);
//     let togle = true;
//     a_title_service.addEventListener('click',function(){
        
//         if(div_for_a.querySelectorAll('a').length === 0){
        
//             for(let e of arrWorks){
//                 let a1 = document.createElement('a');
//                 a1.innerText = e; 
//                 div_for_a.append(a1);
//             }
//         }

//         if(togle){
//             a_title_service.classList.add('a_active');
//             div_for_a.style.display = 'flex';
//         }else{
//             div_for_a.style.display = 'none';
//             a_title_service.classList.remove('a_active');
//         }
//         togle = !togle;
        
//     })
// }







