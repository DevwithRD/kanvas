import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full relative app p-1 h-screen scrollbar-thumb-gray-400 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-track-gray-50 ">
      <div className="header h-[4rem]">{/* <Header /> */}</div>
      <div className="sidebar">{/* <Sidebar /> */}</div>
      <main className="main ">{/* <AppRouting /> */}</main>
    </main>
  );
}
