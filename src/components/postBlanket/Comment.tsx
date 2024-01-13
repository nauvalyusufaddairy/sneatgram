"use client";

import { FaRegHeart, FaHeart } from "react-icons/fa";

import { motion } from "framer-motion";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import RepliedComment from "./RepliedComment";

export default function Comment({ props }: { props: Comments }) {
  const [commentLikes, setCommentLikes] = useState(false);
  const [showComment, setShowComment] = useState(false);
  return (
    <div>
      <div className="w-full flex gap-2  mt-4 items-start">
        <div
          className="w-[50px] h-[50px] md:w-[32px] md:h-[32px] sm:w-[32px] sm:h-[28px]  rounded-full border-[1px] border-[#040D12]"
          style={{
            backgroundImage: `url(${props.replierImage})`,
            backgroundSize: "100% 100%",
          }}
        />
        {/* replier user id */}
        <div className="text-[#040D12] font-[600] w-[325px] md:w-[300px] sm:w-[300px]  text-base sm:text-sm">
          <p>
            {props.userId}
            <span className="ml-2 text-[#040D12]/80 font-[400]">
              {props.comment}
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
      <div className="w-full h-[32px] flex gap-2 text-base text-gray-400 mt-2 ml-[56px] md:ml-[36px] sm:ml-[36px] sm:text-sm md:text-sm ">
        <p>5 likes</p> <p>Reply</p>
      </div>
      {props.replied && (
        <div>
          {showComment == false ? (
            <div
              className="w-full h-[32px]   flex mt-4 ml-[56px] gap-4 items-baseline "
              onClick={() => setShowComment((prv) => !prv)}
            >
              <div className="w-[50px] h-[1.2px] bg-gray-400" />
              <p className="text-gray-400 ">
                {" "}
                view replies {"("}
                {props.replied.length}
                {")"}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {showComment ? (
        <>
          {props.replied &&
            props.replied.map((v, i) => (
              <div
                className="w-full ml-[50px] sm:ml-[36px] md:ml-[36px] "
                key={i}
              >
                <RepliedComment props={v} key={i} />
              </div>
            ))}

          <div
            className="w-full h-[32px]   flex mt-4 ml-[56px] gap-4 items-baseline "
            onClick={() => setShowComment((prv) => !prv)}
          >
            <div className="w-[50px] h-[1.2px] bg-gray-400" />
            <p className="text-gray-400 "> hide replies</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

// "use client";

// import { FaRegHeart, FaHeart } from "react-icons/fa";

// import { motion } from "framer-motion";

// import React, {
//   Dispatch,
//   SetStateAction,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// export default function Comment({ props }: { props: Comments }) {
//   const [commentLikes, setCommentLikes] = useState(false);
//   return (
//     <div>
//       <div className="w-full flex gap-2  mt-4 items-start">
//         <div
//           className="w-[50px] h-[50px] md:w-[32px] md:h-[32px] sm:w-[32px] sm:h-[32px]  rounded-full border-[1px] border-[#040D12]"
//           style={{
//             backgroundImage: `url(${props.replierImage})`,
//             backgroundSize: "100% 100%",
//           }}
//         />
//         {/* replier user id */}
//         <div className="text-[#040D12] font-[600] w-[325px] md:w-[300px]  text-base sm:text-sm">
//           <p>
//             {props.userId}
//             <span className="ml-2 text-[#040D12]/80 font-[400]">
//               {props.comment}
//             </span>
//           </p>
//         </div>
//         <div
//           className="w-[24px] mt-2"
//           onClick={() => setCommentLikes((prev) => !prev)}
//         >
//           {/* like at comment  */}
//           {commentLikes ? (
//             <motion.div
//               className="text-red-500"
//               initial={{
//                 scale: 0,
//                 opacity: 0,
//                 rotateY: 0,
//               }}
//               whileInView={{
//                 scale: [2, 3, 1],
//                 opacity: 1,
//                 rotateY: [45, 15, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 type: "spring",
//                 stiffness: 200,
//               }}
//             >
//               <FaHeart />
//             </motion.div>
//           ) : (
//             <FaRegHeart />
//           )}
//         </div>
//       </div>
//       <div className="w-full h-[32px] flex gap-2 text-base text-gray-400 mt-2 ml-[56px] md:ml-[36px] sm:ml-[36px] sm:text-sm md:text-sm ">
//         <p>5 likes</p> <p>Reply</p>
//       </div>
//     </div>
//   );
// }
