let input = document.getElementById("input");
let todocontainer = document.getElementById("todo-container");

let button = document.getElementById("btn").addEventListener('click', function(){
    if(input.value == ''){
        alert("You need to write something first!");
    }
    else{
    let para = document.createElement('p');
    para.innerHTML = input.value;
    todocontainer.appendChild(para);
    para.classList.add('para-style');
    }
});