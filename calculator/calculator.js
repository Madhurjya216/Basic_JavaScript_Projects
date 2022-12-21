let string = "";
let input = document.getElementById("input");
let btn = document.getElementsByClassName("button");
Array.from(btn).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else{
            string = string +  e.target.innerHTML;
            input.value = string;
        }
    })
})