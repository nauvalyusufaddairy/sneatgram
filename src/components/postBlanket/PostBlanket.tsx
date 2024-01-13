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
import RepliedComment from "./RepliedComment";
import Comment from "./Comment";

export default function PostBlanket({
  setExpands,
  props,
  like,
  setLike,
  bookmark,
  setBookmark,
}: {
  setExpands: Dispatch<SetStateAction<boolean>>;
  props: Post;
  like: Card;
  bookmark: Card;
  setLike: Dispatch<SetStateAction<Card>>;
  setBookmark: Dispatch<SetStateAction<Card>>;
}) {
  const blanketRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerHeight);
    console.log("resizeeee", screenWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const handleCloseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    event.stopPropagation();
    setExpands((prev) => !prev);
  };
  //  sm
  if (screenWidth >= 2 && screenWidth <= 767) {
    return (
      <div className="w-screen h-screen fixed left-0 transparent text-[#040D12]">
        <motion.div
          initial={{
            height: "100px",
            width: "100px",
            backgroundColor: "#36B5B0",
            zIndex: "30",
          }}
          whileInView={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(245, 245, 245,0.2)",
          }}
          className="fixed top-0 justify-center items-center"
        >
          <div className="w-screen h-screen flex justify-center items-center bg-transparent z-40">
            <div className="  w-screen  bg-white flex flex-col">
              {/* the card */}
              <section className="w-full h-full   flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-1 rounded-md text-sm ">
                {/* post content  */}

                <div
                  className="w-full h-[300px] "
                  style={{ backgroundImage: `url(${props.content})` }}
                />
                <div
                  ref={blanketRef}
                  className="w-full h-[24px] text-[24px] text-[#040D12] flex justify-end items-center gap-2 mr-2 mt-2 hover:cursor-pointer"
                  onClick={() => setExpands((prev) => !prev)}
                >
                  <IoIosCloseCircleOutline />{" "}
                  <p className="text-sm">close comment</p>
                </div>
                <div className="w-full h-[300px] mt-4 overflow-y-scroll overflow-x-hidden">
                  <div className="w-full flex gap-2  items-start">
                    <div className="text-[#040D12] font-[600] w-[320px] text-base ">
                      <p>
                        {props.userId}
                        <span className="ml-2 text-[#040D12]/80 font-[400]">
                          {props.caption}
                        </span>
                      </p>
                    </div>
                  </div>

                  {props.comments &&
                    props.comments.map((val, i) => (
                      <div key={i}>
                        {/* Replier image */}
                        <Comment props={val} key={i} />
                      </div>
                    ))}
                </div>

                <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
                  <div className="w-fit flex gap-4 text-[#040D12] ">
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
                          className="text-red-500"
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
                        className="text-[#040D12]"
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
                <div className="w-full my-2 text-[#040D12] ">
                  {props.likesCount} likes
                </div>
                <input
                  placeholder="add your comment "
                  type="text"
                  className="bg-transparent border-b-[1px] border-b-gray-300/80 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
                />
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  //   md
  if (screenWidth >= 768 && screenWidth <= 1023) {
    return (
      <div className="w-screen h-screen fixed left-0 transparent">
        <motion.div
          ref={blanketRef}
          initial={{
            height: "100px",
            width: "100px",
            backgroundColor: "#36B5B0",
            zIndex: "20",
          }}
          whileInView={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(245, 245, 245, 0.2)",
          }}
          className="fixed top-0 justify-center items-center"
        >
          <div
            className="w-screen h-screen flex justify-center items-center bg-transparent "
            onClick={handleCloseClick}
          >
            <div className=" w-[700px] h-[500px] z-30  bg-white">
              <div className="w-full h-full flex">
                {/* image */}
                <div className="w-[50%] h-full ">
                  <div
                    style={{
                      backgroundImage: `url(${props.content})`,
                      backgroundSize: "100% 100%",
                    }}
                    className="w-full h-full"
                  />
                </div>
                {/* comment section */}
                <div className="w-[50%] h-full bg-white overflow-hidden">
                  <div className="w-full h-full">
                    <section className="w-full h-full   flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md md:text-sm sm:text-sm  ">
                      <div className="w-full h-[70px] flex items-center gap-4 border-b-[1px] border-b-gray-300/80">
                        <div
                          className="w-[50px] h-[50px] md:w-[40px] md:h-[40px] rounded-full border-[1px] border-[#040D12]"
                          style={{
                            backgroundImage: `url(${props.userImage})`,
                            backgroundSize: "100% 100%",
                          }}
                        />

                        <div className="flex flex-col">
                          <div className="w-full flex gap-[6px] items-center">
                            <p className="font-[600]">{props.userId}</p>{" "}
                            <div>
                              <MdVerified />
                            </div>
                          </div>
                          <div className=" text-[#040D12]/80 text-xs font-[600] ">
                            {props.postDesc}
                          </div>
                        </div>
                      </div>
                      {/* post content  */}

                      <div className="w-full h-[300px] mt-4 overflow-y-scroll overflow-x-hidden">
                        <div className="w-full flex gap-2  items-start">
                          <div
                            className="w-[50px] h-[50px] md:w-[32px] md:h-[32px] rounded-full border-[1px] border-[#040D12]"
                            style={{
                              backgroundImage: `url(${props.userImage})`,
                              backgroundSize: "100% 100%",
                            }}
                          />
                          <div className="text-[#040D12] font-[600] w-[350px] text-base ">
                            <p>
                              {props.userId}
                              <span className="ml-2 text-[#040D12]/80 font-[400]">
                                {props.caption}
                              </span>
                            </p>
                          </div>
                        </div>

                        {props.comments &&
                          props.comments.map((val, i) => (
                            <div key={i}>
                              <Comment props={val} key={i} />
                            </div>
                          ))}
                      </div>

                      <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
                        <div className="w-fit flex gap-4 text-[#040D12] ">
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
                                className="text-red-500"
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
                              className="text-[#040D12]"
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
                      <div className="w-full my-2 text-[#040D12] md:text-sm sm:text-sm">
                        {props.likesCount} likes
                      </div>
                      <input
                        placeholder="add your comment "
                        type="text"
                        className="bg-transparent border-b-[1px] border-b-gray-300/80 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
                      />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  //   lg
  if (screenWidth >= 1024 && screenWidth <= 1279) {
    return (
      <div className="w-screen h-screen fixed left-0 transparent">
        <motion.div
          ref={blanketRef}
          initial={{
            height: "100px",
            width: "100px",
            backgroundColor: "#36B5B0",
            zIndex: "20",
          }}
          whileInView={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(245, 245, 245, 0.2)",
          }}
          className="fixed top-0 justify-center items-center"
        >
          <div
            className="w-screen h-screen flex justify-center items-center bg-transparent "
            onClick={handleCloseClick}
          >
            <div className=" w-[900px] h-[550px] z-30  bg-white">
              <div className="w-full h-full flex">
                {/* image */}
                <div className="w-[50%] h-full ">
                  <div
                    style={{
                      backgroundImage: `url(${props.content})`,
                      backgroundSize: "100% 100%",
                    }}
                    className="w-full h-full"
                  />
                </div>
                {/* comment section */}
                <div className="w-[50%] h-full bg-white overflow-hidden">
                  <div className="w-full h-full">
                    <section className="w-full h-full   flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
                      <div className="w-full h-[70px] flex items-center gap-4 border-b-[1px] border-b-gray-300/80">
                        <div
                          className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
                          style={{
                            backgroundImage: `url(${props.userImage})`,
                            backgroundSize: "100% 100%",
                          }}
                        />

                        <div className="flex flex-col">
                          <div className="w-full flex gap-[6px] items-center">
                            <p className="font-[600]">{props.userId}</p>{" "}
                            <div>
                              <MdVerified />
                            </div>
                          </div>
                          <div className=" text-[#040D12]/80 text-xs font-[600] ">
                            {props.postDesc}
                          </div>
                        </div>
                      </div>
                      {/* post content  */}

                      <div className="w-full h-[300px] mt-4 overflow-y-scroll overflow-x-hidden">
                        <div className="w-full flex gap-2  items-start">
                          <div
                            className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
                            style={{
                              backgroundImage: `url(${props.userImage})`,
                              backgroundSize: "100% 100%",
                            }}
                          />
                          <div className="text-[#040D12] font-[600] w-[350px] text-base ">
                            <p>
                              {props.userId}
                              <span className="ml-2 text-[#040D12]/80 font-[400]">
                                {props.caption}
                              </span>
                            </p>
                          </div>
                        </div>

                        {props.comments &&
                          props.comments.map((val, i) => (
                            <div key={i}>
                              {/* Replier image */}
                              <Comment props={val} key={i} />
                            </div>
                          ))}
                      </div>

                      <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
                        <div className="w-fit flex gap-4 text-[#040D12] ">
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
                                className="text-red-500"
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
                              className="text-[#040D12]"
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
                      <div className="w-full my-2 text-[#040D12] ">
                        {props.likesCount} likes
                      </div>
                      <input
                        placeholder="add your comment "
                        type="text"
                        className="bg-transparent border-b-[1px] border-b-gray-300/80 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
                      />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  //   xl
  if (screenWidth > 1280) {
    return (
      <div className="w-screen h-screen fixed left-0 transparent">
        <motion.div
          ref={blanketRef}
          initial={{
            height: "100px",
            width: "100px",
            backgroundColor: "#36B5B0",
            zIndex: "20",
          }}
          whileInView={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(245, 245, 245, 0.2)",
          }}
          className="fixed top-0 justify-center items-center"
        >
          <div
            className="w-screen h-screen flex justify-center items-center bg-transparent "
            onClick={handleCloseClick}
          >
            <div className=" w-[900px] h-[550px] z-30  bg-white">
              <div className="w-full h-full flex">
                {/* image */}
                <div className="w-[50%] h-full ">
                  <div
                    style={{
                      backgroundImage: `url(${props.content})`,
                      backgroundSize: "100% 100%",
                    }}
                    className="w-full h-full"
                  />
                </div>
                {/* comment section */}
                <div className="w-[50%] h-full bg-white overflow-hidden">
                  <div className="w-full h-full">
                    <section className="w-full h-full   flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
                      <div className="w-full h-[70px] flex items-center gap-4 border-b-[1px] border-b-gray-300/80">
                        <div
                          className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
                          style={{
                            backgroundImage: `url(${props.userImage})`,
                            backgroundSize: "100% 100%",
                          }}
                        />

                        <div className="flex flex-col">
                          <div className="w-full flex gap-[6px] items-center">
                            <p className="font-[600]">{props.userId}</p>{" "}
                            <div>
                              <MdVerified />
                            </div>
                          </div>
                          <div className=" text-[#040D12]/80 text-xs font-[600] ">
                            {props.postDesc}
                          </div>
                        </div>
                      </div>
                      {/* post content  */}

                      <div className="w-full h-[300px] mt-4 overflow-y-scroll overflow-x-hidden">
                        <div className="w-full flex gap-2  items-start">
                          <div
                            className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
                            style={{
                              backgroundImage: `url(${props.userImage})`,
                              backgroundSize: "100% 100%",
                            }}
                          />
                          <div className="text-[#040D12] font-[600] w-[350px] text-base ">
                            <p>
                              {props.userId}
                              <span className="ml-2 text-[#040D12]/80 font-[400]">
                                {props.caption}
                              </span>
                            </p>
                          </div>
                        </div>

                        {props.comments &&
                          props.comments.map((val, i) => (
                            <div key={i}>
                              {/* Replier image */}
                              <Comment props={val} key={i} />
                            </div>
                          ))}
                      </div>

                      <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
                        <div className="w-fit flex gap-4 text-[#040D12] ">
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
                                className="text-red-500"
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
                              className="text-[#040D12]"
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
                      <div className="w-full my-2 text-[#040D12] ">
                        {props.likesCount} likes
                      </div>
                      <input
                        placeholder="add your comment "
                        type="text"
                        className="bg-transparent border-b-[1px] border-b-gray-300/80 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
                      />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
}

// function PostBlanket({
//     setExpands,
//     props,
//     like,
//     setLike,
//     bookmark,
//     setBookmark,
//   }: {
//     setExpands: Dispatch<SetStateAction<boolean>>;
//     props: Post;
//     like: Card;
//     bookmark: Card;
//     setLike: Dispatch<SetStateAction<Card>>;
//     setBookmark: Dispatch<SetStateAction<Card>>;
//   }) {
//     const blanketRef = useRef<HTMLDivElement>(null);
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//     const [commentLikes, setCommentLikes] = useState(false);

//     const handleResize = () => {
//       setScreenWidth(window.innerHeight);
//       console.log("resizeeee", screenWidth);
//     };
//     useEffect(() => {
//       window.addEventListener("resize", handleResize);

//       return () => window.removeEventListener("resize", handleResize);
//     }, [screenWidth]);

//     const handleCloseClick = (event: React.MouseEvent<HTMLDivElement>) => {
//       if (event.target !== event.currentTarget) return;
//       console.log("eyyoeyyyo");
//       event.stopPropagation();
//       setExpands((prev) => !prev);
//     };
//     //  sm
//     if (screenWidth >= 2 && screenWidth <= 767) {
//       return (
//         <div className="w-screen h-screen fixed left-0 transparent text-[#040D12]">
//           <motion.div
//             initial={{
//               height: "100px",
//               width: "100px",
//               backgroundColor: "#36B5B0",
//               zIndex: "30",
//             }}
//             whileInView={{
//               width: "100vw",
//               height: "100vh",
//               backgroundColor: "rgba(245, 245, 245,0.2)",
//             }}
//             className="fixed top-0 justify-center items-center"
//           >
//             <div className="w-screen flex justify-center items-center bg-transparent z-40">
//               <div className="  w-screen overflow-y-scroll  bg-white flex flex-col">
//                 <div
//                   ref={blanketRef}
//                   className="w-full h-[24px] text-[24px] text-[#040D12] flex justify-end mr-2 mt-2 hover:cursor-pointer"
//                   onClick={() => setExpands((prev) => !prev)}
//                 >
//                   <IoIosCloseCircleOutline />
//                 </div>
//                 {/* the card */}
//                 <section className="w-[400px]  sm:w-[320px] h-screen overflow-y-scroll  flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
//                   <div className="w-full h-[50px] flex items-center gap-4">
//                     <div
//                       className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
//                       style={{
//                         backgroundImage: `url(${props.userImage})`,
//                         backgroundSize: "100% 100%",
//                       }}
//                     />

//                     <div className="flex flex-col">
//                       <div className="w-full flex gap-[6px] items-center">
//                         <p className="font-[600]">{props.userId}</p>{" "}
//                         <div>
//                           <MdVerified />
//                         </div>
//                       </div>
//                       <div className=" text-[#040D12] text-xs font-[600] ">
//                         {props.postDesc}
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="w-full h-[250px] mt-2"
//                     style={{
//                       backgroundImage: `url(${props.content})`,
//                       backgroundSize: "100% 100%",
//                     }}
//                   />
//                   <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
//                     <div className="w-fit flex gap-4 text-[#040D12] ">
//                       {" "}
//                       <motion.div
//                         onTap={() => setLike("like")}
//                         className=" hover:cursor-pointer"
//                       >
//                         {like === "like" ? (
//                           <motion.div
//                             initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
//                             animate={{
//                               scale: [3, 1],
//                               opacity: 1,
//                               x: [100, -300, 0],
//                               y: [-100, 400, 0],
//                             }}
//                             transition={{
//                               duration: 1,
//                               type: "spring",
//                               stiffness: 200,
//                             }}
//                             onClick={() => setLike("")}
//                             className="text-red-500"
//                           >
//                             <FaHeart />
//                           </motion.div>
//                         ) : (
//                           <div>
//                             {" "}
//                             <FaRegHeart />
//                           </div>
//                         )}
//                       </motion.div>{" "}
//                       <div className=" hover:cursor-pointer">
//                         <BiComment />
//                       </div>
//                     </div>
//                     <motion.div
//                       onTap={() => setBookmark("bookmark")}
//                       className=" hover:cursor-pointer"
//                     >
//                       {bookmark === "bookmark" ? (
//                         <motion.div
//                           initial={{ scale: 0, opacity: 0, rotateY: 360 }}
//                           animate={{
//                             scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
//                             opacity: 1,
//                             rotateY: [360, 180, 95, 45, 15, 0],
//                           }}
//                           transition={{
//                             duration: 3,
//                             type: "spring",
//                             stiffness: 100,
//                           }}
//                           onClick={() => setBookmark("")}
//                           className="text-[#040D12]"
//                         >
//                           <MdBookmarkAdd />
//                         </motion.div>
//                       ) : (
//                         <div>
//                           {" "}
//                           <MdOutlineBookmarkAdd />
//                         </div>
//                       )}
//                     </motion.div>
//                   </div>
//                   <div className="w-full my-2 text-[#040D12] ">
//                     {props.likesCount} likes
//                   </div>

//                   <div className=" w-full min-h-[40px] max-h-[76px] overflow-hidden mt-2  ">
//                     <div className="w-full h-[50px]">
//                       <p className={styles.box + " text-[#040D12]/80"}>
//                         <strong
//                           className={
//                             styles.strong + " text-[#040D12] font-bold"
//                           }
//                         >
//                           {props.userId}
//                         </strong>

//                         {props.post}
//                       </p>
//                     </div>
//                   </div>

//                   {typeof props.comments !== "undefined" ? (
//                     <div className={`w-full h-[200px] overflow-y-scroll `}>
//                       {props.comments &&
//                         props.comments?.map((comment, index) => (
//                           <div
//                             className="flex justify-between mt-4 "
//                             key={index}
//                           >
//                             <p className={" text-[#040D12]/80 "}>
//                               {" "}
//                               <strong
//                                 className={
//                                   styles.strong + " text-[#040D12] font-bold"
//                                 }
//                               >
//                                 {comment.userId}
//                               </strong>
//                               {comment.comment}
//                             </p>
//                           </div>
//                         ))}
//                     </div>
//                   ) : (
//                     ""
//                   )}

//                   <input
//                     placeholder="add your comment "
//                     type="text"
//                     className="bg-transparent border-b-[1px] border-b-bg30 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
//                   />
//                 </section>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       );
//     }
//     //   md
//     if (screenWidth >= 768 && screenWidth <= 1023) {
//       return (
//         <div className="w-screen h-screen fixed left-0 transparent">
//           <motion.div
//             ref={blanketRef}
//             initial={{
//               height: "100px",
//               width: "100px",
//               backgroundColor: "#36B5B0",
//               zIndex: "20",
//             }}
//             whileInView={{
//               width: "100vw",
//               height: "100vh",
//               backgroundColor: "rgba(245, 245, 245, 0.2)",
//             }}
//             className="fixed top-0 justify-center items-center"
//           >
//             <div
//               className="w-screen h-screen flex justify-center items-center bg-transparent "
//               onClick={handleCloseClick}
//             >
//               <div className=" w-[650px] h-[500px] z-30  bg-white">
//                 <div className="w-full h-full flex">
//                   {/* image */}
//                   <div className="w-[50%] h-full ">
//                     <div
//                       style={{
//                         backgroundImage: `url(${props.content})`,
//                         backgroundSize: "100% 100%",
//                       }}
//                       className="w-full h-full"
//                     />
//                   </div>
//                   {/* comment section */}
//                   <div className="w-[50%] h-full bg-white overflow-hidden">
//                     <div className="w-full h-full">
//                       <section className="w-full h-full   flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
//                         <div className="w-full h-[50px] flex items-center gap-4 border-b-[1px] border-b-gray-300/80">
//                           <div
//                             className="w-[32px] h-[32px] rounded-full border-[1px] border-[#040D12]"
//                             style={{
//                               backgroundImage: `url(${props.userImage})`,
//                               backgroundSize: "100% 100%",
//                             }}
//                           />

//                           <div className="flex flex-col">
//                             <div className="w-full flex gap-[6px] items-center">
//                               <p className="font-[600]">{props.userId}</p>{" "}
//                               <div>
//                                 <MdVerified />
//                               </div>
//                             </div>
//                             <div className=" text-[#040D12]/80 text-xs font-[600] ">
//                               {props.postDesc}
//                             </div>
//                           </div>
//                         </div>
//                         {/* post content  */}

//                         <div className="w-full h-[300px] mt-4 overflow-y-scroll overflow-x-hidden">
//                           <div className="w-full flex gap-2  items-start">
//                             <div
//                               className="w-[32px] h-[32px] rounded-full border-[1px] border-[#040D12]"
//                               style={{
//                                 backgroundImage: `url(${props.userImage})`,
//                                 backgroundSize: "100% 100%",
//                               }}
//                             />
//                             <div className="text-[#040D12] font-[600] w-[250px] text-sm ">
//                               <p>
//                                 {props.userId}
//                                 <span className="ml-2 text-[#040D12]/80 font-[400]">
//                                   {props.post}
//                                 </span>
//                               </p>
//                             </div>
//                           </div>
//                           {props.comments &&
//                             props.comments.map((val, i) => (
//                               <div className="w-full flex gap-2  mt-4 items-start">
//                                 <div
//                                   className="w-[32px] h-[32px] rounded-full border-[1px] border-[#040D12]"
//                                   style={{
//                                     backgroundImage: `url(${val.replierImage})`,
//                                     backgroundSize: "100% 100%",
//                                   }}
//                                 />
//                                 <div className="text-[#040D12] font-[600] w-[250px]  text-sm">
//                                   <p>
//                                     {val.userId}
//                                     <span className="ml-2 text-[#040D12]/80 font-[400]">
//                                       {val.comment}
//                                     </span>
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                         </div>

//                         <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
//                           <div className="w-fit flex gap-4 text-[#040D12] ">
//                             {" "}
//                             <motion.div
//                               onTap={() => setLike("like")}
//                               className=" hover:cursor-pointer"
//                             >
//                               {like === "like" ? (
//                                 <motion.div
//                                   initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
//                                   animate={{
//                                     scale: [3, 1],
//                                     opacity: 1,
//                                     x: [100, -300, 0],
//                                     y: [-100, 400, 0],
//                                   }}
//                                   transition={{
//                                     duration: 1,
//                                     type: "spring",
//                                     stiffness: 200,
//                                   }}
//                                   onClick={() => setLike("")}
//                                   className="text-red-500"
//                                 >
//                                   <FaHeart />
//                                 </motion.div>
//                               ) : (
//                                 <div>
//                                   {" "}
//                                   <FaRegHeart />
//                                 </div>
//                               )}
//                             </motion.div>{" "}
//                             <div className=" hover:cursor-pointer">
//                               <BiComment />
//                             </div>
//                           </div>
//                           <motion.div
//                             onTap={() => setBookmark("bookmark")}
//                             className=" hover:cursor-pointer"
//                           >
//                             {bookmark === "bookmark" ? (
//                               <motion.div
//                                 initial={{ scale: 0, opacity: 0, rotateY: 360 }}
//                                 animate={{
//                                   scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
//                                   opacity: 1,
//                                   rotateY: [360, 180, 95, 45, 15, 0],
//                                 }}
//                                 transition={{
//                                   duration: 3,
//                                   type: "spring",
//                                   stiffness: 100,
//                                 }}
//                                 onClick={() => setBookmark("")}
//                                 className="text-[#040D12]"
//                               >
//                                 <MdBookmarkAdd />
//                               </motion.div>
//                             ) : (
//                               <div>
//                                 {" "}
//                                 <MdOutlineBookmarkAdd />
//                               </div>
//                             )}
//                           </motion.div>
//                         </div>
//                         <div className="w-full my-2 text-[#040D12] ">
//                           {props.likesCount} likes
//                         </div>
//                         <input
//                           placeholder="add your comment "
//                           type="text"
//                           className="bg-transparent border-b-[1px] border-b-gray-300/80 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
//                         />
//                       </section>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       );
//     }
//     //   xl
//     if (screenWidth >= 1024 && screenWidth <= 1279) {
//       return (
//         <div className="w-screen h-screen fixed left-0 transparent">
//           <motion.div
//             ref={blanketRef}
//             initial={{
//               height: "100px",
//               width: "100px",
//               backgroundColor: "#36B5B0",
//               zIndex: "20",
//             }}
//             whileInView={{
//               width: "100vw",
//               height: "100vh",
//               backgroundColor: "rgba(245, 245, 245, 0.2)",
//             }}
//             className="fixed top-0 justify-center items-center"
//           >
//             <div
//               className="w-screen h-screen flex justify-center items-center bg-transparent "
//               onClick={handleCloseClick}
//             >
//               <div className=" w-[700px] h-[500px] z-30  bg-white">
//                 <div className="w-full h-full flex">
//                   {/* image */}
//                   <div className="w-[50%] h-full ">
//                     <div
//                       style={{
//                         backgroundImage: `url(${props.content})`,
//                         backgroundSize: "100% 100%",
//                       }}
//                       className="w-full h-full"
//                     />
//                   </div>
//                   {/* comment section */}
//                   <div className="w-[50%] h-full bg-white overflow-hidden">
//                     <div className="w-full h-full">
//                       <section className="w-full h-full   flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
//                         <div className="w-full h-[50px] flex items-center gap-4 border-b-[1px] border-b-gray-300/80">
//                           <div
//                             className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
//                             style={{
//                               backgroundImage: `url(${props.userImage})`,
//                               backgroundSize: "100% 100%",
//                             }}
//                           />

//                           <div className="flex flex-col">
//                             <div className="w-full flex gap-[6px] items-center">
//                               <p className="font-[600]">{props.userId}</p>{" "}
//                               <div>
//                                 <MdVerified />
//                               </div>
//                             </div>
//                             <div className=" text-[#040D12]/80 text-xs font-[600] ">
//                               {props.postDesc}
//                             </div>
//                           </div>
//                         </div>
//                         {/* post content  */}

//                         <div className="w-full h-[300px] mt-4 overflow-y-scroll overflow-x-hidden">
//                           <div className="w-full flex gap-2  items-start">
//                             <div
//                               className="w-[32px] h-[32px] rounded-full border-[1px] border-[#040D12]"
//                               style={{
//                                 backgroundImage: `url(${props.userImage})`,
//                                 backgroundSize: "100% 100%",
//                               }}
//                             />
//                             <div className="text-[#040D12] font-[600] w-[350px] text-sm ">
//                               <p>
//                                 {props.userId}
//                                 <span className="ml-2 text-[#040D12]/80 font-[400]">
//                                   {props.post}
//                                 </span>
//                               </p>
//                             </div>
//                           </div>
//                           {props.comments &&
//                             props.comments.map((val, i) => (
//                               <div className="w-full flex gap-2  mt-4 items-start">
//                                 <div
//                                   className="w-[32px] h-[32px] rounded-full border-[1px] border-[#040D12]"
//                                   style={{
//                                     backgroundImage: `url(${val.replierImage})`,
//                                     backgroundSize: "100% 100%",
//                                   }}
//                                 />
//                                 <div className="text-[#040D12] font-[600] w-[350px]  text-sm">
//                                   <p>
//                                     {val.userId}
//                                     <span className="ml-2 text-[#040D12]/80 font-[400]">
//                                       {val.comment}
//                                     </span>
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                         </div>

//                         <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
//                           <div className="w-fit flex gap-4 text-[#040D12] ">
//                             {" "}
//                             <motion.div
//                               onTap={() => setLike("like")}
//                               className=" hover:cursor-pointer"
//                             >
//                               {like === "like" ? (
//                                 <motion.div
//                                   initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
//                                   animate={{
//                                     scale: [3, 1],
//                                     opacity: 1,
//                                     x: [100, -300, 0],
//                                     y: [-100, 400, 0],
//                                   }}
//                                   transition={{
//                                     duration: 1,
//                                     type: "spring",
//                                     stiffness: 200,
//                                   }}
//                                   onClick={() => setLike("")}
//                                   className="text-red-500"
//                                 >
//                                   <FaHeart />
//                                 </motion.div>
//                               ) : (
//                                 <div>
//                                   {" "}
//                                   <FaRegHeart />
//                                 </div>
//                               )}
//                             </motion.div>{" "}
//                             <div className=" hover:cursor-pointer">
//                               <BiComment />
//                             </div>
//                           </div>
//                           <motion.div
//                             onTap={() => setBookmark("bookmark")}
//                             className=" hover:cursor-pointer"
//                           >
//                             {bookmark === "bookmark" ? (
//                               <motion.div
//                                 initial={{ scale: 0, opacity: 0, rotateY: 360 }}
//                                 animate={{
//                                   scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
//                                   opacity: 1,
//                                   rotateY: [360, 180, 95, 45, 15, 0],
//                                 }}
//                                 transition={{
//                                   duration: 3,
//                                   type: "spring",
//                                   stiffness: 100,
//                                 }}
//                                 onClick={() => setBookmark("")}
//                                 className="text-[#040D12]"
//                               >
//                                 <MdBookmarkAdd />
//                               </motion.div>
//                             ) : (
//                               <div>
//                                 {" "}
//                                 <MdOutlineBookmarkAdd />
//                               </div>
//                             )}
//                           </motion.div>
//                         </div>
//                         <div className="w-full my-2 text-[#040D12] ">
//                           {props.likesCount} likes
//                         </div>
//                         <input
//                           placeholder="add your comment "
//                           type="text"
//                           className="bg-transparent border-b-[1px] border-b-gray-300/80 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
//                         />
//                       </section>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       );
//     }
//     //   xl
//     if (screenWidth > 1280) {
//       return (
//         <div className="w-screen h-screen fixed left-0 transparent">
//           <motion.div
//             ref={blanketRef}
//             initial={{
//               height: "100px",
//               width: "100px",
//               backgroundColor: "#36B5B0",
//               zIndex: "20",
//             }}
//             whileInView={{
//               width: "100vw",
//               height: "100vh",
//               backgroundColor: "rgba(245, 245, 245, 0.2)",
//             }}
//             className="fixed top-0 justify-center items-center"
//           >
//             <div
//               className="w-screen h-screen flex justify-center items-center bg-transparent "
//               onClick={handleCloseClick}
//             >
//               <div className=" w-[900px] h-[550px] z-30  bg-white">
//                 <div className="w-full h-full flex">
//                   {/* image */}
//                   <div className="w-[50%] h-full ">
//                     <div
//                       style={{
//                         backgroundImage: `url(${props.content})`,
//                         backgroundSize: "100% 100%",
//                       }}
//                       className="w-full h-full"
//                     />
//                   </div>
//                   {/* comment section */}
//                   <div className="w-[50%] h-full bg-white overflow-hidden">
//                     <div className="w-full h-full">
//                       <section className="w-full h-full   flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
//                         <div className="w-full h-[70px] flex items-center gap-4 border-b-[1px] border-b-gray-300/80">
//                           <div
//                             className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
//                             style={{
//                               backgroundImage: `url(${props.userImage})`,
//                               backgroundSize: "100% 100%",
//                             }}
//                           />

//                           <div className="flex flex-col">
//                             <div className="w-full flex gap-[6px] items-center">
//                               <p className="font-[600]">{props.userId}</p>{" "}
//                               <div>
//                                 <MdVerified />
//                               </div>
//                             </div>
//                             <div className=" text-[#040D12]/80 text-xs font-[600] ">
//                               {props.postDesc}
//                             </div>
//                           </div>
//                         </div>
//                         {/* post content  */}

//                         <div className="w-full h-[300px] mt-4 overflow-y-scroll overflow-x-hidden">
//                           <div className="w-full flex gap-2  items-start">
//                             <div
//                               className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
//                               style={{
//                                 backgroundImage: `url(${props.userImage})`,
//                                 backgroundSize: "100% 100%",
//                               }}
//                             />
//                             <div className="text-[#040D12] font-[600] w-[350px] text-base ">
//                               <p>
//                                 {props.userId}
//                                 <span className="ml-2 text-[#040D12]/80 font-[400]">
//                                   {props.post}
//                                 </span>
//                               </p>
//                             </div>
//                           </div>

//                           {props.comments &&
//                             props.comments.map((val, i) => (
//                               <div>
//                                 <div className="w-full flex gap-2  mt-4 items-start">
//                                   <div
//                                     className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
//                                     style={{
//                                       backgroundImage: `url(${val.replierImage})`,
//                                       backgroundSize: "100% 100%",
//                                     }}
//                                   />
//                                   <div className="text-[#040D12] font-[600] w-[325px]  text-base">
//                                     <p>
//                                       {val.userId}
//                                       <span className="ml-2 text-[#040D12]/80 font-[400]">
//                                         {val.comment}
//                                       </span>
//                                     </p>
//                                   </div>
//                                   <div
//                                     className="w-[24px] mt-2"
//                                     onClick={() =>
//                                       setCommentLikes((prev) => !prev)
//                                     }
//                                   >
//                                     {commentLikes ? (
//                                       <motion.div
//                                         className="text-red-500"
//                                         initial={{
//                                           scale: 0,
//                                           opacity: 0,
//                                           rotateY: 0,
//                                         }}
//                                         whileInView={{
//                                           scale: [2, 3, 1],
//                                           opacity: 1,
//                                           rotateY: [45, 15, 0],
//                                         }}
//                                         transition={{
//                                           duration: 2,
//                                           type: "spring",
//                                           stiffness: 200,
//                                         }}
//                                       >
//                                         <FaHeart />
//                                       </motion.div>
//                                     ) : (
//                                       <FaRegHeart />
//                                     )}
//                                   </div>
//                                 </div>
//                                 <div className="w-full h-[32px] flex gap-2 text-base text-gray-400 mt-2 ml-[56px]  ">
//                                   <p>5 likes</p> <p>Reply</p>
//                                 </div>
//                                 {/* replied comment if any */}
//                                 {val.replied && (
//                                   <div className="w-full h-[32px]  flex mt-4 ml-[56px] gap-4 items-baseline ">
//                                     <div className="w-[50px] h-[1.2px] bg-gray-400" />
//                                     <p className="text-gray-400">
//                                       {" "}
//                                       view replies {"("}
//                                       {val.replied.length}
//                                       {")"}
//                                     </p>
//                                   </div>
//                                 )}
//                               </div>
//                             ))}
//                         </div>

//                         <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
//                           <div className="w-fit flex gap-4 text-[#040D12] ">
//                             {" "}
//                             <motion.div
//                               onTap={() => setLike("like")}
//                               className=" hover:cursor-pointer"
//                             >
//                               {like === "like" ? (
//                                 <motion.div
//                                   initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
//                                   animate={{
//                                     scale: [3, 1],
//                                     opacity: 1,
//                                     x: [100, -300, 0],
//                                     y: [-100, 400, 0],
//                                   }}
//                                   transition={{
//                                     duration: 1,
//                                     type: "spring",
//                                     stiffness: 200,
//                                   }}
//                                   onClick={() => setLike("")}
//                                   className="text-red-500"
//                                 >
//                                   <FaHeart />
//                                 </motion.div>
//                               ) : (
//                                 <div>
//                                   {" "}
//                                   <FaRegHeart />
//                                 </div>
//                               )}
//                             </motion.div>{" "}
//                             <div className=" hover:cursor-pointer">
//                               <BiComment />
//                             </div>
//                           </div>
//                           <motion.div
//                             onTap={() => setBookmark("bookmark")}
//                             className=" hover:cursor-pointer"
//                           >
//                             {bookmark === "bookmark" ? (
//                               <motion.div
//                                 initial={{ scale: 0, opacity: 0, rotateY: 360 }}
//                                 animate={{
//                                   scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
//                                   opacity: 1,
//                                   rotateY: [360, 180, 95, 45, 15, 0],
//                                 }}
//                                 transition={{
//                                   duration: 3,
//                                   type: "spring",
//                                   stiffness: 100,
//                                 }}
//                                 onClick={() => setBookmark("")}
//                                 className="text-[#040D12]"
//                               >
//                                 <MdBookmarkAdd />
//                               </motion.div>
//                             ) : (
//                               <div>
//                                 {" "}
//                                 <MdOutlineBookmarkAdd />
//                               </div>
//                             )}
//                           </motion.div>
//                         </div>
//                         <div className="w-full my-2 text-[#040D12] ">
//                           {props.likesCount} likes
//                         </div>
//                         <input
//                           placeholder="add your comment "
//                           type="text"
//                           className="bg-transparent border-b-[1px] border-b-gray-300/80 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
//                         />
//                       </section>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       );
//     }
//   }
