import React from "react";
import type { Metadata } from "next";
import { getItemList } from "@/shared/services/dtmf";
import { ItemCard } from "@/shared/design/ItemCard";

export const metadata: Metadata = {
  title: "Shop",
  description: "In this page you can buy 'Debi tirar mas fotos' merchandise.",
};

export const dynamic = "force-dynamic";

export default async function Shop() {
  const items = await getItemList();

  return items.map((item) => <ItemCard key={item.name} item={item} />);
}
