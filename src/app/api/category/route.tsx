
import { NextRequest, NextResponse } from "next/server"


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


// export async function GET(request: NextRequest) {
//   const cookieStore = cookies()
//   const token = request.cookies.get('token')?.value
//   console.log({token})
//   return NextResponse.json({
//     token,
    
//   });
// }


export async function POST(request: Request) {
  let body = await request.json()
  try {
    const result = await fetch("http://localhost:8080/api/category", {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${body.token}`
    },
    body:JSON.stringify(body.category)
  })
  const resp = await result.json();
  return NextResponse.json({
    resp
  });
  } catch (error) {
    return NextResponse.json({
        error
      });
  }
}