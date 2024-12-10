import Image from "next/image";
import Dynamic from "./dynamic";
import Calendar from "./calendar"
import News from "./news"
import Currency from "./currency";
import Footer from "./footer"
export default function Home() {
  return (
    <main>
      <Dynamic />
      <News />
      <Calendar />
      <Currency />
      <Footer />
    </main>
  );
}