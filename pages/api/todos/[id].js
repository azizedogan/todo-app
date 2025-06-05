import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { title, completed } = req.body;

    try {
      const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { title, completed },
      });

      return res.status(200).json(updatedTodo);

    } catch (error) {
      return res.status(500).json({ error: "Güncelleme başarısız" });
    }

  } else if (req.method === "DELETE") {
    try {
      await prisma.todo.delete({
        where: { id },
      });

      return res.status(200).json({ message: "Todo başarıyla silindi" });

    } catch (error) {
      return res.status(500).json({ error: "Silme işlemi başarısız" });
    }
    
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}