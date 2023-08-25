'use client'
import {useSession} from 'next-auth/react';
import { redirect } from 'next/navigation';
import AuthProvider from './AuthProvider';
import CreatePost from '../../components/Posts/CreatePost';
import { Post } from '../../components/global-constant';
export default function Home() {
  const { data:session, status } = useSession();
  if (status === 'loading') {
    return <div>Loading...</div>;
  } else if(!session?.user){
    redirect("/api/auth/signin")
  }else{
  // console.log({session})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
       <CreatePost post={Post}/>
      </div>
    </main>
  )
}}
