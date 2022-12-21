function clock(){
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    let period = document.getElementById("period");
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";
    
    if(h > 12){
      h = h - 12;
    }
    
    h = ( h < 10 ) ? "0" + h : h;
    m = ( m < 10 ) ? "0" + m : m;
    s = ( s < 10 ) ? "0" + s : s;
   
    
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    period.innerHTML = ampm;
    
  }
  setInterval(clock, 1000);