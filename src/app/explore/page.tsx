import PostCard from "@/components/post/PostCard";
import { post } from "@/post";
type das = "vid" | "img";
const ra: das[] = [
  "img",
  "vid",
  "img",
  "vid",
  "img",
  "vid",
  "img",
  "vid",
  "img",
];

export default function Explore() {
  return (
    <div className=" w-full h-screen flex justify-center overflow-y-scroll ">
      <Sm />
    </div>
  );
}
function Sm() {
  return (
    <div className="  w-screen h-screen xl:w-[calc(100vw-300px)] xl:ml-[300px] 2xl:ml-[300px] lg:ml-[300px] 2xl:w-[calc(100vw-300px)]  bg-[#040D12]   ">
      <div className="w-full h-fit  px-2 sm:pt-[66px] gap-1   flex justify-center items-center flex-wrap   bg-[#040D12] ">
        {post.map((v, i) => (
          <PostCard props={v} key={i} />
        ))}
      </div>
    </div>
  );
}
