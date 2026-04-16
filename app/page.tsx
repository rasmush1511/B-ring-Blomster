import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Historie from "@/components/sections/Historie";
import SæsonGrid from "@/components/sections/SæsonGrid";
import PraktiskInfo from "@/components/sections/PraktiskInfo";
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
      <Hero />
      <Historie />
      <SæsonGrid />
      <PraktiskInfo />
      <FacebookFeed />
    </>
  );
}
