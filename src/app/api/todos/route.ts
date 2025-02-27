import getCollection from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

//Get all todos
export async function GET() {
    try {
        const collection = await getCollection();
    const todos = await collection.find({}).toArray();
return NextResponse.json(todos , {status:200})
    } catch (error) {
        return NextResponse.json({error : "Error fetching todos"} , {status:500})
    }

}
//Insert todo
export async function  POST(request :NextRequest) {
    try {
        const collection = await getCollection();
        const todo = await request.json();
        if (!todo || Object.keys(todo).length === 0) {
            return NextResponse.json({error : "Invalid data"} , {status:400})
          }
    const result = await collection.insertOne(todo);
return NextResponse.json({message : "Todo successfully added" , id: result.insertedId} , {status:201})
    } catch (error) {
        return NextResponse.json({error : "Failed to add todo"} , {status:500})
    }

}

  