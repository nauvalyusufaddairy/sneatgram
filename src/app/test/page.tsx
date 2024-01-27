"use client";

import { getEmail } from "@/actions/checkCredentialExist";
import { getUserByEmail } from "@/data/users";
import useDebounce from "@/hook/useDebounce";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

export default function Test() {
  const [text, setText] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setRenderCount((prve) => prve + 1);
  }, []);
  const handleChange = (e: string) => {
    getEmail(e).then((v) => {
      console.log("johs", v);
      if (v.success) {
        setStatus("email is available");
      } else {
        setStatus("email is already in use");
      }
    });
  };

  const debouncedText = debounce((str: string) => handleChange(str), 1000);

  return (
    <div className="h-[500vh]">
      <input
        type="text"
        placeholder="iput"
        onChange={(e) => debouncedText(e.target.value)}
      />
      <p>normal text : {text}</p>
      <p>debounced text : {}</p>

      <p>render count : {renderCount}</p>
      <p>email status : {status}</p>
      <p className="text-red-500">{status}</p>
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";

// export default function Test() {
//   const [debounceText, setDebounceText] = useState("");
//   const [throttleText, setThrottleText] = useState("");
//   const [text, setText] = useState("");
//   const [renderCount, setRenderCount] = useState(0);
//   //  debounce function
//   const debounce = (cb: Function, delay = 1000) => {
//     let timeOut: NodeJS.Timeout;
//     return (...args: any[]) => {
//       clearTimeout(timeOut);
//       console.log("args ", args);
//       timeOut = setTimeout(() => cb(...args), delay);
//     };
//   };

//   // to update debounced text value
//   const updateDebounceText = debounce(
//     (v: React.ChangeEvent<HTMLInputElement>) => {
//       setDebounceText(v.target.value);
//     }
//   );

//   //   Throttle function

//   //   const throttle = (cb: Function, delay = 1000) => {
//   //     let shouldWait = false;
//   //     let waitingArgs: any = null;

//   //     const timeoutFunctions = () => {
//   //       if (waitingArgs === null) {
//   //         shouldWait = false;
//   //       } else {
//   //         waitingArgs = null;
//   //         setTimeout(timeoutFunctions, delay);
//   //       }
//   //     };

//   //     return (...args: any[]) => {
//   //       console.log("ARGS NI GUYS SENGGOL DONG", args);
//   //       if (shouldWait) {
//   //         waitingArgs = args;
//   //         return;
//   //       }
//   //       cb(...args);
//   //       shouldWait = true;
//   //       setInterval(() => timeoutFunctions, delay);
//   //     };
//   //   };

//   const throttle = (cb: Function, delay = 1000) => {
//     // let wait = false;
//     // let storageArgs: any[] | null = null;
//     // const checkStorage = () => {
//     //   if (checkStorage == null) {
//     //     wait = false;
//     //   } else {
//     //     cb(...(storageArgs as any[]));
//     //     storageArgs = null;
//     //     setTimeout(() => storageArgs, delay);
//     //   }
//     // };
//     // return (...args: any[]) => {
//     //   if (wait) {
//     //     storageArgs = args;
//     //     return;
//     //   }
//     //   cb(...args);
//     //   wait = true;
//     //   setTimeout(() => {
//     //     checkStorage;
//     //   }, delay);
//     // };

//     let timeout: NodeJS.Timeout;
//     let wait = false;

//     return (...args: any[]) => {
//       timeout = setTimeout(() => cb(...args), delay);
//     };
//   };

//   // to  update throttled text value
//   const updateThrottleText = throttle(
//     (v: React.ChangeEvent<HTMLInputElement>) => {
//       setThrottleText(v.target.value);
//     }
//   );

//   useEffect(() => {
//     setRenderCount((prev) => prev + 1);
//   }, []);
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     updateDebounceText(e);
//     updateThrottleText(e);
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => onChange(e)}
//         placeholder="input text"
//       />{" "}
//       <p>
//         render count :{"  "}
//         {renderCount.toString()}
//       </p>
//       <p>
//         default text :{"  "}
//         {text}
//       </p>
//       <p>
//         debounce text : {"  "}
//         {debounceText}
//       </p>
//       <p>
//         throttleText : {"  "}
//         {throttleText}
//       </p>
//     </div>
//   );
// }
