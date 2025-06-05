import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const todos = await prisma.todo.findMany();

      return res.status(200).json(todos);
    }

    if (req.method === "POST") {
      const { title } = req.body;
      const newTodo = await prisma.todo.create({
        data: {
          title,
          completed: false,
        },
      });

      return res.status(201).json(newTodo);
    }

    return res.status(405).json({ error: "Method not allowed" });
    
  } catch (error) {
    return res.status(500).json({ error: "Error in todos handler" });
  }
}
