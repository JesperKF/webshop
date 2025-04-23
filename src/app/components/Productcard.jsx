import Link from "next/link";

const Productcard = ({ data }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {data.products.map((product) => (
        <Link
          key={product.id}
          href={`/singleview/${product.id}`}
        >
          <li className="flex flex-col gap-4 border-b border-black p-4 hover:bg-[#D21E1F] hover:text-white transition duration-300">
            <div className="flex items-center justify-between p-8">
              <h1>{product.title}</h1>
              <h2>{product.price}</h2>
            </div>
            <div>{product.description}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Productcard;
