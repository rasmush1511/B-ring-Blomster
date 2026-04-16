// PLACEHOLDERS — erstat med kundens egne billeder før launch

export type BilledEntry = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export const heroBilleder: BilledEntry[] = [
  {
    url: "https://images.unsplash.com/photo-1490750967868-88df5691cc48?w=2000&q=80",
    alt: "Røde anemoner i morgenlys, tæt på",
    width: 2000,
    height: 1333,
  },
];

export const sæsonBilleder: BilledEntry[] = [
  {
    url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1200&q=80",
    alt: "Forårsblomster i tidligt dagslys",
    width: 1200,
    height: 900,
  },
  {
    url: "https://images.unsplash.com/photo-1487530811015-780780f59bae?w=1200&q=80",
    alt: "Krydderurter og grønne blade, makro",
    width: 1200,
    height: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&q=80",
    alt: "Hvide tulipaner i blød fokus",
    width: 1200,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=80",
    alt: "Buket af blandede forårsblomster",
    width: 1200,
    height: 1200,
  },
];

export const kategoriBilleder: Record<string, BilledEntry> = {
  foraarsblomster: {
    url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1200&q=80",
    alt: "Gule og orange forårsblomster",
    width: 1200,
    height: 900,
  },
  sommerblomster: {
    url: "https://images.unsplash.com/photo-1490750967868-88df5691cc48?w=1200&q=80",
    alt: "Sommerblomster i klare farver",
    width: 1200,
    height: 900,
  },
  efteraarsplanter: {
    url: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=80",
    alt: "Efterårslyngplante i varme brune toner",
    width: 1200,
    height: 900,
  },
  sammenplantninger: {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    alt: "Sammenplantning i terrakottakrukke",
    width: 1200,
    height: 900,
  },
  krydderurter: {
    url: "https://images.unsplash.com/photo-1487530811015-780780f59bae?w=1200&q=80",
    alt: "Friske krydderurter, blade set tæt på",
    width: 1200,
    height: 900,
  },
  buketter: {
    url: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=80",
    alt: "Håndgjort buket af blandede blomster",
    width: 1200,
    height: 900,
  },
  "buske-haveplanter": {
    url: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200&q=80",
    alt: "Haveroser og buske i sommergrønt",
    width: 1200,
    height: 900,
  },
};
