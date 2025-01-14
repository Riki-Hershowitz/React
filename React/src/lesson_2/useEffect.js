import React, {useState, useEffect} from "react";

export default function showPizza(){
    const [fetchPizza, setFetchPizza]= useState([]);

    useEffect(() =>{
        const fetchPosts= async()=>{
            try{
                const response= await fetch('');
                const data= await response.json();
                setFetchPizza(data);
            }
            catch(error){
                console.error('Error feching posts:', error);
            }
        };
        fetchPosts();
    },[]);
};