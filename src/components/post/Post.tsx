"use client";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiComment, BiSolidComment } from "react-icons/bi";
import { MdOutlineBookmarkAdd, MdBookmarkAdd } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "./post.module.css";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import PostBlanket from "../postBlanket/PostBlanket";

export default function Post({ props }: { props: Post }) {
  const [like, setLike] = useState<Card>("");
  const [bookmark, setBookmark] = useState<Card>("");
  const [expands, setExpands] = useState(false);
  const [postLine, setPostLine] = useState(0);
  const paragraf = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      setPostLine(paragraf.current?.clientHeight);
    }
  }, []);

  if (expands) {
    return (
      <PostBlanket
        setExpands={setExpands}
        props={props}
        setBookmark={setBookmark}
        setLike={setLike}
        bookmark={bookmark}
        like={like}
      />
    );
  } else {
    return (
      <section className="w-[400px] min-h-[550px] sm:w-[320px] flex flex-col bg-bg30/50 mt-4 select-none px-4 py-2 rounded-md text-gray-50 ">
        <div className="w-full h-[50px] flex items-center gap-4">
          <div
            className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-50"
            style={{
              backgroundImage: `url(${props.userImage})`,
              backgroundSize: "cover",
            }}
          />

          <div className="flex flex-col">
            <div className="w-full flex gap-[6px] items-center">
              <p className="font-[600]">{props.userId}</p>{" "}
              <div>
                <MdVerified />
              </div>
            </div>
            <div className=" text-[#C8CCCE] text-xs font-[600] ">
              {props.postDesc}
            </div>
          </div>
        </div>
        <div
          className="w-full h-[250px] mt-2"
          style={{
            backgroundImage: `url(${props.content})`,
            backgroundSize: "100% 100%",
          }}
        />
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
        <div className="w-full my-2 text-gray-50">{props.likesCount} likes</div>

        <div className=" w-full min-h-[40px] max-h-[76px] overflow-hidden mt-2  ">
          <div className="w-full h-[50px]">
            <p ref={paragraf} className={styles.box + " text-[#C8CCCE]"}>
              <strong className={styles.strong + " text-gray-50"}>
                {props.userId}
              </strong>

              {props.caption}
            </p>
          </div>
          {postLine > 42 ? (
            <div
              onClick={() => setExpands((prev) => !prev)}
              className="w-full  h-4 flex text-[#36B5B0] items-center text-[16px] hover:cursor-pointer "
            >
              <p className="">expand</p>
              <IoIosArrowRoundDown />
            </div>
          ) : (
            ""
          )}
        </div>
        {typeof props.comments !== "undefined" ? (
          <motion.p
            // initial={{ scale: 1, color: "#C8CCCE", opacity: 0.5 }}
            // whileTap={{ opacity: 1, scale: 0.9, x: -10, color: "#36B5B0" }}
            // transition={{ duration: 1 }}
            className="w-full text-[#C8CCCE]/50 my-2 hover:cursor-pointer "
            onClick={() => setExpands((prev) => !prev)}
          >
            load more comments...
          </motion.p>
        ) : (
          <motion.p className="w-full text-[#C8CCCE]/50 my-2 hover:cursor-pointer">
            0 comment
          </motion.p>
        )}

        {typeof props.comments !== "undefined" ? (
          <div className={`w-full h-[80px] overflow-hidden `}>
            {props.comments &&
              props.comments?.map((comment, index) => (
                <div className="flex justify-between " key={index}>
                  <p className={" text-[#C8CCCE]  "}>
                    {" "}
                    <strong className={styles.strong + " text-gray-50"}>
                      {comment.userId}
                    </strong>
                    {comment.comment}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          ""
        )}

        <input
          placeholder="add your comment "
          type="text"
          className="bg-transparent border-b-[1px] border-b-bg30 py-2 px-4 mb-2 placeholder-[#C8CCCE]/50 outline-none"
        />
      </section>
    );
  }
}

// function PostBlanket({
//   setExpands,
//   props,
//   like,
//   setLike,
//   bookmark,
//   setBookmark,
// }: {
//   setExpands: Dispatch<SetStateAction<boolean>>;
//   props: Post;
//   like: Card;
//   bookmark: Card;
//   setLike: Dispatch<SetStateAction<Card>>;
//   setBookmark: Dispatch<SetStateAction<Card>>;
// }) {
//   const blanketRef = useRef<HTMLDivElement>(null);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setScreenWidth(window.innerHeight);
//     console.log("resizeeee", screenWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, [screenWidth]);

//   const handleCloseClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (event.target !== event.currentTarget) return;
//     console.log("eyyoeyyyo");
//     event.stopPropagation();
//     setExpands((prev) => !prev);
//   };
//   //  sm
//   if (screenWidth >= 2 && screenWidth <= 767) {
//     return (
//       <div className="w-screen h-screen fixed left-0 transparent text-[#040D12]">
//         <motion.div
//           initial={{
//             height: "100px",
//             width: "100px",
//             backgroundColor: "#36B5B0",
//             zIndex: "30",
//           }}
//           whileInView={{
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(245, 245, 245,0.2)",
//           }}
//           className="fixed top-0 justify-center items-center"
//         >
//           <div className="w-screen flex justify-center items-center bg-transparent z-40">
//             <div className="  w-screen overflow-y-scroll  bg-white flex flex-col">
//               <div
//                 ref={blanketRef}
//                 className="w-full h-[24px] text-[24px] text-[#040D12] flex justify-end mr-2 mt-2 hover:cursor-pointer"
//                 onClick={() => setExpands((prev) => !prev)}
//               >
//                 <IoIosCloseCircleOutline />
//               </div>
//               {/* the card */}
//               <section className="w-[400px]  sm:w-[320px] h-screen overflow-y-scroll  flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
//                 <div className="w-full h-[50px] flex items-center gap-4">
//                   <div
//                     className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
//                     style={{
//                       backgroundImage: `url(${props.userImage})`,
//                       backgroundSize: "100% 100%",
//                     }}
//                   />

//                   <div className="flex flex-col">
//                     <div className="w-full flex gap-[6px] items-center">
//                       <p className="font-[600]">{props.userId}</p>{" "}
//                       <div>
//                         <MdVerified />
//                       </div>
//                     </div>
//                     <div className=" text-[#040D12] text-xs font-[600] ">
//                       {props.postDesc}
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="w-full h-[250px] mt-2"
//                   style={{
//                     backgroundImage: `url(${props.content})`,
//                     backgroundSize: "100% 100%",
//                   }}
//                 />
//                 <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
//                   <div className="w-fit flex gap-4 text-[#040D12] ">
//                     {" "}
//                     <motion.div
//                       onTap={() => setLike("like")}
//                       className=" hover:cursor-pointer"
//                     >
//                       {like === "like" ? (
//                         <motion.div
//                           initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
//                           animate={{
//                             scale: [3, 1],
//                             opacity: 1,
//                             x: [100, -300, 0],
//                             y: [-100, 400, 0],
//                           }}
//                           transition={{
//                             duration: 1,
//                             type: "spring",
//                             stiffness: 200,
//                           }}
//                           onClick={() => setLike("")}
//                           className="text-red-500"
//                         >
//                           <FaHeart />
//                         </motion.div>
//                       ) : (
//                         <div>
//                           {" "}
//                           <FaRegHeart />
//                         </div>
//                       )}
//                     </motion.div>{" "}
//                     <div className=" hover:cursor-pointer">
//                       <BiComment />
//                     </div>
//                   </div>
//                   <motion.div
//                     onTap={() => setBookmark("bookmark")}
//                     className=" hover:cursor-pointer"
//                   >
//                     {bookmark === "bookmark" ? (
//                       <motion.div
//                         initial={{ scale: 0, opacity: 0, rotateY: 360 }}
//                         animate={{
//                           scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
//                           opacity: 1,
//                           rotateY: [360, 180, 95, 45, 15, 0],
//                         }}
//                         transition={{
//                           duration: 3,
//                           type: "spring",
//                           stiffness: 100,
//                         }}
//                         onClick={() => setBookmark("")}
//                         className="text-[#040D12]"
//                       >
//                         <MdBookmarkAdd />
//                       </motion.div>
//                     ) : (
//                       <div>
//                         {" "}
//                         <MdOutlineBookmarkAdd />
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//                 <div className="w-full my-2 text-[#040D12] ">
//                   {props.likesCount} likes
//                 </div>

//                 <div className=" w-full min-h-[40px] max-h-[76px] overflow-hidden mt-2  ">
//                   <div className="w-full h-[50px]">
//                     <p className={styles.box + " text-[#040D12]/80"}>
//                       <strong
//                         className={styles.strong + " text-[#040D12] font-bold"}
//                       >
//                         {props.userId}
//                       </strong>

//                       {props.post}
//                     </p>
//                   </div>
//                 </div>

//                 {typeof props.comments !== "undefined" ? (
//                   <div className={`w-full h-[200px] overflow-y-scroll `}>
//                     {props.comments &&
//                       props.comments?.map((comment, index) => (
//                         <div className="flex justify-between mt-4 " key={index}>
//                           <p className={" text-[#040D12]/80 "}>
//                             {" "}
//                             <strong
//                               className={
//                                 styles.strong + " text-[#040D12] font-bold"
//                               }
//                             >
//                               {comment.userId}
//                             </strong>
//                             {comment.comment}
//                           </p>
//                         </div>
//                       ))}
//                   </div>
//                 ) : (
//                   ""
//                 )}

//                 <input
//                   placeholder="add your comment "
//                   type="text"
//                   className="bg-transparent border-b-[1px] border-b-bg30 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
//                 />
//               </section>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }
//   //   md
//   if (screenWidth >= 768 && screenWidth <= 1023) {
//     return (
//       <div className="w-screen h-screen fixed left-0 transparent">
//         <motion.div
//           ref={blanketRef}
//           initial={{
//             height: "100px",
//             width: "100px",
//             backgroundColor: "#36B5B0",
//             zIndex: "20",
//           }}
//           whileInView={{
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(245, 245, 245, 0.2)",
//           }}
//           className="fixed top-0 justify-center items-center"
//         >
//           <div
//             className="w-screen h-screen flex justify-center items-center bg-transparent "
//             onClick={handleCloseClick}
//           >
//             <div className=" w-[650px] h-[400px] z-30  bg-white">
//               <div className="w-full h-full flex">
//                 {/* image */}
//                 <div className="w-[50%] h-full ">
//                   <div
//                     style={{
//                       backgroundImage: `url(${props.content})`,
//                       backgroundSize: "100% 100%",
//                     }}
//                     className="w-full h-full"
//                   />
//                 </div>
//                 {/* comment section */}
//                 <div className="w-[50%] h-full bg-white">
//                   <div className="w-full h-full">
//                     <section className="w-full h-full overflow-y-scroll  flex flex-col bg-gray-50 text-[#040D12] mt-2 select-none px-2 rounded-md  ">
//                       <div className="w-full h-[50px] flex items-center gap-4">
//                         <div
//                           className="w-[50px] h-[50px] rounded-full border-[1px] border-[#040D12]"
//                           style={{
//                             backgroundImage: `url(${props.userImage})`,
//                             backgroundSize: "100% 100%",
//                           }}
//                         />

//                         <div className="flex flex-col">
//                           <div className="w-full flex gap-[6px] items-center">
//                             <p className="font-[600]">{props.userId}</p>{" "}
//                             <div>
//                               <MdVerified />
//                             </div>
//                           </div>
//                           <div className=" text-[#040D12] text-xs font-[600] ">
//                             {props.postDesc}
//                           </div>
//                         </div>
//                       </div>

//                       <div className=" w-full min-h-[40px] mb-2 mt-2  ">
//                         <div className="w-full h-[50px]">
//                           <p className={" text-[#040D12]/80"}>
//                             <strong
//                               className={
//                                 styles.strong + " text-[#040D12] font-bold"
//                               }
//                             >
//                               {props.userId}
//                             </strong>

//                             {props.post}
//                           </p>
//                         </div>
//                       </div>

//                       {typeof props.comments !== "undefined" ? (
//                         <div className={`w-full h-[200px] overflow-y-scroll `}>
//                           {props.comments &&
//                             props.comments?.map((comment, index) => (
//                               <div
//                                 className="flex justify-between mt-4 "
//                                 key={index}
//                               >
//                                 <p className={" text-[#040D12]/80 "}>
//                                   {" "}
//                                   <strong
//                                     className={
//                                       styles.strong +
//                                       " text-[#040D12] font-bold"
//                                     }
//                                   >
//                                     {comment.userId}
//                                   </strong>
//                                   {comment.comment}
//                                 </p>
//                               </div>
//                             ))}
//                         </div>
//                       ) : (
//                         <div className="w-full h-[200px] ">0 comments</div>
//                       )}
//                       <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
//                         <div className="w-fit flex gap-4 text-[#040D12] ">
//                           {" "}
//                           <motion.div
//                             onTap={() => setLike("like")}
//                             className=" hover:cursor-pointer"
//                           >
//                             {like === "like" ? (
//                               <motion.div
//                                 initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
//                                 animate={{
//                                   scale: [3, 1],
//                                   opacity: 1,
//                                   x: [100, -300, 0],
//                                   y: [-100, 400, 0],
//                                 }}
//                                 transition={{
//                                   duration: 1,
//                                   type: "spring",
//                                   stiffness: 200,
//                                 }}
//                                 onClick={() => setLike("")}
//                                 className="text-red-500"
//                               >
//                                 <FaHeart />
//                               </motion.div>
//                             ) : (
//                               <div>
//                                 {" "}
//                                 <FaRegHeart />
//                               </div>
//                             )}
//                           </motion.div>{" "}
//                           <div className=" hover:cursor-pointer">
//                             <BiComment />
//                           </div>
//                         </div>
//                         <motion.div
//                           onTap={() => setBookmark("bookmark")}
//                           className=" hover:cursor-pointer"
//                         >
//                           {bookmark === "bookmark" ? (
//                             <motion.div
//                               initial={{ scale: 0, opacity: 0, rotateY: 360 }}
//                               animate={{
//                                 scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
//                                 opacity: 1,
//                                 rotateY: [360, 180, 95, 45, 15, 0],
//                               }}
//                               transition={{
//                                 duration: 3,
//                                 type: "spring",
//                                 stiffness: 100,
//                               }}
//                               onClick={() => setBookmark("")}
//                               className="text-[#040D12]"
//                             >
//                               <MdBookmarkAdd />
//                             </motion.div>
//                           ) : (
//                             <div>
//                               {" "}
//                               <MdOutlineBookmarkAdd />
//                             </div>
//                           )}
//                         </motion.div>
//                       </div>
//                       <div className="w-full my-2 text-[#040D12] ">
//                         {props.likesCount} likes
//                       </div>
//                       <input
//                         placeholder="add your comment "
//                         type="text"
//                         className="bg-transparent border-b-[1px] border-b-bg30 py-2 px-4 mb-2 placeholder-bg30/50 outline-none"
//                       />
//                     </section>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }
//   //   xl
//   if (screenWidth >= 1024 && screenWidth <= 1279) {
//     return (
//       <div className="w-screen h-screen fixed left-0 transparent">
//         <motion.div
//           ref={blanketRef}
//           initial={{
//             height: "100px",
//             width: "100px",
//             backgroundColor: "#36B5B0",
//             zIndex: "20",
//           }}
//           whileInView={{
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(245, 245, 245, 0.2)",
//           }}
//           className="fixed top-0 justify-center items-center"
//         >
//           <div
//             className="w-screen h-screen flex justify-center items-center bg-transparent z-30"
//             onClick={handleCloseClick}
//           >
//             <div className=" h-[900px] w-[800px] bg-green-500"></div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }
//   //   xl
//   if (screenWidth > 1280) {
//     return (
//       <div className="w-screen h-screen fixed left-0 transparent">
//         <motion.div
//           ref={blanketRef}
//           initial={{
//             rotateY: 0,
//             height: "100px",
//             width: "100px",
//             backgroundColor: "#36B5B0",
//             zIndex: "100",
//           }}
//           whileInView={{
//             rotateY: [25, 0],
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(245, 245, 245, 0.2)",
//           }}
//           transition={{ duration: 2, type: "spring", stiffness: 200 }}
//           className="flex justify-center items-center"
//         >
//           <div
//             className="w-screen h-screen flex justify-center items-center bg-transparent"
//             onClick={handleCloseClick}
//           >
//             <div className=" h-[90vh] w-[90vw] bg-green-500"></div>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }
// }

// "use client";
// import { IoIosArrowRoundDown } from "react-icons/io";
// import { MdVerified } from "react-icons/md";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { BiComment, BiSolidComment } from "react-icons/bi";
// import { MdOutlineBookmarkAdd, MdBookmarkAdd } from "react-icons/md";
// import { motion } from "framer-motion";
// import styles from "./post.module.css";
// import { useEffect, useRef, useState } from "react";

// export default function Post({ props }: { props: Post }) {
//   const [like, setLike] = useState<Card>("");
//   const [bookmark, setBookmark] = useState<Card>("");
//   const [expands, setExpands] = useState(false);
//   const [postLine, setPostLine] = useState(0);
//   const paragraf = useRef<HTMLParagraphElement>(null);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // @ts-ignore
//       setPostLine(paragraf.current?.clientHeight);
//     }
//   }, []);
//   console.log("dshkhdhsdklhlksdhf", postLine, props.postId);

//   if (expands) {
//     return (
//       <motion.div
//         ref={paragraf}
//         initial={{
//           height: "100px",
//           width: "100px",
//           backgroundColor: "#36B5B0",
//           zIndex: "100",
//         }}
//         whileInView={{
//           width: "100vw",
//           height: "100vh",
//           backgroundColor: "rgba(245, 245, 245, 0.2)",

//           position: "fixed",
//           z: 50,
//           left: 0,
//         }}
//         // className="w-screen h-screen fixed z-50  left-0"
//         transition={{ duration: 2, type: "spring", stiffness: 100 }}
//         onClick={() => setExpands((prev) => !prev)}
//       >
//         <motion.div
//           whileInView={{
//             width: "500px",
//             height: "650px",
//             backgroundColor: "wheat",
//             z: 60,
//           }}
//         ></motion.div>
//       </motion.div>
//     );
//   } else {
//     return (
//       <section className="w-[400px] min-h-[550px] sm:w-[350px] flex flex-col bg-bg30/50 mt-4 select-none px-4 py-2 rounded-md text-gray-50 ">
//         <div className="w-full h-[50px] flex items-center gap-4">
//           <div
//             className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-50"
//             style={{
//               backgroundImage: `url(${props.userImage})`,
//               backgroundSize: "100% 100%",
//             }}
//           />

//           <div className="flex flex-col">
//             <div className="w-full flex gap-[6px] items-center">
//               <p className="font-[600]">{props.userId}</p>{" "}
//               <div>
//                 <MdVerified />
//               </div>
//             </div>
//             <div className=" text-[#C8CCCE] text-xs font-[600] ">
//               {props.postDesc}
//             </div>
//           </div>
//         </div>
//         <div
//           className="w-full h-[250px] mt-2"
//           style={{
//             backgroundImage: `url(https://picsum.photos/200/300)`,
//             backgroundSize: "100% 100%",
//           }}
//         />
//         <div className="w-full h-[32px] text-[24px]  mt-2  flex justify-between">
//           <div className="w-fit flex gap-4 text-gray-50 ">
//             {" "}
//             <motion.div
//               onTap={() => setLike("like")}
//               className=" hover:cursor-pointer"
//             >
//               {like === "like" ? (
//                 <motion.div
//                   initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
//                   animate={{
//                     scale: [3, 1],
//                     opacity: 1,
//                     x: [100, -300, 0],
//                     y: [-100, 400, 0],
//                   }}
//                   transition={{
//                     duration: 1,
//                     type: "spring",
//                     stiffness: 200,
//                   }}
//                   onClick={() => setLike("")}
//                   className="text-[#36B5B0]"
//                 >
//                   <FaHeart />
//                 </motion.div>
//               ) : (
//                 <div>
//                   {" "}
//                   <FaRegHeart />
//                 </div>
//               )}
//             </motion.div>{" "}
//             <div className=" hover:cursor-pointer">
//               <BiComment />
//             </div>
//           </div>
//           <motion.div
//             onTap={() => setBookmark("bookmark")}
//             className=" hover:cursor-pointer"
//           >
//             {bookmark === "bookmark" ? (
//               <motion.div
//                 initial={{ scale: 0, opacity: 0, rotateY: 360 }}
//                 animate={{
//                   scale: [3, 2, , 15, 15, 0.5, 0.8, 1],
//                   opacity: 1,
//                   rotateY: [360, 180, 95, 45, 15, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 onClick={() => setBookmark("")}
//                 className="text-[#36B5B0]"
//               >
//                 <MdBookmarkAdd />
//               </motion.div>
//             ) : (
//               <div>
//                 {" "}
//                 <MdOutlineBookmarkAdd />
//               </div>
//             )}
//           </motion.div>
//         </div>
//         <div className="w-full my-2 text-gray-50">{props.likesCount} likes</div>

//         <div className=" w-full min-h-[40px] max-h-[76px] overflow-hidden mt-2  ">
//           <div className="w-full h-[50px]">
//             <p ref={paragraf} className={styles.box + " text-[#C8CCCE]"}>
//               <strong className={styles.strong + " text-gray-50"}>
//                 {props.userId}
//               </strong>

//               {props.post}
//             </p>
//           </div>
//           {postLine > 42 ? (
//             <div
//               onClick={() => setExpands((prev) => !prev)}
//               className="w-full  h-4 flex text-[#36B5B0] items-center text-[16px] hover:cursor-pointer "
//             >
//               <p className="">expand</p>
//               <IoIosArrowRoundDown />
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         {typeof props.comments !== "undefined" ? (
//           <motion.p
//             initial={{ scale: 1, color: "#C8CCCE", opacity: 0.5 }}
//             whileTap={{ opacity: 1, scale: 0.9, x: -10, color: "#36B5B0" }}
//             transition={{ duration: 1 }}
//             className="w-full text-[#C8CCCE]/50 my-2 hover:cursor-pointer"
//             onClick={() => setExpands((prev) => !prev)}
//           >
//             load more comments...
//           </motion.p>
//         ) : (
//           <motion.p className="w-full text-[#C8CCCE]/50 my-2 hover:cursor-pointer">
//             0 comment
//           </motion.p>
//         )}

//         {typeof props.comments !== "undefined" ? (
//           <div className={`w-full h-[80px] overflow-hidden `}>
//             {props.comments &&
//               props.comments?.map((comment, index) => (
//                 <div className="flex justify-between " key={index}>
//                   <p className={" text-[#C8CCCE]  "}>
//                     {" "}
//                     <strong className={styles.strong + " text-gray-50"}>
//                       {comment.userId}
//                     </strong>
//                     {comment.comment}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         ) : (
//           ""
//         )}

//         <input
//           placeholder="add your comment "
//           type="text"
//           className="bg-transparent border-b-[1px] border-b-bg30 py-2 px-4 mb-2 placeholder-[#C8CCCE]/50 outline-none"
//         />
//       </section>
//     );
//   }
// }
