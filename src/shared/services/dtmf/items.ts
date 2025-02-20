import { getDtmf } from "@/shared/services/dtmf/helpers/fetchers";

export interface Item {
  name: string;
  type: string;
  priceInCents: number;
  sold: boolean;
  imageSrc: string;
  alternativeImageSrc?: string;
}

export async function getItemList(): Promise<Array<Item>> {
  return await getDtmf<Array<Item>>("/api/items");
}
