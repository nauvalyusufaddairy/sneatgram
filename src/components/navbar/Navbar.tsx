"use client";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillSecurityScan,
  AiOutlineSecurityScan,
  AiFillCompass,
  AiOutlineCompass,
} from "react-icons/ai";
import { BsCameraReelsFill, BsCameraReels } from "react-icons/bs";
import { IoPaperPlane } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import NavbarSearch from "./NavbarSearch";
import NavbarNotification from "./NavbarNotification";

export default function Navbar() {
  const [whileHoverEvent, setWhileHoverEvent] = useState<WhileEvent>("");
  const [whileTapEvent, setWhileTapEvent] = useState<WhileEvent>("home");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <LgXlMd
        whileHoverEvent={whileHoverEvent}
        setWhileHoverEvent={setWhileHoverEvent}
        whileTapEvent={whileTapEvent}
        setWhileTapEvent={setWhileTapEvent}
      />
      <Md
        whileHoverEvent={whileHoverEvent}
        setWhileHoverEvent={setWhileHoverEvent}
        whileTapEvent={whileTapEvent}
        setWhileTapEvent={setWhileTapEvent}
      />
      <Sm
        whileHoverEvent={whileHoverEvent}
        setWhileHoverEvent={setWhileHoverEvent}
        whileTapEvent={whileTapEvent}
        setWhileTapEvent={setWhileTapEvent}
      />
    </div>
  );
}
function Sm({
  whileHoverEvent,
  setWhileHoverEvent,
  whileTapEvent,
  setWhileTapEvent,
}: {
  whileHoverEvent: any;
  setWhileHoverEvent: any;
  whileTapEvent: any;
  setWhileTapEvent: any;
}) {
  return (
    <div className="hidden sm:block">
      <div className="fixed w-screen h-[60px] bottom-0  border-t-[1px] border-t-bg30 bg-[#040D12]  ">
        <div className="w-full h-full flex  items-center justify-center ">
          {/* Home */}
          <motion.div
            onHoverStart={() => setWhileHoverEvent("home")}
            onHoverEnd={() => setWhileHoverEvent("")}
            onTapStart={() => setWhileTapEvent("home")}
            whileHover={{ cursor: "pointer" }}
            className="w-[50px] h-[40px] flex justify-center items-center  "
          >
            {/* onHover  */}
            {whileTapEvent === "home" ? (
              ""
            ) : (
              <div className="w-full h-full">
                {" "}
                {whileHoverEvent === "home" ? (
                  <div
                    className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                  >
                    <p className="text-2xl">
                      <AiOutlineHome />
                    </p>
                  </div>
                ) : (
                  <div
                    className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                  >
                    <p className="text-2xl">
                      <AiOutlineHome />
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* onClick */}
            {whileTapEvent === "home" ? (
              <div
                className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
              >
                <p className="text-2xl">
                  <AiFillHome />
                </p>
              </div>
            ) : (
              ""
            )}
          </motion.div>

          {/* expolore */}
          <motion.div
            onHoverStart={() => setWhileHoverEvent("explore")}
            onHoverEnd={() => setWhileHoverEvent("")}
            onTapStart={() => setWhileTapEvent("explore")}
            whileHover={{ cursor: "pointer" }}
            className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
          >
            {/* onHover  */}
            {whileTapEvent === "explore" ? (
              ""
            ) : (
              <div className="w-full h-full">
                {" "}
                {whileHoverEvent === "explore" ? (
                  <div
                    className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                  >
                    <p className="text-2xl">
                      <AiOutlineCompass />
                    </p>
                  </div>
                ) : (
                  <div
                    className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                  >
                    <p className="text-2xl">
                      <AiOutlineCompass />
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* onClick */}
            {whileTapEvent === "explore" ? (
              <div
                className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
              >
                <p className="text-2xl">
                  <AiFillCompass />
                </p>
              </div>
            ) : (
              ""
            )}
          </motion.div>
          {/* Reels */}
          <motion.div
            onHoverStart={() => setWhileHoverEvent("reels")}
            onHoverEnd={() => setWhileHoverEvent("")}
            onTapStart={() => setWhileTapEvent("reels")}
            whileHover={{ cursor: "pointer" }}
            className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
          >
            {/* onHover  */}
            {whileTapEvent === "reels" ? (
              ""
            ) : (
              <div className="w-full h-full">
                {" "}
                {whileHoverEvent === "reels" ? (
                  <div
                    className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                  >
                    <p className="text-2xl">
                      <BsCameraReels />
                    </p>
                  </div>
                ) : (
                  <div
                    className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                  >
                    <p className="text-2xl">
                      <BsCameraReels />
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* onClick */}
            {whileTapEvent === "reels" ? (
              <div
                className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
              >
                <p className="text-2xl">
                  <BsCameraReelsFill />
                </p>
              </div>
            ) : (
              ""
            )}
          </motion.div>
          {/* Message */}
          <motion.div
            onHoverStart={() => setWhileHoverEvent("messages")}
            onHoverEnd={() => setWhileHoverEvent("")}
            onTapStart={() => setWhileTapEvent("messages")}
            whileHover={{ cursor: "pointer" }}
            className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
          >
            {/* onHover  */}
            {whileTapEvent === "messages" ? (
              ""
            ) : (
              <div className="w-full h-full">
                {" "}
                {whileHoverEvent === "messages" ? (
                  <div
                    className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                  >
                    <p className="text-2xl">
                      <IoPaperPlaneOutline />
                    </p>
                  </div>
                ) : (
                  <div
                    className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                  >
                    <p className="text-2xl">
                      <IoPaperPlaneOutline />
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* onClick */}
            {whileTapEvent === "messages" ? (
              <div
                className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
              >
                <p className="text-2xl">
                  <IoPaperPlane />
                </p>
              </div>
            ) : (
              ""
            )}
          </motion.div>

          {/* Create */}
          <motion.div
            onHoverStart={() => setWhileHoverEvent("create")}
            onHoverEnd={() => setWhileHoverEvent("")}
            onTapStart={() => setWhileTapEvent("create")}
            whileHover={{ cursor: "pointer" }}
            className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
          >
            {/* onHover  */}
            {whileTapEvent === "create" ? (
              ""
            ) : (
              <div className="w-full h-full">
                {" "}
                {whileHoverEvent === "create" ? (
                  <div
                    className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                  >
                    <p className="text-2xl">
                      <IoIosAddCircleOutline />
                    </p>
                  </div>
                ) : (
                  <div
                    className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                  >
                    <p className="text-2xl">
                      <IoIosAddCircleOutline />
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* onClick */}
            {whileTapEvent === "create" ? (
              <div
                className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
              >
                <p className="text-2xl">
                  <IoIosAddCircle />
                </p>
              </div>
            ) : (
              ""
            )}
          </motion.div>
          {/* Profile */}
          <motion.div
            onHoverStart={() => setWhileHoverEvent("profile")}
            onHoverEnd={() => setWhileHoverEvent("")}
            onTapStart={() => setWhileTapEvent("profile")}
            whileHover={{ cursor: "pointer" }}
            className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
          >
            {/* onHover  */}
            {whileTapEvent === "profile" ? (
              ""
            ) : (
              <div className="w-full h-full">
                {" "}
                {whileHoverEvent === "profile" ? (
                  <div
                    className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                  >
                    <p className="text-2xl rounded-full bg-white">
                      <IoIosAddCircleOutline />
                    </p>
                  </div>
                ) : (
                  <div
                    className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                  >
                    <p className="text-2xl rounded-full bg-white">
                      <IoIosAddCircleOutline />
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* onClick */}
            {whileTapEvent === "profile" ? (
              <div
                className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
              >
                <p className="text-2xl rounded-full bg-white">
                  <IoIosAddCircleOutline />
                </p>
              </div>
            ) : (
              ""
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
function Md({
  whileHoverEvent,
  setWhileHoverEvent,
  whileTapEvent,
  setWhileTapEvent,
}: {
  whileHoverEvent: any;
  setWhileHoverEvent: any;
  whileTapEvent: any;
  setWhileTapEvent: any;
}) {
  type Selectors = "search" | "notification" | "";
  const [expandsPanel, setexpandsPanel] = useState(false);
  const [selector, setSelector] = useState<Selectors>("");

  const handleExpandPanel = (selector: Selectors) => {
    setexpandsPanel((prev) => !prev);
    setSelector(selector);
  };
  return (
    <div className="hidden md:block">
      {expandsPanel && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 200 }}
          className="fixed  top-0 left-0 w-[400px] z-50 h-screen bg-[#11191E] text-gray-50 "
        >
          {selector === "search" && (
            <div className="ml-[60px] mt-4 px-6 flex flex-col gap-4">
              <p className="text-xl text-gray-50 font-bold ">Search</p>
              <NavbarSearch />
            </div>
          )}
          {selector === "notification" && (
            <div className="ml-[60px] mt-4 px-6 flex flex-col gap-4">
              <p className="text-xl text-gray-50 font-bold ">Search</p>
              <NavbarNotification />
            </div>
          )}
        </motion.div>
      )}

      <div className="fixed w-[60px] h-screen  top-0 left-0 border-r-[1px] border-r-bg30 py-[8px] bg-[#040D12] z-50 ">
        <div className="w-full h-full flex flex-col">
          <div className="h-[50px] w-full flex items-center justify-center  text-3xl font-burtons font-bold text-[#36B5B0]">
            S
          </div>
          <div className="w-full mt-4 flex flex-col items-center ">
            {/* Home */}
            <motion.div
              onHoverStart={() => setWhileHoverEvent("home")}
              onHoverEnd={() => setWhileHoverEvent("")}
              onTapStart={() => setWhileTapEvent("home")}
              whileHover={{ cursor: "pointer" }}
              className="w-[50px] h-[40px] flex justify-center items-center "
            >
              {/* onHover  */}
              {whileTapEvent === "home" ? (
                ""
              ) : (
                <div className="w-full h-full">
                  {" "}
                  {whileHoverEvent === "home" ? (
                    <div
                      className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                    >
                      <p className="text-xl">
                        <AiOutlineHome />
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                    >
                      <p className="text-xl">
                        <AiOutlineHome />
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* onClick */}
              {whileTapEvent === "home" ? (
                <div
                  className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                >
                  <p className="text-xl">
                    <AiFillHome />
                  </p>
                </div>
              ) : (
                ""
              )}
            </motion.div>
            {/* Search */}
            <motion.div
              onHoverStart={() => setWhileHoverEvent("search")}
              onHoverEnd={() => setWhileHoverEvent("")}
              onTapStart={() => setWhileTapEvent("search")}
              whileHover={{ cursor: "pointer" }}
              className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
              onClick={() => handleExpandPanel("search")}
            >
              {/* onHover  */}
              {whileTapEvent === "search" ? (
                ""
              ) : (
                <div className="w-full h-full">
                  {" "}
                  {whileHoverEvent === "search" ? (
                    <div
                      className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                    >
                      <p className="text-xl">
                        <AiOutlineSecurityScan />
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                    >
                      <p className="text-xl">
                        <AiOutlineSecurityScan />
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* onClick */}
              {whileTapEvent === "search" ? (
                <div
                  className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                >
                  <p className="text-xl">
                    <AiFillSecurityScan />
                  </p>
                </div>
              ) : (
                ""
              )}
            </motion.div>
            {/* expolore */}
            <motion.div
              onHoverStart={() => setWhileHoverEvent("explore")}
              onHoverEnd={() => setWhileHoverEvent("")}
              onTapStart={() => setWhileTapEvent("explore")}
              whileHover={{ cursor: "pointer" }}
              className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
            >
              {/* onHover  */}
              {whileTapEvent === "explore" ? (
                ""
              ) : (
                <div className="w-full h-full">
                  {" "}
                  {whileHoverEvent === "explore" ? (
                    <div
                      className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                    >
                      <p className="text-xl">
                        <AiOutlineCompass />
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                    >
                      <p className="text-xl">
                        <AiOutlineCompass />
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* onClick */}
              {whileTapEvent === "explore" ? (
                <div
                  className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                >
                  <p className="text-xl">
                    <AiFillCompass />
                  </p>
                </div>
              ) : (
                ""
              )}
            </motion.div>
            {/* Reels */}
            <motion.div
              onHoverStart={() => setWhileHoverEvent("reels")}
              onHoverEnd={() => setWhileHoverEvent("")}
              onTapStart={() => setWhileTapEvent("reels")}
              whileHover={{ cursor: "pointer" }}
              className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
            >
              {/* onHover  */}
              {whileTapEvent === "reels" ? (
                ""
              ) : (
                <div className="w-full h-full">
                  {" "}
                  {whileHoverEvent === "reels" ? (
                    <div
                      className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                    >
                      <p className="text-xl">
                        <BsCameraReels />
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                    >
                      <p className="text-xl">
                        <BsCameraReels />
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* onClick */}
              {whileTapEvent === "reels" ? (
                <div
                  className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                >
                  <p className="text-xl">
                    <BsCameraReelsFill />
                  </p>
                </div>
              ) : (
                ""
              )}
            </motion.div>
            {/* Message */}
            <motion.div
              onHoverStart={() => setWhileHoverEvent("messages")}
              onHoverEnd={() => setWhileHoverEvent("")}
              onTapStart={() => setWhileTapEvent("messages")}
              whileHover={{ cursor: "pointer" }}
              className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
            >
              {/* onHover  */}
              {whileTapEvent === "messages" ? (
                ""
              ) : (
                <div className="w-full h-full">
                  {" "}
                  {whileHoverEvent === "messages" ? (
                    <div
                      className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                    >
                      <p className="text-xl">
                        <IoPaperPlaneOutline />
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                    >
                      <p className="text-xl">
                        <IoPaperPlaneOutline />
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* onClick */}
              {whileTapEvent === "messages" ? (
                <div
                  className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                >
                  <p className="text-xl">
                    <IoPaperPlane />
                  </p>
                </div>
              ) : (
                ""
              )}
            </motion.div>
            {/* Create */}
            <motion.div
              onHoverStart={() => setWhileHoverEvent("create")}
              onHoverEnd={() => setWhileHoverEvent("")}
              onTapStart={() => setWhileTapEvent("create")}
              whileHover={{ cursor: "pointer" }}
              className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
            >
              {/* onHover  */}
              {whileTapEvent === "create" ? (
                ""
              ) : (
                <div className="w-full h-full">
                  {" "}
                  {whileHoverEvent === "create" ? (
                    <div
                      className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                    >
                      <p className="text-xl">
                        <IoIosAddCircleOutline />
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                    >
                      <p className="text-xl">
                        <IoIosAddCircleOutline />
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* onClick */}
              {whileTapEvent === "create" ? (
                <div
                  className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                >
                  <p className="text-xl">
                    <IoIosAddCircle />
                  </p>
                </div>
              ) : (
                ""
              )}
            </motion.div>
            {/* Notification */}
            <motion.div
              onHoverStart={() => setWhileHoverEvent("notification")}
              onHoverEnd={() => setWhileHoverEvent("")}
              onTapStart={() => handleExpandPanel("notification")}
              whileHover={{ cursor: "pointer" }}
              className="w-[50px] h-[40px] flex justify-center items-center mt-2 "
            >
              {/* onHover  */}
              {whileTapEvent === "notification" ? (
                ""
              ) : (
                <div className="w-full h-full">
                  {" "}
                  {whileHoverEvent === "notification" ? (
                    <div
                      className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                    >
                      <p className="text-xl">
                        <FaRegBell />
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                    >
                      <p className="text-xl">
                        <FaRegBell />
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* onClick */}
              {whileTapEvent === "notification" ? (
                <div
                  className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                >
                  <p className="text-xl">
                    <FaBell />
                  </p>
                </div>
              ) : (
                ""
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LgXlMd({
  whileHoverEvent,
  setWhileHoverEvent,
  whileTapEvent,
  setWhileTapEvent,
}: {
  whileHoverEvent: any;
  setWhileHoverEvent: any;
  whileTapEvent: any;
  setWhileTapEvent: any;
}) {
  type Selectors = "search" | "notification" | "";
  const [expandsPanel, setexpandsPanel] = useState(false);
  const [selector, setSelector] = useState<Selectors>("");
  const [counter, setCounter] = useState(0);

  const handleExpandPanel = (selector: Selectors) => {
    console.log("expands panel", expandsPanel);

    setSelector(selector);
    setexpandsPanel(!expandsPanel);
  };

  if (expandsPanel) {
    return (
      <div className="">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 200 }}
          className="fixed  top-0 left-0 w-[450px] h-screen bg-[#11191E] text-gray-50 z-50 "
        >
          {/* search panel */}
          {selector === "search" && (
            <div className="ml-[60px] mt-4 px-6 flex flex-col gap-4">
              <p className="text-xl text-gray-50 font-bold ">Search</p>
              <NavbarSearch />
            </div>
          )}
          {/* notification panel */}
          {selector === "notification" && (
            <div className="ml-[60px] mt-4 px-6 flex flex-col gap-4">
              <p className="text-xl text-gray-50 font-bold ">Notifications</p>
              <NavbarNotification />
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0, rotateZ: 90, y: 600 }}
          animate={{ x: 0, opacity: 1, rotateZ: 0, y: 0 }}
          transition={{ duration: 8, type: "spring", stiffness: 200 }}
          className="fixed w-[60px] h-screen  top-0 left-0 border-r-[1px] border-r-bg30 py-[24px] bg-[#040D12] z-50"
        >
          <div className="w-full h-full flex flex-col ">
            <div className="select-none h-[100px] w-full flex items-center justify-center text-3xl font-burtons font-bold text-[#36B5B0]">
              S
            </div>
            <div className="w-full mt-8 flex flex-col items-center ">
              {/* Home */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("home")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("home")}
                whileHover={{ cursor: "pointer" }}
                className="w-[50px] h-[40px] flex justify-center items-center "
              >
                {/* onHover  */}
                {whileTapEvent === "home" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "home" ? (
                      <div
                        className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <AiOutlineHome />
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <AiOutlineHome />
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "home" ? (
                  <div
                    className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <AiFillHome />
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Search */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("search")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("search")}
                whileHover={{ cursor: "pointer" }}
                onClick={() => handleExpandPanel("search")}
                className="w-[50px] h-[50px] flex justify-center items-center mt-2 "
              >
                {/* onHover  */}
                {whileTapEvent === "search" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "search" ? (
                      <div
                        className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <AiOutlineSecurityScan />
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <AiOutlineSecurityScan />
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "search" ? (
                  <div
                    className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <AiFillSecurityScan />
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* expolore */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("explore")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("explore")}
                whileHover={{ cursor: "pointer" }}
                className="w-[50px] h-[50px]  flex justify-center items-center mt-2 "
              >
                {/* onHover  */}
                {whileTapEvent === "explore" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "explore" ? (
                      <div
                        className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <AiOutlineCompass />
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <AiOutlineCompass />
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "explore" ? (
                  <div
                    className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <AiFillCompass />
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Reels */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("reels")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("reels")}
                whileHover={{ cursor: "pointer" }}
                className="w-[50px] h-[50px]  flex justify-center items-center mt-2 "
              >
                {/* onHover  */}
                {whileTapEvent === "reels" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "reels" ? (
                      <div
                        className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <BsCameraReels />
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <BsCameraReels />
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "reels" ? (
                  <div
                    className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <BsCameraReelsFill />
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Message */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("messages")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("messages")}
                whileHover={{ cursor: "pointer" }}
                className="w-[50px] h-[50px] flex justify-center items-center mt-2 "
              >
                {/* onHover  */}
                {whileTapEvent === "messages" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "messages" ? (
                      <div
                        className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <IoPaperPlaneOutline />
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <IoPaperPlaneOutline />
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "messages" ? (
                  <div
                    className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <IoPaperPlane />
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>

              {/* Notification */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("notification")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("notification")}
                whileHover={{ cursor: "pointer" }}
                className="w-[50px] h-[50px]  flex justify-center items-center mt-2 "
                onClick={() => handleExpandPanel("notification")}
              >
                {/* onHover  */}
                {whileTapEvent === "notification" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "notification" ? (
                      <div
                        className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <FaRegBell />
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <FaRegBell />
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "notification" ? (
                  <div
                    className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <FaBell />
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Create */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("create")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("create")}
                whileHover={{ cursor: "pointer" }}
                className="w-[50px] h-[50px] flex justify-center items-center mt-2 "
              >
                {/* onHover  */}
                {whileTapEvent === "create" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "create" ? (
                      <div
                        className={`  h-full w-full flex items-center justify-center gap-6 text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <IoIosAddCircleOutline />
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`flex w-full h-full gap-6 items-center justify-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <IoIosAddCircleOutline />
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "create" ? (
                  <div
                    className={`flex  w-full h-full gap-6 items-center justify-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <IoIosAddCircle />
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className="hidden lg:block xl:block 2xl:block z-50  ">
        <div className="fixed w-[300px] h-screen  top-0 left-0 border-r-[1px] border-r-bg30 px-[24px] py-[24px] bg-[#040D12]  ">
          <div className="w-full h-full flex flex-col">
            <div className=" select-none h-[100px] w-full flex items-center  text-3xl font-burtons font-bold text-[#36B5B0]">
              Sneitgram
            </div>
            <div className="w-full mt-4 flex flex-col ">
              {/* Home */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("home")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("home")}
                whileHover={{ cursor: "pointer" }}
                className="w-full h-[50px] select-none"
              >
                {/* onHover  */}
                {whileTapEvent === "home" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "home" ? (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <AiOutlineHome />
                        </p>
                        <p>Home</p>
                      </div>
                    ) : (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <AiOutlineHome />
                        </p>
                        <p>Home</p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "home" ? (
                  <div
                    className={`flex pl-3 h-full gap-6 items-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <AiFillHome />
                    </p>
                    <p className="select-none">Home</p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>

              {/* Search */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("search")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("search")}
                whileHover={{ cursor: "pointer" }}
                className="w-full h-[50px] mt-2 select-none"
                onClick={() => handleExpandPanel("search")}
              >
                {/* onHover  */}
                {whileTapEvent === "search" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "search" ? (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <AiOutlineSecurityScan />
                        </p>
                        <p>Search</p>
                      </div>
                    ) : (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <AiOutlineSecurityScan />
                        </p>
                        <p>Search</p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "search" ? (
                  <div
                    className={`flex pl-3 h-full gap-6 items-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <AiFillSecurityScan />
                    </p>
                    <p className="select-none">Search</p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Explore */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("explore")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("explore")}
                whileHover={{ cursor: "pointer" }}
                className="w-full h-[50px] mt-2 select-none"
              >
                {/* onHover  */}
                {whileTapEvent === "explore" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "explore" ? (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <AiOutlineCompass />
                        </p>
                        <p>Explore</p>
                      </div>
                    ) : (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <AiOutlineCompass />
                        </p>
                        <p>Explore</p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "explore" ? (
                  <div
                    className={`flex pl-3 h-full gap-6 items-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <AiFillCompass />
                    </p>
                    <p className="select-none">Explore</p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Reeel */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("reels")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("reels")}
                whileHover={{ cursor: "pointer" }}
                className="w-full h-[50px] mt-2 select-none"
              >
                {/* onHover  */}
                {whileTapEvent === "reels" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "reels" ? (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-[18px]">
                          <BsCameraReels />
                        </p>
                        <p>Reels</p>
                      </div>
                    ) : (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px] text-gray-200`}
                      >
                        <p className="text-[18px]">
                          <BsCameraReels />
                        </p>
                        <p>Reels</p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "reels" ? (
                  <div
                    className={`flex pl-3 h-full gap-6 items-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-[18px]">
                      <BsCameraReelsFill />
                    </p>
                    <p className="select-none">Reels</p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Message */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("messages")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("messages")}
                whileHover={{ cursor: "pointer" }}
                className="w-full h-[50px] mt-2 select-none"
              >
                {/* onHover  */}
                {whileTapEvent === "messages" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "messages" ? (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <IoPaperPlaneOutline />
                        </p>
                        <p>Messages</p>
                      </div>
                    ) : (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <IoPaperPlaneOutline />
                        </p>
                        <p>Messages</p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "messages" ? (
                  <div
                    className={`flex pl-3 h-full gap-6 items-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <IoPaperPlane />
                    </p>
                    <p className="select-none">Messages</p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Notification */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("notification")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("notification")}
                whileHover={{ cursor: "pointer" }}
                className="w-full h-[50px] mt-2 select-none"
                onClick={() => handleExpandPanel("notification")}
              >
                {/* onHover  */}
                {whileTapEvent === "notification" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "notification" ? (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <FaRegBell />
                        </p>
                        <p>Notification</p>
                      </div>
                    ) : (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <FaRegBell />
                        </p>
                        <p>Notification</p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "notification" ? (
                  <div
                    className={`flex pl-3 h-full gap-6 items-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <FaBell />
                    </p>
                    <p className="select-none">Notification</p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
              {/* Create */}
              <motion.div
                onHoverStart={() => setWhileHoverEvent("create")}
                onHoverEnd={() => setWhileHoverEvent("")}
                onTapStart={() => setWhileTapEvent("create")}
                whileHover={{ cursor: "pointer" }}
                className="w-full h-[50px] mt-2 select-none"
              >
                {/* onHover  */}
                {whileTapEvent === "create" ? (
                  ""
                ) : (
                  <div className="w-full h-full">
                    {" "}
                    {whileHoverEvent === "create" ? (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px]  text-white  bg-gray-50/5 rounded-md`}
                      >
                        <p className="text-xl">
                          <IoIosAddCircleOutline />
                        </p>
                        <p>Create</p>
                      </div>
                    ) : (
                      <div
                        className={`flex pl-3 h-full gap-6 items-center text-[16px] text-gray-200`}
                      >
                        <p className="text-xl">
                          <IoIosAddCircleOutline />
                        </p>
                        <p>Create</p>
                      </div>
                    )}
                  </div>
                )}

                {/* onClick */}
                {whileTapEvent === "create" ? (
                  <div
                    className={`flex pl-3 h-full gap-6 items-center text-[20px] text-white font-[500]  bg-gray-50/10 rounded-md  `}
                  >
                    <p className="text-xl">
                      <IoIosAddCircle />
                    </p>
                    <p className="select-none">Create</p>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
