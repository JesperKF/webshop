import SingleProductClient from "./SingleProductClient";

export default async function SingleProductPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await res.json();

  return <SingleProductClient product={data} />;
}