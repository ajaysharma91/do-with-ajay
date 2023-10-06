import React from 'react'
import './page.css';
import Posts from '../../components/Posts';
import { useRouter } from 'next/navigation';
async function getPosts() {
  const res = await fetch('http://localhost:8080/api/posts/?pageNo=0&pageSize=5&sortDir=asc')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function MainPage({}) {
  const data = await getPosts();
  const {
    isFallback,
} = useRouter();
if (isFallback) {
  return <h1>Fallback</h1>;
}
  return (
    data ?<Posts posts={data.content}/>:null
  )
}
