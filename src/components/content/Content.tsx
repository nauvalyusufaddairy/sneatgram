"use client";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiComment, BiSolidComment } from "react-icons/bi";
import { MdOutlineBookmarkAdd, MdBookmarkAdd } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./content.module.css";
import { useEffect, useRef, useState } from "react";
import { post } from "@/post";
import Post from "../post/Post";

export default function Content() {
  return (
    <div>
      <LgXl props={post} />

      <Md props={post} />
      <Sm props={post} />
    </div>
  );
}

function LgXl({ props }: { props: Post[] }) {
  return (
    <div className="hidden w-full xl:block lg:block 2xl:block">
      <div className="flex w-[calc(100vw-300px)] ml-[300px] ">
        <div className="w-[60%] flex flex-col gap-4 items-center ">
          {props.map((val, id) => (
            <Post props={val} key={id} />
          ))}
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-[40%] flex justify-start">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

function Md({ props }: { props: Post[] }) {
  return (
    <div className="hidden md:flex ml-[60px] flex-col items-center ">
      {props.map((val, id) => (
        <Post props={val} key={id} />
      ))}
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
function Sm({ props }: { props: Post[] }) {
  return (
    <div className="hidden sm:flex mt-[65px]  flex-col items-center">
      {props.map((val, id) => (
        <Post props={val} key={id} />
      ))}
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function RightPanel() {
  return (
    <div className="w-[400px] flex flex-col items-center mt-6">
      <UserCard type="change" />
      <div className="w-full text-gray-50/50 font-bold my-6">
        {" "}
        Suggested for you
      </div>
      <UserCard type="recommends" />
      <UserCard type="recommends" />
      <UserCard type="recommends" />
      <div className="w-full mt-6">
        <div className=" text-[#C8CCCE]/50 w-full flex items-center gap-[8px]">
          <p>Crafted with</p>
          <span className="text-[#36B5B0]/50">
            <FaHeart />
          </span>
          by
          <span className="text-[#36B5B0]/50 font-[500] font-burtons text-[16px]">
            {" "}
            Nauval Yusuf Addairy
          </span>
        </div>
      </div>
    </div>
  );
}
function UserCard({ type }: { type: "change" | "recommends" }) {
  return (
    <div className="w-full px-4 flex justify-between mt-2">
      <div className="w-[90%] h-[50px] flex gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-white"></div>
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <div className="w-full flex gap-[6px] items-center">
              <p className="font-[600] text-gray-50">nauvalyusufad</p>{" "}
              <div>
                <MdVerified />
              </div>
            </div>
            <div className=" text-[#C8CCCE] text-xs font-[600] ">
              Nauval Yusuf Addairy
            </div>
          </div>
        </div>
      </div>
      {type === "change" ? (
        <p className="w-[10%] text-[#36B5B0] font-[600]"> Switch </p>
      ) : (
        <p className="w-[10%] text-[#36B5B0] font-[600]"> Add </p>
      )}
    </div>
  );
}
function Card() {
  const [like, setLike] = useState<Card>("");
  const [bookmark, setBookmark] = useState<Card>("");
  return (
    <section className="w-[400px] min-h-[550px] sm:w-[350px] flex flex-col bg-bg30/50 mt-4 select-none px-4 py-2 rounded-md text-gray-50 ">
      <div className="w-full h-[50px] flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-gray-50/80"></div>{" "}
        <div className="flex flex-col">
          <div className="w-full flex gap-[6px] items-center">
            <p className="font-[600]">userId</p>{" "}
            <div>
              <MdVerified />
            </div>
          </div>
          <div className=" text-[#C8CCCE] text-xs font-[600] ">
            location or what ever
          </div>
        </div>
      </div>
      <div className="w-full h-[250px] bg-white mt-2"></div>
      <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
        <div className="w-fit flex gap-4 text-gray-50 ">
          {" "}
          <motion.div
            onTap={() => setLike("like")}
            className=" hover:cursor-pointer"
          >
            {like === "like" ? (
              <motion.div
                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                animate={{
                  scale: [3, 1],
                  opacity: 1,
                  x: [100, -300, 0],
                  y: [-100, 400, 0],
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                }}
                onClick={() => setLike("")}
                className="text-[#36B5B0]"
              >
                <FaHeart />
              </motion.div>
            ) : (
              <div>
                {" "}
                <FaRegHeart />
              </div>
            )}
          </motion.div>{" "}
          <div className=" hover:cursor-pointer">
            <BiComment />
          </div>
        </div>
        <motion.div
          onTap={() => setBookmark("bookmark")}
          className=" hover:cursor-pointer"
        >
          {bookmark === "bookmark" ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotateY: 360 }}
              animate={{
                scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
                opacity: 1,
                rotateY: [360, 180, 95, 45, 15, 0],
              }}
              transition={{
                duration: 3,
                type: "spring",
                stiffness: 100,
              }}
              onClick={() => setBookmark("")}
              className="text-[#36B5B0]"
            >
              <MdBookmarkAdd />
            </motion.div>
          ) : (
            <div>
              {" "}
              <MdOutlineBookmarkAdd />
            </div>
          )}
        </motion.div>
      </div>
      <div className="w-full my-2 text-gray-50">1,200 likes</div>
      <div className=" w-full h-[76px] overflow-hidden mt-2  ">
        <p className={styles.box + " text-[#C8CCCE]"}>
          <strong className={styles.strong + " text-gray-50"}>userId</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque
          consequuntur optio fuga. Laborum quae quasi quis illo voluptate
          repellat placeat recusandae fugit odit, necessitatibus, praesentium
          corporis itaque, vitae sit.
        </p>
        <div className="w-full  h-4 flex text-[#36B5B0] items-center text-[16px] hover:cursor-pointer ">
          <p className="">expand</p>
          <IoIosArrowRoundDown />
        </div>
      </div>
      <p className="w-full text-[#C8CCCE]/50 my-1 hover:cursor-pointer">
        {" "}
        load more comments...
      </p>
      <div className="w-full h-[80px] overflow-hidden ">
        <p className={styles.comment + " text-[#C8CCCE] "}>
          {" "}
          <strong className={styles.strong + " text-gray-50"}>userId</strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          ratione perferendis consectetur quod, delectus voluptates minus
          perspiciatis cupiditate praesentium blanditiis vitae aspernatur
          repudiandae quos dicta incidunt eius quam explicabo eaque.
        </p>
        <p className={styles.comment + " text-[#C8CCCE] "}>
          {" "}
          <strong className={styles.strong + " text-gray-50"}>dangId</strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          ratione perferendis consectetur quod, delectus voluptates minus
          perspiciatis cupiditate praesentium blanditiis vitae aspernatur
          repudiandae quos dicta incidunt eius quam explicabo eaque.
        </p>
      </div>
      <input
        placeholder="add your comment "
        type="text"
        className="bg-transparent border-b-[1px] border-b-bg30 py-2 px-4 mb-2 placeholder-[#C8CCCE]/50 outline-none"
      />
    </section>
  );
}
