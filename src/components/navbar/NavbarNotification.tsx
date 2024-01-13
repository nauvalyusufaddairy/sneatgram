import { CiSearch } from "react-icons/ci";
import { notification } from "@/notification";

export default function NavbarNotification() {
  return (
    <div className=" max-w-full h-fit flex flex-col   ">
      {notification &&
        notification.map((val, i) => <Card key={i} props={val} />)}
    </div>
  );
}

function Card({ props }: { props: Notifications }) {
  return (
    <div className="w-full h-fit flex my-2 rounded-md items-center py-2 px-2 text-sm hover:cursor-pointer ">
      <div
        className="w-[32px] h-[32px] rounded-full border-[1px] border-gray-50 mr-4"
        style={{
          backgroundImage: `url(${props.userImage})`,
          backgroundSize: "cover",
        }}
      />
      <div className="w-[230px]">
        <p className="mr-2 ">
          <span className="font-bold">{props.userId}</span>
          {"    "}
          {props.notificationType === "liked" && (
            <span className="">liked your comment at</span>
          )}
          {props.notificationType === "replied" && (
            <span className="">replied your comment at</span>
          )}
        </p>
      </div>

      <div
        className="w-[32px] h-[40px] "
        style={{
          backgroundImage: `url(${props.commentImage})`,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
