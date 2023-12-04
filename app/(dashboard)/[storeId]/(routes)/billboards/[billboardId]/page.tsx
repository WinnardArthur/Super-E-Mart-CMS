import prismadb from "@/lib/prismadb";
import React from "react";
import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  let billboard = null;
  try {
    billboard = await prismadb.billboard.findUnique({
      where: {
        id: params.billboardId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex-col">
      <div className="flex-1 spacey-y-4 p-8">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
