import Image from "next/image";

export default async function SingleProduct ({ params }) {
    const { id } = params;
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    const product = data;
    console.log(product);

    return (
        <div>
            {product.images ? (
        <Image
          src={product.images[0]}
          alt={product.title} 
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