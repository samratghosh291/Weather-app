const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const dataHide=document.querySelector('.middle_layer');



const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText=`Please write the city name before search`;
        dataHide.classList.add('data_hide');
    }else{
        try{

            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=e29dff3932b314aaee1d6543799012c7&units=metric`;
            const response=await fetch(url);
            const data =await response.json();
            const arrData = [data];

            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerText= arrData[0].main.temp+"°C";
            temp_status.innerText= arrData[0].weather[0].main;

            const tempMood=arrData[0].weather[0].main;

            // clouds to check sunny or cloudy
            if(tempMood=="Clear"){
                temp_status.innerHTML= 
                "<i class='fa-solid fa-sun' style='color:#eccc68; font-size:7rem; font-weight:900;'></i>";
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML= 
                "<i class='fa-solid fa-cloud' style='color:#f1f2f6; font-size:7rem; font-weight:900;'></i>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fa-solid fa-raindrops' style='color:#a4b0be; font-size:7rem; font-weight:900;'></i>";
            }
            else if(tempMood=="Smoke"){
                temp_status.innerHTML=
                "<i class='fa-solid fa-clouds-sun' style='color:#a4b0be; font-size:7rem; font-weight:900;'></i>";
            }
            else {
                temp_status.innerHTML= 
                "<i class='fa-sharp fa-solid fa-clouds-sun' style='color:#f1f2f6; font-size:7rem; font-weight:900;'></i>";
            }

            // smoke  and haze

            dataHide.classList.remove('data_hide');
            


        }
        catch{
            city_name.innerText=`Please enter the city name properly`;
            dataHide.classList.add('data_hide');
        }
    }




}





submitBtn.addEventListener('click',getInfo);