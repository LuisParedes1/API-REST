"use client"

import axios from "axios";

import { useEffect, useState } from "react"
import get_JSON, { fetch_async } from "./components/fetch_api"

export default function Home() {

  let [posts, setPosts] = useState([]);
  const url:string = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

  /*
  const fetchPost = () => {
    get_JSON(url).then((data) => {
        setPosts(data);
    })  
  };

  // Llamo a la funcion usando callback
  // <button onClick={fetchPost}>GET POSTS</button>


  
  useEffect(() => {
  const fetchPost = async () => { // Funciones async (porque usa await)
    try {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
       const data = await response.json();
       setPosts(data);
    } catch (error) {
       console.log(error);
    }
  }
  fetchPost();
  }, []);
  

  // Version 3
  
  useEffect( () => {
    const fetchPost = async () => {  // Funciones async (porque usa await)
      let data:any = await fetch_async('https://jsonplaceholder.typicode.com/posts?_limit=10'); // Espera a obtener la respuesta para avanzar 
      setPosts(data);
    }
    fetchPost(); // Como es una funcion, debe ser llamada
  }, []);
  


  // Version 4
  
  useEffect( () => { // Funciones sync
    fetch_async('https://jsonplaceholder.typicode.com/posts?_limit=10').then(data => { // Cuando obtiene la respuesta llama al callback
      setPosts(data);  
    });
  }, []);
*/
 

  // Usando Axios

  // Promise Sintaxis
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
  });

  /*
  useEffect(() => {
    client.get('?_limit=10').then((response) => {
       setPosts(response.data);
    }).catch((e)=>{
      console.log(e);
    });
  }, []);
  */
 

  // Metodo 
  useEffect(()=> {
    const fetch_fun = async () => {
      try{
        const res = await client.get('?_limit=10');
        setPosts(res.data);
      }catch (error){
        console.log(error);
      }
    }
    fetch_fun();
  },[]);

  return (
    <main>
      <h1>Hola mundo</h1>

      <ul>
        <li>This is page one <a href="./page_one">Page One</a> </li>
        <li>This is page two <a href="./page_two">Page Two</a> </li>
        <li>This is page three <a href="./page_three">Page Three</a> </li>
      </ul>
    
    <h1>GET request</h1>

  
    <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
               <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })}
   </div>
  
    </main>
  )
}
