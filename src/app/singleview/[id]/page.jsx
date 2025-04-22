import Link from "next/link";
import Image from "next/image";

export default async function SingleProduct ({ params }) {
    const { id } = params;
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const products = await data.json();
    console.log(products);

    return (
        <div>
            {products.images?.[0] ? (
        <Image
          src={product.images[0]}
          alt={products.name}
          width={400}
          height={400}
          className="rounded-xl w-full"
        />
      ) : (
        <div className="w-full bg-gray-800 h-[400px] rounded-lg flex items-center justify-center">
          <span className="text-white text-center p-8">No Image Available</span>
        </div>
      )}
        </div>
    )
}