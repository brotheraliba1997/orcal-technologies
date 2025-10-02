"use client";
import { useInView } from "react-intersection-observer";
import TypewriterHTML from "./letterAnimation";

export function MyComponent() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animation sirf ek baar chale
    threshold: 1, // element ka 50% screen me aate hi trigger
  });

  return (
    <div ref={ref} style={{ height: "300px" }}>
      {inView ? (
        <TypewriterHTML
          html={`<h1 class="lg:text-[140px] md:text-8xl  text-[50px] text-white font-bold font-Satoshi ">Loading</h1>`}
        />
      ) : (
        "Scroll to see me"
      )}
    </div>
  );
}
