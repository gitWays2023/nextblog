import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async(req) =>{
    const {searchParams} = new URL(req.url)
console.log(searchParams)
    const page = searchParams.get("page")
    const POST_PER_PAGE = 2;

    console.log(page,"something is fishy")

    try {

        const posts = await prisma.post.findMany({
            take:POST_PER_PAGE,
            skip:  POST_PER_PAGE * (page -1)
        })
       
        return new NextResponse(JSON.stringify(posts, {status:200}))
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:"Something went wrong"},{status:500}))
    }
}