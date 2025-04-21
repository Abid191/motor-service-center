import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    try {
        const db = await connectDB()
        const serviceCollection = await db.collection('services')
        const singleService = await serviceCollection.findOne({ _id: new ObjectId(params.id) })
        return NextResponse.json({ singleService })
    } catch (error) {
        console.log(error)
    }
}