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
const services = []

const works = [
    'Redecorating', 'Overhaul', 'Renovation', 'Apartment renovation in new buildings', 'Bathroom renovation', 
    'Floor coverings', 'Water supply', 'Laying tiles', 'Wallpaper pasting', 'Electrical work', 'Decorative plaster', 'Door installation'
]

const listService = [
    'Repair work', 'Construction works', 'Design design', 'Complete set of objects', 'Equipment rent', 'Additional services'
]

const Redecorating = [
    'Cosmetic renovation of the apartment includes the following works:',
    ' Painting works (puttying walls and ceilings, subsequent wallpapering or painting, but without leveling);',
    'Replacing sockets without changing the wiring;',
    'Replacement of plumbing without replacing plumbing wiring;',
    'Laying laminate, linoleum, parquet boards, carpet with self-leveling mortar;',
    'Laying tiles with grout (if necessary);',
    'Replacement of doors (if necessary).',
    'Cost: from 1 800 r/m2.',

    'The cost of consumables: from 500 to 1,500 r/m2.',

    'Deadlines:',

    'Turnkey room - from 7 to 18 days.',
    'One-room apartment - from 25 days.',
    'Two-room apartment - from 40 days.',
    'Three-room apartment - from 50 days.',
    'Four-room apartment - from 65 days.',
]

// const Overhaul = [

//     'Capital renovation of the apartment includes:',
//     'Alignment of walls and ceilings on a plane, or at 90 degrees;',
//     'Further preparation of walls and ceilings for wallpaper or painting;',
//     'Leveling the floor with a cement-sand screed or self-leveling mortar;',
//     'Laying laminate, parquet boards, massive boards;',
//     'When carrying out electrical work, all internal wiring is replaced;',
//     'When carrying out plumbing work, a major replacement of plumbing wiring is carried out;',
//     'If necessary, the batteries are replaced;',
//     'Replacement of entrance and interior doors.',

//     'Cost: from 4 200 r/m2.',
//     'The cost of consumables: from 1,500 to 2,500 r/m2.',

//     'Deadlines:',
//     'Turnkey room - from 7 to 18 days.',
//     'One-room apartment - from 25 days.',
//     'Two-room apartment - from 40 days.',
//     'Three-room apartment - from 50 days.',
//     'Four-room apartment - from 65 days.',

    
// ]

// const Overhaul = {
//     dt1: 'Capital renovation of the apartment includes:',
//     dd1: [
//         'Alignment of walls and ceilings on a plane, or at 90 degrees;',
//         'Further preparation of walls and ceilings for wallpaper or painting;',
//         'Leveling the floor with a cement-sand screed or self-leveling mortar;',
//         'Laying laminate, parquet boards, massive boards;',
//         'When carrying out electrical work, all internal wiring is replaced;',
//         'When carrying out plumbing work, a major replacement of plumbing wiring is carried out;',
//         'If necessary, the batteries are replaced;',
//         'Replacement of entrance and interior doors.',
//     ],
//     dt2: 'Deadlines:', 
//     dd2: [
//         'Turnkey room - from 7 to 18 days.',
//         'One-room apartment - from 25 days.',
//         'Two-room apartment - from 40 days.',
//         'Three-room apartment - from 50 days.',
//         'Four-room apartment - from 65 days.',
//     ],
//     p:[
//         'Cost: from 4 200 r/m2.',
//         'The cost of consumables: from 1,500 to 2,500 r/m2.',
//     ],
// }

class myBlock {
    title = String;
    dt1 = String;
    dd1 = [];
    dt2 = String;
    dd2 = [];
    p = [];
}
class myListServises {
    title = String;
    listServises = [];
}

// let Overhaul = {
//     dt1: String,
//     dd1: [],
//     dt2: String,
//     dd2: [],
//     p:[],
// }

let list_servises = [];

const url = 'http://localhost:8080/getAllServiseWorks';
function sendRequest(method, url) {
    return fetch(url).then(response=>response.json());
}

sendRequest('GET', url).then((data) => {
    list_servises = data;
    console.dir(data);
    return new Promise(function(resolve, reject){
        resolve(list_servises)
    });
    
}).then(data=> {
    fooo();
    //console.log(data.map(e => e.subscribWorkDtoList));
});


function fooo() {
    // const list_menu = [{nameService: 'About us', arr:aboutAs},{nameService: 'Home', arr:home},{nameService: 'Contact us', arr:contact},
    // {nameService: 'Redecorating', arr:Redecorating},{nameService: 'Overhaul', arr:Overhaul},];
    const arrr = [];
    
    const list_subscribWorkDtoList = list_servises.map(e => e.subscribWorkDtoList);
    for(let e of list_subscribWorkDtoList){
        for(let e1 of e){
            arrr.push(e1);
        }
    }
    const list_menu = arrr;
    const list_menu1 = list_servises_menu;
    //console.dir(arrr);

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