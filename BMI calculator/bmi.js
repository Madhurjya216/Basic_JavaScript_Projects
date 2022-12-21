
let btn = document.getElementById("btn").addEventListener('click', () => {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let para = document.getElementById("para");
    let comment = document.getElementById("comment");
    if(weight == '' || height == ''){
        alert("Please enter the both fields!")
    }else{
    height = height/100;
    let bmi = weight/height**2;
    let BMI = bmi.toFixed(2);
    para.innerHTML = BMI;

    let status = '';
    if(BMI < 18.5){
        status = "Underweight";
    }
    else if(BMI >= 18.5 && BMI <= 25){
        status = "Normal";
    }
    else if(BMI >= 25 && BMI < 30){
        status = "Overweight";
    }
    else if(BMI >= 30){
        status = "Obese";
    }

    comment.innerText = `You are ${status}!`;
}
});