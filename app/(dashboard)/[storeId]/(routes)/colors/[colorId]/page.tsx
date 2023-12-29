import prismadb from "@/lib/prismadb";
import React from "react";
import { ColorForm } from "./components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  let color = null;
  try {
    color = await prismadb.color.findUnique({
      where: {
        id: params.colorId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex-col">
      <div className="flex-1 spacey-y-4 p-8">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
