"use client";

import { IoIosArrowRoundDown } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiComment, BiSolidComment } from "react-icons/bi";
import { MdOutlineBookmarkAdd, MdBookmarkAdd } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "../post/post.module.css";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

export default function RepliedComment({ props }: { props: Reply }) {
  const [commentLikes, setCommentLikes] = useState(false);
  return (
    <div className="">
      <div className="w-[370px] flex gap-2  mt-4 items-start">
        <div
          className="w-[32px] h-[32px] md:w-[24px] md:h-[24px] sm:w-[24px] sm:h-[24px]  rounded-full border-[1px] border-[#040D12]"
          style={{
            backgroundImage: `url(${props.replierImage})`,
            backgroundSize: "100% 100%",
          }}
        />
        {/* replier user id */}
        <div className="text-[#040D12] font-[600] w-[325px] md:w-[200px] sm:w-[250px] md:text-sm text-base sm:text-sm">
          <p>
            {props.replierId}
            <span className="ml-2 text-[#040D12]/80 font-[400]">
              {props.content}
            </span>
          </p>
        </div>
        <div
          className="w-[24px] mt-2"
          onClick={() => setCommentLikes((prev) => !prev)}
        >
          {/* like at comment  */}
          {commentLikes ? (
            <motion.div
              className="text-red-500"
              initial={{
                scale: 0,
                opacity: 0,
                rotateY: 0,
              }}
              animate={{
                scale: [2, 3, 1],
                opacity: 1,
                rotateY: [45, 15, 0],
              }}
              transition={{
                duration: 2,
                type: "spring",
                stiffness: 200,
              }}
            >
              <FaHeart />
            </motion.div>
          ) : (
            <FaRegHeart />
          )}
        </div>
      </div>
      <div className="w-full h-[32px] flex gap-2  mt-2 text-gray-400 xl:text-base 2xl:text-base  md:text-xs sm:text-xs lg:text-xs  ">
        <p>5 likes</p> <p>Reply</p>
      </div>
    </div>
  );
}
