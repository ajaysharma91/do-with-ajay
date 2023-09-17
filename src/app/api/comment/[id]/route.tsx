import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  console.log({ params });
  console.log("GETIINg", request);
  const { id } = params;
  var requestOptions:RequestInit = {
    method: "GET",
    cache: 'no-store' 
  };
  try {
    const result = await fetch(
      `http://localhost:8080/api/posts/${id}/comments`,
      requestOptions
    );
    const response = await result.json();
    console.log({ response });
    return NextResponse.json({
      response,
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}

export async function POST(req: Request, { params }: { params: any }) {
  console.log("POSTSTTSTS");
  const { id } = params;
  const body = await req.json();

  console.log("POSTSTTSTS",body);
  
  try {
    const result = await fetch(`http://localhost:8080/api/posts/${id}/comments`, {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${body.token}`
    },
    body:JSON.stringify(body.commentData)
  })
  const resp = await result.json();
  console.log({resp})
   return NextResponse.json({
    resp
   })
  } catch (error) {
    return NextResponse.json({
      error
     })
  }
}
