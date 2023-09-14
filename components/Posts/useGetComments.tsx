import React, { useEffect, useState } from 'react'
const getComments = async (postId:any) => {
    console.log("Get Past")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
    try{const data = await fetch(`http://localhost:3000/api/comment/${postId}`,requestOptions)
    console.log({data})
    return data.json();}
    catch(err){
        console.log("Error",err)
    }
  };
export default function useGetComments(postId: any) {
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    const [data,setData] = useState([])
    console.log("Hooks",postId)

    useEffect(()=>{
        console.log("Use Effect")
        setLoading(true)
        getComments(postId).then(res=>{
            console.log({res})
            setData(res.response)
            setLoading(false)
            setError(null)
        }).catch(err=>{
            setLoading(false);
            setError(err)
        })
    },[])
    return {error,loading,data}
}
