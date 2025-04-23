import Productscontainer from "@/app/components/Productscontainer";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <section className="bg-white min-h-screen pl-24 pr-24 pt-10">
      <Header />
      <Productscontainer />
    </section>
  );
}
