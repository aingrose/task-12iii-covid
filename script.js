var corona = fetch("https://data.covid19india.org/v4/min/data.min.json")
.then((data)=>data.json())
.then((data)=>{
   console.log(data)
for(let name in data){

    document.getElementById("total").innerText=`-${data[name].total.confirmed}`
    document.getElementById("deceased").innerText=`-${data[name].total.deceased}`
    document.getElementById("recovered").innerText=`-${data[name].total.recovered}`
    console.log(`${name} - Confirmed Cases: ${data[name].total.confirmed}`);
    console.log(`${name} - deceased Cases: ${data[name].total.deceased}`);
    console.log(`${name} - recovered Cases: ${data[name].total.recovered}`);
}

}).catch((error)=>console.log(error))

// var corona = fetch("https://data.covid19india.org/v4/min/data.min.json")
//   .then((data) => data.json())
//   .then((data) => {
//     for (let name in data) {
//       // Check if 'total' property exists and has 'confirmed' property
//       if (data[name].total && data[name].total.confirmed) {
//         console.log(`${name} - Confirmed Cases: ${data[name].total.confirmed}`);
//       }
//     }
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
//   });
