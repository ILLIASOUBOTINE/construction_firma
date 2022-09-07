
 //// for rs - carusel

const arrImgTitle = ['imgs\\carusel\\car1.jpg', 'imgs\\carusel\\car2.jpg', 'imgs\\carusel\\car3.jpg', 'imgs\\carusel\\car4.jpg', 'imgs\\carusel\\car5.jpg'] 

const caruselPromise = new Promise(function(resolve, reject){
    const elem = document.querySelector('#carusel');
    for(let el of arrImgTitle){
        //console.log(el)
        let elDivImg = document.createElement('div');
        elDivImg.classList.add('elDivImg');
        let elBtnImg = document.createElement('button');
        elBtnImg.classList.add('elBtnImg');
        elBtnImg.innerText = 'View';
        let elImg = document.createElement('img');
        elImg.setAttribute('src', el);
        elDivImg.append(elBtnImg);
        elDivImg.append(elImg);
        elem.append(elDivImg);
        
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
    
    const arrElem = elem.querySelectorAll('div');
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
document.querySelector('body').addEventListener('mousemove', function(){
    if(document.querySelector('body').clientWidth > 700){
        elem_menu_700px.style.display = 'none'
    }
})

const elemBtn_menu = document.querySelector('#btn_menu');
const elem_menu_700px = document.querySelector('.menu_700px');
const elem_p_x = document.querySelector('.p_x');

elemBtn_menu.addEventListener('click', function(){
    elem_menu_700px.style.display = 'flex';
    console.dir(document.querySelector('body').clientWidth)
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
let listServises =[];
const url = 'http://localhost:8080/getAllServiseWorks';
function sendRequest(method, url) {
    return fetch(url).then(response=>response.json());
}
sendRequest('GET', url).then((data) => {
    listServises = data;
    const list_service = document.querySelector('.list_service');
    
    for(let e of listServises){
        createDivService(list_service, e.subscribWorkDtoList.map(e=>e.title), e.nameServiceWorks);
    }
    console.dir(listServises);
    return new Promise(function(resolve, reject){
        resolve(list_service)
    });
    
}).then(e =>{
    f1(e);
    fooo();
});



function f1(list_service) {
    const arrA = list_service.querySelectorAll('.a_title_service');

    let previousElem;
   // let togle = true;
    list_service.addEventListener('click',function(event){
      
        //console.dir(event.target);
        //console.log(arrA);
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
        a1.classList.add('nav1')
        a1.setAttribute('href', '#')
        a1.innerText = e; 
        div_for_a.append(a1);
    }
}


// mn




function fooo() {
   
    const arrr = [];
    
    const list_subscribWorkDtoList = listServises.map(e => e.subscribWorkDtoList);
    //console.dir(list_subscribWorkDtoList);
    for(let e of list_subscribWorkDtoList){
        for(let e1 of e){
            arrr.push(e1);
        }
    }
    const list_menu = arrr;
    const list_menu1 = list_servises_menu;
    console.dir(arrr);

    const titleMainConteiner = document.querySelector('#titleMainConteiner');
    //const listMenu = document.querySelector('#listNav');
    const bodyElem = document.querySelector('body');
    const listMenu = document.querySelectorAll('.nav1');
    bodyElem.addEventListener('click', function(event){
   
        let activElem = event.target;
        //console.dir(listMenu);
        //console.dir(activElem);
        for(let e of listMenu){
            if(e === activElem){
                for(let e1 of list_menu){
                    if(e1.title === activElem.innerText){
                        if(document.querySelector('#mainConteiner').firstChild !== null){
                            document.querySelector('#mainConteiner').firstChild.remove();
                        }
                        titleMainConteiner.innerText = activElem.innerText;
                        contentServices(e1).then();
                        //content(e1.arr).then();
                    } 
                }
                
                for(let e1 of list_menu1){
                    if(e1.title === activElem.innerText){
                        if(document.querySelector('#mainConteiner').firstChild !== null){
                            document.querySelector('#mainConteiner').firstChild.remove();
                        }
                        titleMainConteiner.innerText = activElem.innerText;
                        content(e1.arr).then();
                        
                    } 
                }
            
            
           
            }
        }
    
    })
}




function content(arr) {
    return new Promise(function(resolve, reject){
        const mainConteiner = document.querySelector('#mainConteiner');
        console.dir(mainConteiner);
        let div_conteiner = document.createElement('div');
        for(let el of arr){
            //console.log(el)
            let p_conteiner = document.createElement('p');
            p_conteiner.classList.add('p_conteiner');
            p_conteiner.innerText = el;
            div_conteiner.append(p_conteiner);
            
        }
        mainConteiner.append(div_conteiner);
        if(mainConteiner.querySelectorAll('p').length === 0){
            reject('text didn\'t load');
        }else{
            resolve(mainConteiner);
        } 
   
    });
}







function contentServices(obj) {
    return new Promise(function(resolve, reject){
        const mainConteiner = document.querySelector('#mainConteiner');
        //.dir(mainConteiner);
        let div_conteiner = document.createElement('div');
        
        
        let dl_conteiner = document.createElement('dl');
        let dt1_conteiner = document.createElement('dt');
        dt1_conteiner.classList.add('dt_conteiner')
        dt1_conteiner.innerText = obj.dt1;
        for(let e of obj.dd1){
            let dd1_conteiner = document.createElement('dd'); 
            dd1_conteiner.classList.add('dd_conteiner')
            dd1_conteiner.innerText = e;
            dt1_conteiner.append(dd1_conteiner);
        }
        let dt2_conteiner = document.createElement('dt');
        dt2_conteiner.classList.add('dt_conteiner')
        dt2_conteiner.innerText = obj.dt2;
        for(let e of obj.dd2){
            let dd2_conteiner = document.createElement('dd'); 
            dd2_conteiner.classList.add('dd_conteiner')
            dd2_conteiner.innerText = e;
            dt2_conteiner.append(dd2_conteiner);
        }
        let div_p_conteiner = document.createElement('div');
        for(let e of obj.p){
            let p_conteiner = document.createElement('p'); 
            p_conteiner.classList.add('p_conteiner')
            p_conteiner.innerText = e;
            div_p_conteiner.append(p_conteiner);
        }

        dl_conteiner.append(dt1_conteiner);
        dl_conteiner.append(dt2_conteiner);    

        div_conteiner.append(dl_conteiner);
        div_conteiner.append(div_p_conteiner);    
        mainConteiner.append(div_conteiner);
        if(obj === undefined){
            reject('text didn\'t load');
        }else{
            resolve(mainConteiner);
        } 
   
    });
}


const  aboutAs = [
    'We are not beginners in the field of services in the construction industry. Our company has been working in this direction for a long time. And we have much to be proud of. We are a dynamically developing company that sets itself the highest goals and objectives - constant professional growth, improving the quality of services provided, expanding the range of construction and repair services, expanding its activities and creating the most comfortable conditions for our customers.',
    'Of course, you might think that these are just high words, but behind these words there are real deeds. During its existence, our company has implemented a huge number of projects of varying complexity. And our customers were able to appreciate our professional level. Our company has managed to prove itself from the best side, to earn a reputation as a reliable partner. And, naturally, we do not want to spoil this reputation, we do not want to lower the professional requirements for ourselves. If we take on something, we do it qualitatively, at the highest level.',
    'Each of our employees is a true professional, for whom there are no blind spots in their work. It is difficult to find fault with the state of our material and technical base. At the same time, we attach great importance to the introduction of the most advanced technologies. After all, this is the only way to move forward, the only way to improve.',
    'As for the services provided, their range is quite wide. We try to protect our clients from additional troubles as much as possible. Capital construction, connection of electrical equipment, rental of construction equipment, equipment of objects, design design - this is just a part of our professional interests. At the same time, each client is important to us, in relation to each client we use only an individual approach.',
    'And further! We are always ready to meet the needs of our clients. We are well aware that in the construction industry there is an unimaginable number of nuances and additional issues. Everything is solved. You just need to contact us, our specialists will be able to dot all the “i”, find the best solution that will completely suit the client.',
] 

const  home = [
    'We are not beginners in the field of services in the construction industry. Our company has been working in this direction for a long time. And we have much to be proud of. We are a dynamically developing company that sets itself the highest goals and objectives - constant professional growth, improving the quality of services provided, expanding the range of construction and repair services, expanding its activities and creating the most comfortable conditions for our customers.',
    'Of course, you might think that these are just high words, but behind these words there are real deeds. During its existence, our company has implemented a huge number of projects of varying complexity. And our customers were able to appreciate our professional level. Our company has managed to prove itself from the best side, to earn a reputation as a reliable partner. And, naturally, we do not want to spoil this reputation, we do not want to lower the professional requirements for ourselves. If we take on something, we do it qualitatively, at the highest level.',
    'Each of our employees is a true professional, for whom there are no blind spots in their work. It is difficult to find fault with the state of our material and technical base. At the same time, we attach great importance to the introduction of the most advanced technologies. After all, this is the only way to move forward, the only way to improve.',
]

const contact = [
    'Contact Information:','Phone: (+33) 689-71-65-45', 'Email mail: info@re-construction_firma.fr', 'Address: 42 Rte de Baillargues, 34130 Mauguio'
]

const list_servises_menu = [{title: 'Home', arr: home},{title: 'About us', arr: aboutAs},{title: 'Contact us', arr: contact}]