import { NextRequest, NextResponse } from "next/server";
import  getCollection  from "@/lib/mongodb";
import { ObjectId } from "mongodb";


// Updation
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop(); 

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    const body = await request.json();
    const collection = await getCollection();

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Todo not found " }, { status: 404 });
    }

    return NextResponse.json({ message: "Todo updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update todo" }, { status: 500 });
  }
}

// Deletion
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split("/").pop(); 

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    const collection = await getCollection();
    const filter = { _id: new ObjectId(id) }
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete todo" }, { status: 500 });
  }
}
