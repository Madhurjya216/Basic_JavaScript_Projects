let meter = document.getElementById("meter");
let kilometer = document.getElementById("kilometer");

meter.addEventListener('input',function(){
    let m = this.value;
    let km = m/1000;
    kilometer.value = km;
});

kilometer.addEventListener('input',function(){
    let km = this.value;
    let m = km*1000;
    meter.value = m;
});