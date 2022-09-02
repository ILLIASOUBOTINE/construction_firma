const  aboutAs = [
    'We are not beginners in the field of services in the construction industry. Our company has been working in this direction for a long time. And we have much to be proud of. We are a dynamically developing company that sets itself the highest goals and objectives - constant professional growth, improving the quality of services provided, expanding the range of construction and repair services, expanding its activities and creating the most comfortable conditions for our customers.',
    'Of course, you might think that these are just high words, but behind these words there are real deeds. During its existence, our company has implemented a huge number of projects of varying complexity. And our customers were able to appreciate our professional level. Our company has managed to prove itself from the best side, to earn a reputation as a reliable partner. And, naturally, we do not want to spoil this reputation, we do not want to lower the professional requirements for ourselves. If we take on something, we do it qualitatively, at the highest level.',
    'Each of our employees is a true professional, for whom there are no blind spots in their work. It is difficult to find fault with the state of our material and technical base. At the same time, we attach great importance to the introduction of the most advanced technologies. After all, this is the only way to move forward, the only way to improve.',
    'As for the services provided, their range is quite wide. We try to protect our clients from additional troubles as much as possible. Capital construction, connection of electrical equipment, rental of construction equipment, equipment of objects, design design - this is just a part of our professional interests. At the same time, each client is important to us, in relation to each client we use only an individual approach.',
    'And further! We are always ready to meet the needs of our clients. We are well aware that in the construction industry there is an unimaginable number of nuances and additional issues. Everything is solved. You just need to contact us, our specialists will be able to dot all the “i”, find the best solution that will completely suit the client.',
] 

const list_menu = [{nameService: 'About us', arr:aboutAs},{nameService: 'Home', arr:['ererererer']}];

const titleMainConteiner = document.querySelector('#titleMainConteiner');
const listMenu = document.querySelector('#listNav');

listMenu.addEventListener('click', function(event){
   
    let activElem = event.target;
    console.dir(listMenu.children);
    console.dir(activElem);
    for(let e of listMenu.children){
        if(e === activElem){
          
          titleMainConteiner.innerText = activElem.innerText;
        //   function f1() {
        //     for(let e of document.querySelector('#mainConteiner').children){
        //        e.remove();
        //        console.dir(e);
        //     }
        //     return new Promise(function(resolve,reject){});
        //   }
         
          for(let e of list_menu){
            if(e.nameService === activElem.innerText){
                if(document.querySelector('#mainConteiner').firstChild !== null){
                     document.querySelector('#mainConteiner').firstChild.remove();
                }
               
                content(e.arr).then(data => console.log(data));
              
            }
          }
        }
    }
    
})



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




