import { searcUserResult } from "@/user";
import { CiSearch } from "react-icons/ci";
import { MdVerified } from "react-icons/md";

export default function NavbarSearch() {
  return (
    <div className=" max-w-full h-fit flex flex-col hover:cursor-pointer">
      <div className="max-w-full  h-fit flex rounded-md border-[1px]   border-gray-50/50">
        <input
          placeholder="Search"
          className="w-full px-3 py-2  h-[32px] outline-none bg-transparent placeholder:text-gray-50/50"
        />
        <div className=" flex h-[32px] items-center text-gray-50 font-bold text-[24px] mr-1 ml-1">
          <CiSearch />
        </div>
      </div>

      <div className="w-full h-[calc(100vh-64px)] flex flex-col mt-2">
        {searcUserResult.map((val, i) => (
          <Card props={val} key={i} />
        ))}
      </div>
    </div>
  );
}

function Card({
  props,
}: {
  props: Pick<User, "isVerifiedPerson" | "userId" | "userImage">;
}) {
  return (
    <div className="w-full h-fit flex my-2 rounded-md  py-2 px-2">
      <div
        className="w-[28px] h-[28px] rounded-full border-[1px] border-gray-50 mr-4"
        style={{
          backgroundImage: `url(${props.userImage})`,
          backgroundSize: "cover",
        }}
      />
      <p>{props.userId}</p>
      {props.isVerifiedPerson && (
        <em className=" text-gray-50 ml-2">
          {" "}
          <MdVerified />
        </em>
      )}
    </div>
  );
}
