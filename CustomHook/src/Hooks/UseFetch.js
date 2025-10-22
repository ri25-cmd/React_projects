
import { useEffect, useState } from "react";
export function useFetch(){
    const [post, setPost] = useState({})
    
    async function getposts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await res.json();
    setPost(json);
    }

    useEffect(() =>{
    getposts()
    },[])

    return{
        post:post
    }
}

export function useFetch2(url, retryTime){
    const [finalData, setFinalData] = useState({});
    const [ loading, setloading] = useState(true)

    async function getposts(){
        setloading(true)
        const res = await fetch(url);
        const json = await res.json();
        setFinalData(json);
        setloading(false)
    }

    useEffect(()=>{
        getposts()
    },[url])

    useEffect(()=>{
        let clock = setInterval(getposts, retryTime*1000)

        return function(){
            clearInterval(clock)
        }
    }, [])

    return{
        finalData,
        loading
    }
}


