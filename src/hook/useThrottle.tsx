"use client";

interface ThrottledOnChangeProps {
  delay: number;
  onChange: () => void;
}
// import { useRef } from "react";

// const useThrottle = (cb: () => void, delay = 1000) => {
//   const lastRun = useRef(Date.now());
//   return () => {
//     if (Date.now() - lastRun.current >= delay) {
//       cb();
//       lastRun.current = Date.now();
//     }
//   };
// };

// export default useThrottle;
