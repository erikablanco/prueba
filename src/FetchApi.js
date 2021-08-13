import { useEffect, useState } from "react";


export const GetMovieList = (year)  => {
  
const API = 'https://jsonmock.hackerrank.com/api/movies?Year=2015';
//const API= `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
const [ dataApi, setDataApi] = useState ([]);


 useEffect (() => { 

   fetch(API).then((response) => response.json()).then((data) =>{
       
    
      data.data.map((item) => {
      return console.log(item.Title);
      
       
      
    })
       console.log(data);       
       setDataApi(data);
       
     })     

 }, [])
   {
    try {
      const item =  fetch(API);          
    } catch (error) {console.log(error)};
      
   }
   
   return dataApi;
     
      
 };


 
  
