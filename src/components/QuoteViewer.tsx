import { Component, createSignal } from "solid-js";

import { allQuotes } from "../data/quotes";
import { svgs } from "../assets/svgs";

export interface Quote {
  quote: string;
  source: string;
  tag?: string[];
}

const pickedLanguage = "bg";
const Quote: Component = () => {
  let quoteId = 0;
  const [quote, setQuote] = createSignal(allQuotes[quoteId]);
  const chageQuote = () => {
    quoteId++;
    setQuote(allQuotes[quoteId % allQuotes.length]);
  };
  setInterval(chageQuote, 40 * 1000);

  return (
    <blockquote class="quote">
      {svgs.quote}
      <p>{quote()[pickedLanguage].quote}</p>
      <footer>"{quote()[pickedLanguage].source}"</footer>
    </blockquote>
  );
};

export default Quote;
