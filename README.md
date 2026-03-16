# Industriella revolutionen – Quiz

Instuderingsquiz till provet (Sol Nova 8, Historia, s. 67–108). Flervalsfrågor från begreppslistan och instuderingsfrågorna. Frågorna och svarsalternativen roteras varje gång du startar quizet.

## Köra lokalt

```bash
npm install
cp .env.example .env.local   # fyll i UPSTASH_*-värdena för att spara progress lokalt
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Bygga och deploya (Vercel)

```bash
npm run build
```

Koppla repot till Vercel – Next.js känns automatiskt av.

### Progress i Redis

Poäng och frågehistorik (5 senaste per fråga) sparas i Redis så att progress fungerar på alla enheter. Vid första besök anger användaren ett namn eller kod – det sparas i en cookie och används som nyckel i Redis.

**Miljövariabler i Vercel** (samma som för andra Upstash-projekt):

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Du kan använda **samma Upstash-databas** som ett annat projekt: quizet använder ett eget nyckelprefix (`ir-quiz:` som standard) så att data inte krockar. Valfritt: sätt `QUIZ_REDIS_PREFIX` (t.ex. `mitt-quiz`) om du vill använda ett eget prefix.

Om variablerna saknas returnerar API:erna tom data (quizet fungerar fortfarande, men progress sparas inte).

## Innehåll

- **Frågor:** `src/data/quizQuestions.ts` – flervalsfrågor baserade på alla begrepp och instuderingsfrågor.
- **Quiz-sida:** `src/app/page.tsx` – startskärm, frågor, poäng och resultatskärm.

Fler frågor läggs enkelt till i `quizQuestions.ts`.
