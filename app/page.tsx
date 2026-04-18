import type { Metadata } from "next";
import HeroSlideshow from "@/components/sections/HeroSlideshow";
import Historie from "@/components/sections/Historie";
import CountUp from "@/components/sections/CountUp";
import FacebookFeed from "@/components/sections/FacebookFeed";

export const metadata: Metadata = {
  title: "Båring Blomster — Selvbetjening på Båring Bakke",
  description:
    "Selvbetjeningsblomsterbutik på toppen af Båring Bakke ved Middelfart. Forårsblomster, sommerplanter, buketter og haveplanter. Betaling med MobilePay. Åbent marts–oktober.",
  openGraph: {
    title: "Båring Blomster — Blomster fra bakken",
    description:
      "Selvbetjeningsblomsterbutik på toppen af Båring Bakke. Forårsblomster, sommerplanter og buketter. Åbent marts–oktober.",
  },
};

export default function Forside() {
  return (
    <>
      <HeroSlideshow />
      <Historie />
      <CountUp />
      <FacebookFeed />
    </>
  );
}
