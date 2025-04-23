import Image from "next/image";
import Link from "next/link";

export default async function SingleProduct ({ params }) {
    const { id } = params;
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    const product = data;
    console.log(product);

    return (
      <article className="grid grid-cols-[minmax(20px,0.2fr)_1fr_minmax(20px,0.2fr)]">
        <div className="col-2">
          <div>
          <Link href={"/"} className="text-blue-500 underline mb-4">Back</Link>
            {product.images ? (
        <Image
          src={product.images[0]}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-xl w-half"
        />
      ) : (
        <div className="w-full bg-gray-800 h-[400px] rounded-lg flex items-center justify-center">
          <span className="text-white text-center p-8">No Image Available</span>
        </div>
      )}
           </div>
         </div>
      </article>
    )
}