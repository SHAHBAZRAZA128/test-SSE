const http = require("http");
const url = require("url")
const { MongoClient, ObjectId } = require("mongodb");

const PORT = 5000;
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "todos";
const collectionName = "todolists";

async function getCollection() {
  if (!client.topology) {
    console.log("Connecting to MongoDB...");
    await client.connect();
  }
  console.log("Connected to MongoDB, returning collection");
  return client.db(databaseName).collection(collectionName);
}

function parseRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {}); 
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", (err) => {
      reject(err);
    });
  });
}

const server = http.createServer(async (request, response) => {
  response.setHeader("Content-Type", "application/json");

response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
response.setHeader("Access-Control-Allow-Headers", "Content-Type");


if (request.method === "OPTIONS") {
  response.writeHead(204);
  return response.end();
}

  const parsedUrl = url.parse(request.url, true);
  const pathname = parsedUrl.pathname;
  const idRouteMatch = pathname.match(/^\/todos\/([a-fA-F0-9]{24})$/)
  try {
    if (request.url === "/" && request.method === "GET") {
      response.writeHead(200);
      response.end(JSON.stringify({ message: "Hello, Backend is running" }));
    }
    // Updation
    else if (request.method === "PUT" && idRouteMatch) {
      const todoId = String(idRouteMatch[1]);
      if (!todoId || !ObjectId.isValid(todoId)) {
        response.writeHead(400);
        return response.end(JSON.stringify({ error: "Invalid todoID" }));
      }

      const collection = await getCollection();
      const todoDescription = await parseRequestBody(request);

      const filter = { _id: new ObjectId(todoId) };
      const updateTodo = { $set: todoDescription };
      const result = await collection.updateOne(filter, updateTodo);

      if (result.modifiedCount === 0) {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "Todo not found" }));
      }
      response.writeHead(200);
      response.end(JSON.stringify({ message: "Todo updated successfully" }));
    }
    // Deletion
    else if (request.method === "DELETE" && idRouteMatch) {
      const todoId =String( idRouteMatch[1]);
      if (!todoId || !ObjectId.isValid(todoId)) {
        response.writeHead(400);
        return response.end(JSON.stringify({ error: "Invalid todoID" }));
      }

      const collection = await getCollection();
      const filter = { _id: new ObjectId(todoId) };
      const result = await collection.deleteOne(filter);

      if (result.deletedCount === 0) {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "Todo not found" }));
      }
      response.writeHead(200);
      response.end(JSON.stringify({ message: "Todo deleted successfully" }));
    }
    // Get All Todos
    else if (request.url === "/todos" && request.method === "GET") {
      const collection = await getCollection();
      const todos = await collection.find({}).toArray();

      response.writeHead(200);
      response.end(JSON.stringify(todos.length > 0 ? todos : { message: "No data to show" }));
    }
    // Insert Todo
    else if (request.url === "/todos" && request.method === "POST") {
      const collection = await getCollection();
      const todo = await parseRequestBody(request);

      if (!todo || Object.keys(todo).length === 0) {
        response.writeHead(400);
        return response.end(JSON.stringify({ error: "Invalid data" }));
      }

      const result = await collection.insertOne(todo);
      response.writeHead(201);
      response.end(JSON.stringify({ message: "Todo Created", insertedId: result.insertedId }));
    }
    else {
      response.writeHead(404);
      response.end(JSON.stringify({ message: "Route not found" }));
    }
  } catch (error) {
    console.error("Error:", error);
    response.writeHead(500);
    response.end(JSON.stringify({ message: "Internal Server Error", details: error.message }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
