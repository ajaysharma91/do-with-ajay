import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("body")
  const { postId } = body;
  var requestOptions = {
    method: "GET",
  };
  console.log({body})
  console.log({postId})
  try {
    const result = await fetch(
      `http://localhost:8080/api/posts/${postId}/comments`,
      requestOptions
    );
    const response = await result.json();
    console.log({response})
    return NextResponse.json({
      response,
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
