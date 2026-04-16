// PLACEHOLDERS — erstat med kundens egne billeder før launch
// Alle URLs bruger images.unsplash.com/photo-{id} format med faste IDs

export type BilledEntry = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export const heroBillede: BilledEntry = {
  url: "https://images.unsplash.com/photo-1490750967868-88df5691cc48?w=2000&q=85&fit=crop",
  alt: "Røde anemoner i morgenlys, makro-nærbillede",
  width: 2000,
  height: 1333,
};

export const slideshowBilleder: BilledEntry[] = [
  {
    url: "https://images.unsplash.com/photo-1490750967868-88df5691cc48?w=1800&q=85&fit=crop",
    alt: "Røde anemoner i klart forårslys",
    width: 1800,
    height: 1200,
  },
  {
    url: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1800&q=85&fit=crop",
    alt: "Hvide tulipaner i blød fokus",
    width: 1800,
    height: 1200,
  },
  {
    url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1800&q=85&fit=crop",
    alt: "Gule forårsblomster i naturligt dagslys",
    width: 1800,
    height: 1200,
  },
  {
    url: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1800&q=85&fit=crop",
    alt: "Frisk buket af blandede forårsblomster",
    width: 1800,
    height: 1200,
  },
  {
    url: "https://images.unsplash.com/photo-1487530811015-780780f59bae?w=1800&q=85&fit=crop",
    alt: "Grønne krydderurter og blade set tæt på",
    width: 1800,
    height: 1200,
  },
  {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1800&q=85&fit=crop",
    alt: "Forårsplanter i terrakottakrukker",
    width: 1800,
    height: 1200,
  },
];

export const kategoriBilleder: Record<string, BilledEntry> = {
  tulipaner: {
    url: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&q=85&fit=crop",
    alt: "Hvide og lyserøde tulipaner i forårslys",
    width: 1200,
    height: 900,
  },
  narcisser: {
    url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1200&q=85&fit=crop",
    alt: "Gule narcisser i morgenlys",
    width: 1200,
    height: 900,
  },
  foraarsanemoner: {
    url: "https://images.unsplash.com/photo-1490750967868-88df5691cc48?w=1200&q=85&fit=crop",
    alt: "Røde forårsanemoner makro-nærbillede",
    width: 1200,
    height: 900,
  },
  primula: {
    url: "https://images.unsplash.com/photo-1477346611522-93281d11ed20?w=1200&q=85&fit=crop",
    alt: "Farverige primulaplanter i foråret",
    width: 1200,
    height: 900,
  },
  stedmoderblomster: {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85&fit=crop&crop=center",
    alt: "Farvede stedmoderblomster i potter",
    width: 1200,
    height: 900,
  },
  hyacinter: {
    url: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200&q=85&fit=crop",
    alt: "Lyserøde og hvide hyacinter",
    width: 1200,
    height: 900,
  },
  krydderurter: {
    url: "https://images.unsplash.com/photo-1487530811015-780780f59bae?w=1200&q=85&fit=crop",
    alt: "Friske krydderurter — persille, basilikum og timian",
    width: 1200,
    height: 900,
  },
  groentsagsplanter: {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85&fit=crop&crop=top",
    alt: "Grøntsagsplanter klar til haven",
    width: 1200,
    height: 900,
  },
  sammenplantninger: {
    url: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=85&fit=crop&crop=top",
    alt: "Sammenplantning af forårsblomster i terrakottakrukke",
    width: 1200,
    height: 900,
  },
  buketter: {
    url: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=85&fit=crop",
    alt: "Håndgjort buket af blandede forårsblomster",
    width: 1200,
    height: 900,
  },
  stauder: {
    url: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=85&fit=crop",
    alt: "Stauder og perenner til den permanente have",
    width: 1200,
    height: 900,
  },
  buskeOgHaveplanter: {
    url: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200&q=85&fit=crop&crop=top",
    alt: "Buske og haveplanter — roser og stauder",
    width: 1200,
    height: 900,
  },
};
