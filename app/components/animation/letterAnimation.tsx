"use client";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface TypewriterHTMLProps {
  html: string;
  msPerChar?: number;
  loop?: boolean;
  threshold?: number;
}

export default function TypewriterHTML({
  html,
  msPerChar = 40,
  // loop = false,
  threshold = 0.1,
}: TypewriterHTMLProps) {
  const [charsShown, setCharsShown] = useState(0);
  const finishedRef = useRef(false);

  // inView hook for scroll
  const { ref, inView } = useInView({
    triggerOnce: false, // now repeatable
    threshold,
  });

  // Parse HTML
  const parsedBody = useMemo(() => {
    if (!html || typeof window === "undefined") return null;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body;
  }, [html]);

  // Collect text nodes
  const textNodes = useMemo(() => {
    if (!parsedBody) return [];
    const list: string[] = [];
    const walk = (node: ChildNode) => {
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          list.push(child.nodeValue || "");
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(parsedBody);
    return list;
  }, [parsedBody]);

  const totalChars = useMemo(
    () => textNodes.reduce((s, t) => s + t.length, 0),
    [textNodes]
  );

  // Typing effect
  useEffect(() => {
    if (!parsedBody || totalChars === 0) return;

    if (inView) {
      finishedRef.current = false;
      setCharsShown(0);

      const step = () => {
        setCharsShown((prev) => {
          const next = prev + 1;
          if (next >= totalChars) {
            finishedRef.current = true;
            return prev; // stop increment
          }
          return next;
        });
      };

      const interval = setInterval(step, Math.max(6, msPerChar));
      return () => clearInterval(interval);
    }
  }, [inView, parsedBody, totalChars, msPerChar]);

  // Convert nodes to React elements
  let consumedSoFar = 0;
  let globalKey = 0;
  const nodeToReact = (node: ChildNode): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      const full = node.nodeValue || "";
      const remaining = Math.max(0, charsShown - consumedSoFar);
      const shown = Math.max(0, Math.min(full.length, remaining));
      consumedSoFar += full.length;
      return full.slice(0, shown);
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element; // ✅ TypeScript ko bataye ke ye Element hai
      const tag = el.nodeName.toLowerCase();

      // Attributes collect karna
      const props: { [key: string]: any } = {};
      for (let i = 0; i < el.attributes.length; i++) {
        const a = el.attributes[i];
        props[a.name] = a.value;
      }

      props.key = `n-${globalKey++}`;

      // Children ko recursively convert karna
      const children = Array.from(el.childNodes).map((c) => nodeToReact(c));
      return React.createElement(tag, props, children.length ? children : null);
    }

    return null;
  };

  const rendered = useMemo(() => {
    if (!parsedBody) return null;
    consumedSoFar = 0;
    globalKey = 0;
    return Array.from(parsedBody.childNodes).map((c) => nodeToReact(c));
  }, [parsedBody, charsShown]);

  return (
    <div ref={ref} aria-hidden={false}>
      {rendered}
      <span
        aria-hidden
        style={{
          display: finishedRef.current ? "none" : "inline-block",
          marginLeft: 2,
        }}
      />
    </div>
  );
}
