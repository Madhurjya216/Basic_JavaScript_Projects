

/* ======================= Login form part ======================= */



let login = document.getElementById("login");

document.getElementById("login-click").onclick = () => {
    login.classList.toggle('active');
}




/* ======================= Search form part ======================== */



let search = document.getElementById("search");

document.getElementById("s-click").onclick = () => {
    search.classList.toggle('active');
}




/* ======================== Shopping-Cart part ======================= */


let shopping = document.getElementById("shopping");

document.getElementById("shopping-cart").onclick = () => {
    shopping.classList.toggle('active');
}




/* ======================== slider part ======================= */



var swiper = new Swiper(".products", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



    /* ======================== Go To Top button ======================= */ 



      let tobtn = document.querySelector('.to-btn');

      window.addEventListener('scroll', checkHeight)
  
      function checkHeight(){
          if(window.scrollY > 500) {
              tobtn.style.display = 'block';
          }else{
              tobtn.style.display = 'none';
          }
      }
  
      tobtn.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
          });
      })


      /* ======================== Light & Dark mode ======================= */

      function darkmode(){
        let dark = document.body;
        dark.classList.toggle("dark");
       }

  


      /* ======================== weather app code ======================= */

      let weather = document.getElementById("weather");
      let weathericon = document.getElementById("weather-icon");
      let celsius = document.getElementById("celsius");
      let feellike = document.getElementById("feel-like");



      window.addEventListener('load', () => {

        let long;
        let lat;

      
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=eeb2c4108fe9d3abb621bfc688d23dea`

            fetch(api).then((response) => {
              return response.json();
            })

            .then(data => {
              const{name} = data;
              const{feel_like} = data.main;
              const{id, main} = data.weather[0];
              console.log(data);

              localStorage.textContent = name;
              celsius.textContent = Math.round(feel_like-273);
              feellike.textContent = main;
            })
          })
        }

      })




