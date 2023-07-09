import React, { useEffect, useState } from 'react'
const getPosts = async () => {
    console.log("Get Past")
    const data = await fetch("https://jsonplaceholder.typicode.com/posts",{
        next:{revalidate:0}
    });
    return data.json();
  };
export default function useGetPosts(pageNumer) {
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    const [data,setData] = useState([])
    console.log("Hooks",pageNumer)

    useEffect(()=>{
        console.log("Use Effect")
        setLoading(true)
        getPosts().then(res=>{
            setData(res)
            setLoading(false)
            setError(null)
        }).catch(err=>{
            setLoading(false);
            setError(err)
        })
    },[pageNumer])
    return {error,loading,data}
}
