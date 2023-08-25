import React, { useEffect, useState } from 'react'
const getPosts = async () => {
    console.log("Get Past")
    const data = await fetch("http://localhost:8080/api/posts/?pageNo=0&pageSize=10&sortDir=asc",{
        next:{revalidate:0}
    });
    return data.json();
  };
export default function useGetPosts(pageNumer: any) {
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    const [data,setData] = useState([])
    console.log("Hooks",pageNumer)

    useEffect(()=>{
        console.log("Use Effect")
        setLoading(true)
        getPosts().then(res=>{
            console.log({res})
            setData(res.content)
            setLoading(false)
            setError(null)
        }).catch(err=>{
            setLoading(false);
            setError(err)
        })
    },[pageNumer])
    return {error,loading,data}
}
