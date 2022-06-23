import { Quote } from "./../components/QuoteViewer";
import { Translatable } from "../abstractions/Translatable";

export const allQuotes: Translatable<Quote>[] = [
  {
    bg: { quote: "Добрите хора не се нуждаят от закони, за да се държат правилно, а лошите винаги ще намерят как да ги заобиколят.", source: "Платон" },
  },
  {
    bg: { quote: "Дребните цели създават дребни личности.", source: "Платон" },
  },
  {
    bg: { quote: "Не притуряй към огъня огън.", source: "Платон" },
  },
  {
    bg: { quote: "Само мъртвите са виждали края на войната.", source: "Платон" },
  },
];
