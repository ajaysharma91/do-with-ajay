import React from 'react'
import './page.css';
import Posts from '../../components/Posts';
// async function getPosts() {
//   const res = await fetch('http://localhost:8080/api/posts/?pageNo=0&pageSize=5&sortDir=asc')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
export default function MainPage({}) {
  // const data = await getPosts();
  return (
    <Posts/>
  )
}
