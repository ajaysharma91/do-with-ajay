/* eslint-disable import/no-anonymous-default-export */
// import { NextApiRequest, NextApiResponse } from 'next'
// import { getToken } from "next-auth/jwt"
// import {useSession} from 'next-auth/react'
// import { NextRequest, NextResponse } from 'next/server';
// import {getSession} from 'next-auth/react'
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "../auth/[...nextauth]/route"
// export default async function handler(req:NextApiRequest, res:NextApiResponse) {
//     const {method,body} = req;
//     const token = await getToken({ req })
//     if (token) {
//       // Signed in
//       console.log("JSON Web Token", JSON.stringify(token, null, 2))
//     } 
//     return;
// //     const {data:session, status} = useSession()
// //     var myHeaders = new Headers();
// //       if(!session?.user){
// //         myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbjEyMyIsImlhdCI6MTY5MTY3NDQ4OCwiZXhwIjoxNjkyMjc5Mjg4fQ.LsyPBShlxxMj07lotdJWsdjouAZE3beocrLGvjn_j_O_AdDADavlUD0iYoyr4dOg");
// //       }
// //     myHeaders.append("Content-Type", "application/json");

// //    var raw = JSON.stringify({
// //   "title": "Post with credentials JWT1",
// //   "description": "creating new JWT post1",
// //   "content": "Hi i ma here with new post for JWT validation1",
// //   "categoryId": 1
// //    });

// // var requestOptions = {
// //   method: 'POST',
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: 'follow'
// // };

// // fetch("http://localhost:8080/api/posts", requestOptions)
// //   .then(response => response.text())
// //   .then(result => console.log(result))
// //   .catch(error => console.log('error', error));
//     try {
//     //   const result = await someAsyncOperation()
//       res.status(200).send("result" )
//     } catch (err) {
//       res.status(500).send({ error: 'failed to fetch data' })
//     }
//   }

//   export async function GET({params}:any,request:Request) {
//     return NextResponse.json({name:"Ajay"})
    
//   }
//   export async function POST(request:NextApiRequest,response:NextApiResponse) {
//     const session = await getServerSession(request, response, authOptions)
//     if (session) {
//       // Signed in
//       const body =  request;
//       console.log({body})
//       return NextResponse.json({
//         body,
//         session
//       }) 
//       console.log("Session", JSON.stringify(session, null, 2))
//     } else {
//       const body =  request;
//       console.log({body})
//       return NextResponse.json({
//         body
//       }) 
//     }
   
//   }

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { NextRequest, NextResponse } from "next/server"
import { NextApiRequest, NextApiResponse } from "next"

// export async function POST(req:NextApiRequest, res:NextApiResponse){
//   const session = await getServerSession(req, res, authOptions)
//   if (session) {
//     // Signed in
//     console.log("Session", JSON.stringify(session, null, 2))
//   } else {
//     // Not Signed in
//     res.status(401)
//   }
//   res.end()
// }

import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  const token = request.cookies.get('token')?.value
  console.log({token})
  return NextResponse.json({
    token,
    
  });
}


export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  let body = await request.json()

  console.log(body)

  const result = await fetch("http://localhost:8080/api/posts", {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${body.token}`
    },
    body:JSON.stringify(body.postData)
  })
  const resp = await result.json();
  return NextResponse.json({
    authenticated: !!session,
    session,
    resp
  });
}