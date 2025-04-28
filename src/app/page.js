import Entry from "./components/Entry";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className="bg-[#ffffff] min-h-screen pl-24 pr-24 pt-10">
      <Header />
      <Entry />
    </div>
  );
}
