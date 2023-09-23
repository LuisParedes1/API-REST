import { useEffect, useState } from "react"

/* Antes
export default function get_JSON(url:string){
    return fetch(url, {
        method:"GET"
    }).then((res)=> res.json())
        .catch((err) => {
        console.log(err.message);
    }  
) 
}
*/


// GET url
// Returns JSON response
export default async function get_JSON(url:string){
    let posts = await fetch(url, {
        method:"GET"
    });
    return await posts.json();
}

// Hace lo mismo que la funcion anterior pero 
// con manejo de errores
export async function fetch_async(url:string){
    let data:any = null;
    try{
        const response = await fetch(url);
        data = await response.json();
    }catch(error){
        console.log(error);
    }
    return data;
} 

// Send a POST requests
export function add_JSON(url:string, body:string, title:string){
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
           title: title,
           body: body,
           userId: Math.random().toString(36).slice(2),
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        }).then((res)=> res.json())
        .catch((err) => {
        console.log(err.message);
    }  
) 
}