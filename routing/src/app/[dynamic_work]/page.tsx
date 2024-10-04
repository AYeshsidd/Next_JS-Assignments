function Pak_cities({ params }: { params: {dynamic_work: string } }) {
    
    const cities_Data: any = {
     
      Karachi: {
        name: "Karachi",
        population: "20-million",
        language: "Urdu",
        populardish:"Biryani"

      },
  
      Lahore: {
        name: "Lahore",
        population: "14.4-millions",
        language: "Punjabi",
        populardish:"Nihari"
      },
  
      sukker: {
        name: "sukker",
        population: "1.28-million",
        language: "Sindhi",
        populardish:"Rosh"
      },
  
      Peshawar: {
        name: "Peshawar",
        population: "1.31-million",
        language: "Balochi",
        populardish:"Afghani tikka"
      },
      Quetta: {
        name: "Quetta",
        population: "1-million",
        language: "Balochi",
        populardish:"Sajji"
      },
    };
  
    
    const city = cities_Data[params.dynamic_work];
  
    
    if (!city) {
      return (
        <div>
          <h1>City not found!</h1>
          <h1>Typescript not running</h1>
        </div>
      );
    }  
    return (
      <div> <center><h1><b><u className="text-yellow-600">Famous city of Pakistan</u></b> </h1></center>
        <h1><b className="text-green-600">City:</b> {city.name}</h1>
       
        <h1><b className="text-green-600">Population:</b> {city.population}</h1>
       
        <h1><b className="text-green-600">Language:</b> {city.language}</h1>

        <h1><b className="text-green-600">Popular Dish:</b> {city.populardish}</h1>
      </div>
    );
  }
  
  export default Pak_cities;












import Link from "next/link";

// function Pak_cities({params}:{params:{Pak_cities:string}}){
    
// const cities_Data: any = {
//     Karachi:{
//         name: "Karachi",
//         population: "20-million",
//         language: "Urdu",
    
//     },
    
//     Lahore:{
//         name: "Lahore",
//         population: "14.4-millions",
//         language: "punjabi",
//     },
    
//     islamabad:{
//         name: "islambabad",
//         population: "1.28-million",
//         language: "Urdu & Punjabi",
//     },

//     peshawar:{
//         name: "peshawar",
//         population: "1.28-million",
//         language: "Urdu & Punjabi",
//     },
//     Queta:{
//         name: "Queta",
//         population: "1.28-million",
//         language: "Urdu & Punjabi",
//     }


// }
    

//     const city = cities_Data[params.Pak_cities]
//     if (!city) {
//             return (
//                <div>
//                  <h1></h1>
//                  <h1>Typescipt fool asking</h1>
//               </div>
//             )}
      
//             return(
//            <div><h1>Country:{city.name}</h1>
//            <h1>Population:{city.population}</h1>
//            <h1>Capital:{city.language}</h1>
//           </div>
            
//         )
//     }
// export default Pak_cities;