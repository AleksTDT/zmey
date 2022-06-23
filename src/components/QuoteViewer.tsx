import { Component, createSignal } from "solid-js";

import { allQuotes } from "../data/quotes";

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
  setInterval(chageQuote, 4 * 1000);

  return (
    <article class="quote">
      <p>{quote()[pickedLanguage].quote}</p>
      <p>"{quote()[pickedLanguage].source}"</p>
    </article>
  );
};

export default Quote;
