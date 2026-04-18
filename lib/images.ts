// Kundens egne billeder — hentet fra /public/billeder/
// Billederne er fotograferet på og ved Båring Blomster

export type BilledEntry = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export const heroBillede: BilledEntry = {
  url: "/billeder/7.jpg",
  alt: "Røde og lyserøde tulipaner i fuldt flor på Båring Blomster",
  width: 1600,
  height: 1067,
};

export const slideshowBilleder: BilledEntry[] = [
  {
    url: "/billeder/7.jpg",
    alt: "Røde og lyserøde tulipaner i solskin",
    width: 1600,
    height: 1067,
  },
  {
    url: "/billeder/8.jpg",
    alt: "Farverige hyacinter — lilla, pink og gul",
    width: 1200,
    height: 900,
  },
  {
    url: "/billeder/3.jpg",
    alt: "Masser af farverige primulaplanter klar til salg",
    width: 1200,
    height: 900,
  },
  {
    url: "/billeder/1.jpg",
    alt: "Hvide forårsblomster med tulipaner i baggrunden",
    width: 1600,
    height: 1067,
  },
  {
    url: "/billeder/11.jpg",
    alt: "Lyserøde azaleablomster i fuldt flor",
    width: 1200,
    height: 900,
  },
  {
    url: "/billeder/forglemmigej.jpg",
    alt: "Blå forglemmigej — Myosotis — i tæt blomstring",
    width: 1200,
    height: 1200,
  },
];

export const kategoriBilleder: Record<string, BilledEntry> = {
  tulipaner: {
    url: "/billeder/7.jpg",
    alt: "Røde og lyserøde tulipaner i Båring Blomsters have",
    width: 1600,
    height: 1067,
  },
  narcisser: {
    url: "/billeder/1.jpg",
    alt: "Hvide forårsblomster med tulipaner i baggrunden",
    width: 1600,
    height: 1067,
  },
  foraarsanemoner: {
    url: "/billeder/4.jpg",
    alt: "Hvide forårsblomster i naturligt dagslys",
    width: 1200,
    height: 900,
  },
  primula: {
    url: "/billeder/3.jpg",
    alt: "Farverige primulaplanter — rød, gul, hvid og lilla",
    width: 1200,
    height: 900,
  },
  stedmoderblomster: {
    url: "/billeder/bellis.jpg",
    alt: "Bellis tusindfrys — hvide daisy-blomster i græsset",
    width: 1200,
    height: 800,
  },
  hyacinter: {
    url: "/billeder/8.jpg",
    alt: "Farverige hyacinter i forårsbed",
    width: 1200,
    height: 900,
  },
  krydderurter: {
    url: "/billeder/5.jpg",
    alt: "Hvide blomsterplanter i haven",
    width: 1200,
    height: 900,
  },
  groentsagsplanter: {
    url: "/billeder/10.jpg",
    alt: "Grønne bregner og planter i skovlysning",
    width: 900,
    height: 1200,
  },
  sammenplantninger: {
    url: "/billeder/buxbom.jpg",
    alt: "To buxbom-buske i terrakottakrukker",
    width: 1200,
    height: 900,
  },
  buketter: {
    url: "/billeder/stauder.webp",
    alt: "Stauder i blandede farver — rød, pink og hvid",
    width: 900,
    height: 1000,
  },
  stauder: {
    url: "/billeder/stauder.webp",
    alt: "Stauder og perenner i frodig haven",
    width: 900,
    height: 1000,
  },
  buskeOgHaveplanter: {
    url: "/billeder/buxbom.jpg",
    alt: "Buxbom-buske og haveplanter",
    width: 1200,
    height: 900,
  },
};
