export type Sæson = "forår" | "sommer" | "efterår" | "vinter";

export function getSæson(dato?: Date): Sæson {
  const d = dato ?? new Date();
  const måned = d.getMonth() + 1; // 1-12

  if (måned >= 3 && måned <= 5) return "forår";
  if (måned >= 6 && måned <= 8) return "sommer";
  if (måned >= 9 && måned <= 11) return "efterår";
  return "vinter";
}

export type SæsonIndhold = {
  titel: string;
  beskrivelse: string;
  planter: string[];
};

export const sæsonIndhold: Record<Sæson, SæsonIndhold> = {
  forår: {
    titel: "Forår på bakken",
    beskrivelse:
      "De første farver er fremme. Tulipaner, narcisser og forårsanemoner fylder butikken, og krydderurterne er klar til at komme i haven.",
    planter: [
      "Tulipaner",
      "Narcisser",
      "Forårsanemoner",
      "Primula",
      "Krydderurter",
      "Grøntsagsplanter",
    ],
  },
  sommer: {
    titel: "Sommer på bakken",
    beskrivelse:
      "Sommerens rigdom. Geranier, begoniaer og sommerblomster i alle afskygninger — plus friske buketter og haveplanter.",
    planter: [
      "Geranier",
      "Begoniaer",
      "Sommeraster",
      "Krydderurter",
      "Haveroser",
      "Buketter",
    ],
  },
  efterår: {
    titel: "Efterår på bakken",
    beskrivelse:
      "Sæsonen lukker stille ned. Lyng, chrysanthemum og efterårspotter giver haven farve helt frem til frosten.",
    planter: [
      "Lyng",
      "Chrysanthemum",
      "Efterårsprimula",
      "Vintergrønt",
      "Stauder",
      "Efterårsbuketter",
    ],
  },
  vinter: {
    titel: "Vi er lukket for vinteren",
    beskrivelse:
      "Butikken holder vinterpause. Vi åbner igen til foråret — følg os på Facebook for at se hvornår.",
    planter: [],
  },
};
