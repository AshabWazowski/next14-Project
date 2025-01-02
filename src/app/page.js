import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { MarqueeDemo } from "./marquee/page";

export default function Home() {
  return (
    <div className="h-[100vh] w-full grid place-items-center px-[6%]">
    <div className="relative flex h-[100px] w-[180px] flex-col items-center justify-center overflow-hidden rounded-lg shadow-slate-500">
    <Button className="text-white border rounded outline-none w-full h-full hover:bg-[rgba(47,47,47,0.7)] duration-500"  variant="secondary" >Click me</Button>
    <BorderBeam size={100} duration={8} delay={20} />
  </div>
  <MarqueeDemo/>
  </div>
  );
}
