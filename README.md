# Industriella revolutionen – Quiz

Instuderingsquiz till provet (Sol Nova 8, Historia, s. 67–108). Flervalsfrågor från begreppslistan och instuderingsfrågorna. Frågorna och svarsalternativen roteras varje gång du startar quizet.

## Köra lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Bygga och deploya (Vercel)

```bash
npm run build
```

Koppla repot till Vercel – Next.js känns automatiskt av. Redis behövs inte för quizet; kan läggas till senare om ni vill spara poäng/high scores.

## Innehåll

- **Frågor:** `src/data/quizQuestions.ts` – flervalsfrågor baserade på alla begrepp och instuderingsfrågor.
- **Quiz-sida:** `src/app/page.tsx` – startskärm, frågor, poäng och resultatskärm.

Fler frågor läggs enkelt till i `quizQuestions.ts`.
