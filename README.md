# Industriella revolutionen – Quiz

Instuderingsquiz till provet (Sol Nova 8, Historia). Flervalsfrågor från begreppslistan och instuderingsfrågorna. Du kan välja **alla frågor** eller **bara instuderingsfrågor** (kortare quiz utan begrepp, personer, Indi-lappar m.m.). Frågorna och svarsalternativen roteras varje gång du startar quizet.

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

- **Frågor (industriella, alla):** `src/data/quizQuestions.ts` – begrepp, personer, instuderingsfrågor, Indi-lappar.
- **Endast instudering (industriella):** `src/data/quizIndustrialInstudering.ts` – **en flervalsfråga per rad/uppgift** i `docs/4. Instuderingsfrågor - industriella revolutionen - vt.26 (1).txt` (A/B = två frågor).
- **Endast instudering (nationalism):** `src/data/quizNationalismInstudering.ts` – **en flervalsfråga per uppgift** i `docs/Instuderingsfrågor - Nationalism & Imperialism.txt` (bänkdiskussion s. 127 utelämnad; bildfråga s. 119 som text om Margherita).
- **Nationalism (alla frågor):** `src/data/quizQuestionsNationalism.ts` inkl. samma instuderingsblock som sprids in (övrigt innehåll finns kvar).
- **Gemensam typ:** `src/data/quizQuestionTypes.ts`
- **Quiz-sida:** `src/app/page.tsx` – val av ämne och omfång, frågor, poäng.

Progress i Redis sparas per **ämne och omfång** (t.ex. industriella vs industriella instudering).
