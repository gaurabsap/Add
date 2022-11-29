

const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const list = document.querySelector('.lists');

// const un = document.querySelector('.onorder')
// const li = document.querySelector('.li')
// const last = document.querySelector('.btn')




function div(text){
    let diver = document.createElement('div');
    diver.className = text;
    container.appendChild(diver);
}


// function button(name){
//     let butt = document.createElement('button');
//     butt.textContent = name;
// }



    // div('lists')
    // const list = document.querySelector('.lists');
    // let listvalue = document.createElement('li');
    // listvalue.textContent = input.value;
    // list.appendChild(listvalue);

    // let button_1 = document.createElement('button');
    // button_1.textContent = "Delete";
    // list.appendChild(button_1);


button.addEventListener('click', ()=>{
    let ul_1 = document.createElement('ul');
    ul_1.setAttribute('id','gb')
    list.appendChild(ul_1);

    // let ul_vitra = document.querySelector('#gb');

    let li_1 = document.createElement('li');
    li_1.textContent = input.value;
    ul_1.appendChild(li_1);

    let button_2 = document.createElement('button');
    button_2.innerText = "Delete"
    ul_1.appendChild(button_2);


})