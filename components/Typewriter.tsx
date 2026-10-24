"use client";

import { useEffect, useState } from "react";

// Types each word out, pauses, deletes it, then moves to the next.
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  // Start with the first word already typed so it's there before JS runs.
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 40 : 80;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="typewriter" aria-label={words[0]}>
      {text}
      <span className="caret" aria-hidden />
    </span>
  );
}
