import Image from "next/image";
import Sidebar from "./dashboard/overviews/sidebar";
import Table from "./dashboard/overviews/table";
import Card from "./dashboard/overviews/card";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Table />
      <Card />
    </>
  );
}
