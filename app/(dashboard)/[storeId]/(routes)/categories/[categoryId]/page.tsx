import prismadb from "@/lib/prismadb";
import React from "react";
import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  let cateogory = null;
  try {
    cateogory = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  let billboards = null;
  try {
    billboards = await prismadb.billboard.findMany({
      where: {
        storeId: params.storeId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex-col">
      <div className="flex-1 spacey-y-4 p-8">
        <CategoryForm billboards={billboards} initialData={cateogory} />
      </div>
    </div>
  );
};

export default CategoryPage;
