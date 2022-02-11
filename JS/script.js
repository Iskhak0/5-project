    
// "use strict"

// request({
//     metod: 'GET',
//     url: 'https://restcountries.com/v3.1/name/{Kyrgyzstan}',
//     succes: response =>{
//         console.log(response)

//     }
// })


// error: message =>{
//         console.log(` error ${message}`)
//     }
    
    

    
"use strict"

request({
    metod:"GET",
    url:"https://restcountries.com/v3.1/name/{Germany}",
    succes: response =>{
        const res = JSON.parse(response);
        console.log(res);

        const name = document.getElementById("name");
        name.innerHTML = res[0].area;

        const capital = document.getElementById("capital");
        capital.innerHTML = res[0].flags;
    },

    error : massage =>{
        console.log(`error ${massage}`);
    }