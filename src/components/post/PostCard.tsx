"use client";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import PostBlanket from "../postBlanket/PostBlanket";
export default function PostCard({ props }: { props: Post }) {
  const [hover, setHover] = useState(false);
  const [expands, setExpands] = useState(false);
  const [bookmark, setBookmark] = useState<Card>("");
  const [like, setLike] = useState<Card>("");

  if (expands) {
    return (
      <div className="z-50">
        <PostBlanket
          setExpands={setExpands}
          props={props}
          setBookmark={setBookmark}
          setLike={setLike}
          bookmark={bookmark}
          like={like}
        />
      </div>
    );
  }

  return (
    <div
      className={
        " sm:w-[119px] sm:h-[129px]  md:w-[238px] md:h-[258px]  lg:w-[218px] lg:h-[238px]   xl:w-[218px] xl:h-[238px]  2xl:w-[218px] 2xl:h-[238px] overflow-hidden   m-0"
      }
    >
      <div className="w-full h-full relative ">
        <motion.div
          style={{
            backgroundImage: `url(${props.content})`,
            backgroundSize: "cover",
          }}
          className=" w-full h-full"
          onHoverStart={() => setHover(true)}
        />

        {hover ? (
          <motion.div
            initial={{ top: "300px" }}
            animate={{ top: 0 }}
            transition={{
              duration: 1,
            }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className=" absolute flex w-full h-full bg-white/50 justify-center items-center"
            onClick={() => setExpands(true)}
          >
            <div className="w-full sm:h-[32px] md:h-[64px] xl:h-[64px] lg:h-[64px] 2xl:h-[64px] flex justify-center gap-4">
              <div className="flex items-center gap-1">
                <FaRegHeart />
                {props.likesCount}
              </div>
              <div className="flex items-center gap-1">
                <FaRegCommentAlt />
                {props.comments?.length}
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
