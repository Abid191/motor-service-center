import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const newUser = await request.json()

    try {
        const db = await connectDB()
        const userCollection = await db.collection('users')
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return NextResponse.json({ message: 'user exist' }, { status: 404 })
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14)
        const resp = await userCollection.insertOne({ ...newUser, password: hashedPassword })
        return NextResponse.json({ message: 'User Created' }, { status: 202 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong", error }, { status: 500 })
    }
}