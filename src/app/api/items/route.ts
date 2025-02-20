import { Item } from "@/shared/services/dtmf/items";

export async function GET() {
  const items: Array<Item> = [
    {
      name: "DeBí TiRAR MáS FOToS",
      type: "Digital Album",
      sold: false,
      priceInCents: 499,
      imageSrc: "/images/debi-tirar-mas-fotos-album-cover.webp",
    },
    {
      name: "Blue Concho",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: false,
      imageSrc: "/images/blue-concho-t-shirt-back.webp",
      alternativeImageSrc: "/images/blue-concho-t-shirt-front.webp",
    },
    {
      name: "Black Concho",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: true,
      imageSrc: "/images/black-concho-t-shirt-back.webp",
      alternativeImageSrc: "/images/black-concho-t-shirt-front.webp",
    },
    {
      name: "White Concho",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: true,
      imageSrc: "/images/white-concho-t-shirt-back.webp",
      alternativeImageSrc: "/images/white-concho-t-shirt-front.webp",
    },
    {
      name: "La Casita",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: false,
      imageSrc: "/images/la-casita-t-shirt-back.webp",
      alternativeImageSrc: "/images/la-casita-t-shirt-front.webp",
    },
    {
      name: "Vamos A Ver Si Es  Velda",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: true,
      imageSrc: "/images/vamos-a-ver-si-es-velda-t-shirt-back.webp",
      alternativeImageSrc: "/images/vamos-a-ver-si-es-velda-t-shirt-front.webp",
    },
    {
      name: "El Jíbaro",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: false,
      imageSrc: "/images/el-jibaro-t-shirt-front.webp",
    },
    {
      name: "Lozas y Flores",
      type: "Long Sleeve",
      priceInCents: 6000,
      sold: false,
      imageSrc: "/images/lozas-y-flores-long-sleeve-front.webp",
      alternativeImageSrc: "/images/lozas-y-flores-long-sleeve-back.webp",
    },
    {
      name: "DTMF",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: true,
      imageSrc: "/images/dtmf-t-shirt-front.webp",
    },
    {
      name: "Seguimo Aqui",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: true,
      imageSrc: "/images/seguimo-aqui-t-shirt-front.webp",
    },
    {
      name: "Juego de Dominó",
      type: "T-Shirt",
      priceInCents: 4500,
      sold: false,
      imageSrc: "/images/juego-de-domino-t-shirt-front.webp",
      alternativeImageSrc: "/images/juego-de-domino-t-shirt-back.webp",
    },
  ];

  return Response.json(items);
}
