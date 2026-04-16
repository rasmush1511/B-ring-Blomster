# Båring Blomster — Hjemmeside

Next.js 14+ hjemmeside for Båring Blomster, Middelfartvej 103, 5466 Asperup.

---

## Installation og lokal udvikling

```bash
npm install
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i browseren.

```bash
npm run build   # produktionsbuild
npm start       # kør produktionsbuild lokalt
```

---

## Hvor ændrer man indhold

### Åbningstider, adresse, telefon, kategorier
Alt er samlet i [`lib/data.ts`](lib/data.ts):
- `virksomhed` — navn, adresse, telefon, Facebook-link, tagline
- `åbningstider` — dagsoversigt med tider
- `kategorier` — de syv kategorier på sortimentssiden (navn, beskrivelse, slug)
- `faqSpørgsmål` — spørgsmål og svar i accordion på kontaktsiden

### Billeder
Alle placeholder-billeder fra Unsplash er samlet i [`lib/images.ts`](lib/images.ts). Kommentaren øverst minder om at erstatte dem.

Hvert billede har:
- `url` — erstat med URL til kundens eget billede eller upload til `/public/`
- `alt` — alt-tekst (vigtig for SEO og tilgængelighed — opdatér når billederne skiftes)
- `width` / `height` — dimensioner (hjælper Next.js Image med layout)

### Sæsonindhold
Automatisk sæsonkomponent i [`lib/sæson.ts`](lib/sæson.ts). Bestemmer "forår/sommer/efterår/vinter" ud fra måneden og viser det relevante indhold på forsiden og sortimentssiden.

Tilpas `sæsonIndhold`-objektet med aktuelle planter og tekster for hver sæson.

---

## Logo

Tekstlogo er i brug som midlertidig løsning. Sådan udskifter du med det rigtige logo:

1. Gem logoet som `public/logo.png` (eller `.svg` hvis muligt)
2. Åbn [`components/layout/Header.tsx`](components/layout/Header.tsx)
3. Erstat `<span>Båring Blomster</span>` med:
   ```tsx
   <Image src="/logo.png" alt="Båring Blomster" width={140} height={40} />
   ```
4. Gør det samme i [`components/layout/Footer.tsx`](components/layout/Footer.tsx)
5. Fjern `// TODO`-kommentaren

---

## Facebook-feed

Facebook-sektionen viser i øjeblikket en statisk fallback. Sådan aktiverer du det rigtige feed:

1. Opret en Facebook-app på [developers.facebook.com](https://developers.facebook.com)
2. Hent din App ID
3. Åbn [`components/sections/FacebookFeed.tsx`](components/sections/FacebookFeed.tsx)
4. Følg instruktionerne i kommentaren øverst i filen

---

## Kontaktformular (email)

Formularen er klar — den sender til API-ruten i [`app/api/kontakt/route.ts`](app/api/kontakt/route.ts), men emailen logges kun i `console.log` for nu.

Sådan aktiverer du rigtig email-afsendelse:
1. Opret en konto på [Resend](https://resend.com) (anbefalet) eller SendGrid
2. `npm install resend`
3. Tilføj `RESEND_API_KEY=din-nøgle` til `.env.local`
4. Følg TODO-kommentaren i `app/api/kontakt/route.ts`

---

## Deploy til Vercel

```bash
npm install -g vercel
vercel
```

Eller: Forbind GitHub-repoen direkte i [vercel.com](https://vercel.com) — Vercel detekterer Next.js automatisk.

Husk at tilføje environment variables (`RESEND_API_KEY` osv.) i Vercel-projektets Settings → Environment Variables.

---

## TODO før launch

- [ ] Udskift tekstlogo med rigtigt logo (`public/logo.png`)
- [ ] Erstat alle Unsplash-placeholders med kundens egne billeder (`lib/images.ts`)
- [ ] Opdatér alt-tekster til de nye billeder
- [ ] Tilføj `public/og-image.jpg` (1200×630px) til Open Graph
- [ ] Tilføj `public/favicon.ico`
- [ ] Aktivér Facebook-feed (se afsnit ovenfor)
- [ ] Integrer email-service i kontaktformular (se afsnit ovenfor)
- [ ] Verificér Google Maps-embed peger rigtigt (tjek koordinater i `Kort.tsx`)
- [ ] Opdatér `sitemap.ts` med den rigtige produktionsdomain
- [ ] Ret `--color-primary` i `globals.css` til præcis farve fra logoet
- [ ] Test på mobil (375px og 390px), tablet (768px) og desktop (1280px+)
