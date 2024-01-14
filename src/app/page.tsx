import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" bg-[#040D12] w-screen h-screen flex items-center justify-center">
      <div className=" _sm:w-[320px] _sm:h-[calc(320px*1.6)]  _md:w-[420px] _md:h-[calc(420px*1.6)] _lg:w-[480px] _lg:h-[calc(480px*1.3)] bg-bg30">
        <div className="w-full h-full flex flex-col _lg:px-4 _lg:py-6 ">
          <h1 className="text-4xl text-center text-[#36B5B0] font-[600] font-burtons">
            {" "}
            Sneatgram
          </h1>
        </div>
      </div>
    </div>
  );
}
