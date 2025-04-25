import Bigcart from "../components/Bigcart";
import Header from "../components/Header";

export default function Checkout() {
  return (
    <section className="bg-white min-h-screen pl-24 pr-24 pt-10 ">
      <div className="mb-8">
        <Header />
      </div>
      <Bigcart />
    </section>
  );
}
