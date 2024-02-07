









function weather_data(){

  const url="https://api.openweathermap.org/data/2.5/weather";
  const full_url=`${url}?q=${city},${country_code}&appid=${my_AIP}&units=imperial`
  var res=fetch(full_url)
  res.then((data3)=>data3.json()).then((data4)=>{
  let c_name=("NAME :"+ data4.name);
  let temp=("Temp :"+data4.main["temp"]);
  let temp_max=("Temp_max:"+data4.main["temp_max"]);
  let temp_min=("Temp_min:"+ data4.main["temp_min"]);
  console.log(c_name,temp,temp_max,temp_min)

  });           

}




let new_div=document.getElementById("cont")
let new_row=document.getElementById("rows")
new_div.append(new_row)





var res=fetch("https://restcountries.com/v2/all")
  res.then((data)=>data.json()).then((data1)=>{
    for(var i=0;i<=data1.length;i++){
          var cols=document.createElement("div")
          cols.setAttribute("class","col-sm-12 col-lg-4  ")
          cols.innerHTML=`
          <div class="card mt-5" style="width: 18rem;">
          <h4>${data1[i].name} </h4>
          <img src="${data1[i].flag}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title"> Capital: ${data1[i].capital}</h5>
          <p class="card-text">Region: ${data1[i].region}</p>
          <p class="card-text">Country Code: ${data1[i].alpha3Code}</p>
          <div class="weathe">
            <button class="weathe-btn" onclick="weather_data(${data1[i].name})" >Click For Weather</button>
            </div>      
           </div>
         </div>
        `
        new_row.append(cols)
       

          
    }

   




  });

