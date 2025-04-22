import Productcard from "./Productcard";

const Productscontainer = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();
  console.log(products);
  return <Productcard data={products} />;
};

export default Productscontainer;
