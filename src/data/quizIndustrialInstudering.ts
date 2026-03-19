import type { QuizQuestion } from "./quizQuestionTypes";

/**
 * En flervalsfråga per uppgift i:
 * docs/4. Instuderingsfrågor - industriella revolutionen - vt.26 (1).txt
 * (Sol Nova 8, s. 67–108). Uppgift med A/B ger två frågor.
 * Svarslängder varierade medvetet så att det längsta alternativet inte alltid är rätt.
 */
export const quizQuestionsIndustrialInstudering: QuizQuestion[] = [
  {
    id: "ind-v26-1a",
    question:
      "Vad är kolonialism? (instudering 1 A – förklara vad kolonialism är)",
    options: [
      "Ett starkare lands kontroll över andra områden och folk – politiskt och ekonomiskt, ofta för resurser och marknader",
      "Att länder handlar fritt med varandra utan att någon stat styr ett annat lands inre angelägenheter eller långsiktigt påverkar dess ekonomi mer än andra handelspartners",
      "Att alla folk i världen lever i en gemensam demokrati med samma lagar och val oavsett språk, kultur och historisk bakgrund i samhället",
      "Att kyrkan ensam bestämmer gränser mellan länder utan att ekonomiska intressen, arméer eller kolonial förvaltning spelar någon roll",
    ],
    correctAnswer:
      "Ett starkare lands kontroll över andra områden och folk – politiskt och ekonomiskt, ofta för resurser och marknader",
    tip: "Kolonialism = makt över andra territorier – inte bara handel.",
  },
  {
    id: "ind-v26-1b",
    question:
      "Vad var de europeiska makterna främst ute efter när de erövrade kolonierna? (instudering 1 B)",
    options: [
      "Råvaror, mark, makt och möjlighet att sälja varor på nya marknader",
      "Endast att sprida kristendom utan ekonomiska eller politiska intressen bakom erövringarna eller förvaltningen av kolonierna",
      "Endast att avskaffa slaveri och införa demokrati i hela världen samtidigt som man lämnade kolonierna utan kontroll",
      "Endast att bygga skolor och sjukhus utan att påverka handel, gränser eller tillgång till råvaror för industrin i hemlandet",
    ],
    correctAnswer:
      "Råvaror, mark, makt och möjlighet att sälja varor på nya marknader",
    tip: "Tänk vad industriländer behövde: råvaror, plats, inflytande, avsättning.",
  },
  {
    id: "ind-v26-2",
    question:
      "Varför kallas det ”industriella revolutionen” trots att förändringarna varade i mer än hundra år? (instudering 2)",
    options: [
      "För att det var ett enda kort krig som avgjordes på några månader mellan industriländerna utan att samhällsstrukturen förändrades i grunden",
      "För att alla europeiska kungar avsattes exakt samma år i varje land samtidigt som fabriker byggdes",
      "För att ordet bara är en journalistrubrik utan koppling till hur snabbt eller djupt samhället förändrades",
      "För att förändringarna var så djupa och snabba i förhållande till före – som en revolution – även om hela processen tog lång tid",
    ],
    correctAnswer:
      "För att förändringarna var så djupa och snabba i förhållande till före – som en revolution – även om hela processen tog lång tid",
    tip: "Revolution behöver inte vara kort – det handlar om hur radikal omvälvningen var.",
  },
  {
    id: "ind-v26-3",
    question:
      "Historiebruk: varför skiljer sig historien om den industriella revolutionen mellan t.ex. Storbritannien och Sverige, och varför läser vi inte exakt samma historia i skolan? (instudering 3)",
    options: [
      "För att läroböcker i olika länder automatiskt översätts ordagrant utan nationella skillnader i urval och ton",
      "För att bara ett land hade industrialisering medan alla andra stod helt stilla utan fabriker eller järnvägar",
      "Varje land väljer att lyfta fram sin egen roll och sina perspektiv – historiebruk påverkar vad som berättas",
      "För att historieämnet i skolan enbart handlar om språk och stavning, inte om tolkning av det förflutna",
    ],
    correctAnswer:
      "Varje land väljer att lyfta fram sin egen roll och sina perspektiv – historiebruk påverkar vad som berättas",
    tip: "Historiebruk = hur vi använder och framhäver historien utifrån nutid och identitet.",
  },
  {
    id: "ind-v26-4",
    question:
      "Vad menas med att ”vetenskapen blev den nya religionen”? (instudering 4)",
    options: [
      "Att alla kyrkor stängdes och religion förbjöds överallt i Europa under ett år utan undantag för någon samfund",
      "Att vetenskapen ersattes helt av prästers förkunnelse i alla skolor och att naturvetenskap togs bort ur läroplanen",
      "Att förklaringar om naturen, hälsa och samhälle i allt högre grad byggde på vetenskap och rationella resonemang i stället för bara religiös tro",
      "Att endast kungen fick läsa vetenskapliga böcker medan folket skulle vara okunnigt om hygien och teknik",
    ],
    correctAnswer:
      "Att förklaringar om naturen, hälsa och samhälle i allt högre grad byggde på vetenskap och rationella resonemang i stället för bara religiös tro",
    tip: "Tänk på hur svar på livsfrågor allt mer söktes i vetenskap och teknik.",
  },
  {
    id: "ind-v26-5",
    question:
      "Vad handlar Charles Darwins utvecklingslära om i biologin, och vad har socialdarwinism respektive ”survival of the fittest” ofta (men felaktigt) kopplats till i samhällsdebatt? (instudering 5)",
    options: [
      "Att alla människor är genetiskt identiska och att skillnader bara beror på slump i språket och inte på miljö eller historia",
      "Biologin: arter anpassas genom naturligt urval; socialdarwinism misstolkade detta till att ”starka folk/raser har rätt att dominera svaga” i samhället",
      "Att religion och vetenskap alltid sagt exakt samma sak om människans ursprung utan debatt eller nya fossilfynd",
      "Att ”survival of the fittest” bara avser ekonomisk tillväxt i banker och inte biologisk anpassning eller konkurrens i naturen",
    ],
    correctAnswer:
      "Biologin: arter anpassas genom naturligt urval; socialdarwinism misstolkade detta till att ”starka folk/raser har rätt att dominera svaga” i samhället",
    tip: "Darwin beskrev naturen; vissa drog paralleller till politik – det kallas ofta socialdarwinism.",
  },
  {
    id: "ind-v26-6",
    question:
      "Varför var det viktigt för många europeiska erövrare att dela in människor i olika raser? (instudering 6 – tänk slaveri, senare rasideologi)",
    options: [
      "För att alla skulle behandlas lika oavsett hudfärg enligt internationell lag på 1700-talet i alla kolonier utan undantag",
      "För att rättfärdiga överordning, kolonialism och förtryck med idén att vissa grupper var ”naturligt överlägsna”",
      "För att rasbegreppet saknade betydelse för slaveri, kolonial makt och arbetsfördelning i imperierna",
      "För att kyrkan krävde att alla folk skulle ha exakt samma rättigheter i kolonierna som i hemlandet utan hierarki",
    ],
    correctAnswer:
      "För att rättfärdiga överordning, kolonialism och förtryck med idén att vissa grupper var ”naturligt överlägsna”",
    tip: "Rasindelning användes för att motivera makt och utnyttjande.",
  },
  {
    id: "ind-v26-7",
    question:
      "Varför kom fabriker och industrier till under den industriella revolutionen? (instudering 7 – förlagssystem/ förlagsindustri och urbanisering ska kunna återfinnas i svaret)",
    options: [
      "Fabriker uppstod bara för att kungen beordrade alla bönder att flytta utan ekonomiska skäl eller efterfrågan på varor",
      "Förlagssystemet och arbetsfördelning samlade produktion; urbanisering gav arbetskraft i städer; ny teknik gjorde fabriksdrift lönsam",
      "Urbanisering innebar att alla lämnade städerna så att fabriker byggdes på landsbygden utan tillgång till arbetskraft",
      "Förlagssystemet avskaffade all handel så att inga råvaror behövdes till fabriker eller export",
    ],
    correctAnswer:
      "Förlagssystemet och arbetsfördelning samlade produktion; urbanisering gav arbetskraft i städer; ny teknik gjorde fabriksdrift lönsam",
    tip: "Koppla förlag → arbete hemma/byar, sedan fabriker; fler i städer; maskiner.",
  },
  {
    id: "ind-v26-8a",
    question:
      "Vilka av följande hör till uppfinningar eller teknik som ökade förändringstakten under den industriella revolutionen? (instudering 8 A)",
    options: [
      "Endast segelfartyg och handskriven bokföring utan nya maskiner eller ångkraft i produktionen",
      "Endast medeltida vattenhjul utan koppling till fabriker, kolonial handel eller masstillverkning",
      "T.ex. mekanisk spinnning (Spinning Jenny m.fl.), ångmaskinen, järnväg och ångbåt – de ökade produktion och transport",
      "Endast tryckpressen på 1400-talet utan senare industriella innovationer som ånga eller järnväg",
    ],
    correctAnswer:
      "T.ex. mekanisk spinnning (Spinning Jenny m.fl.), ångmaskinen, järnväg och ångbåt – de ökade produktion och transport",
    tip: "Nämn gärna flera i prov: textilmaskiner, ånga, järnväg, ångbåt.",
  },
  {
    id: "ind-v26-8b",
    question:
      "Varför var sådana uppfinningar viktiga för den industriella revolutionen? (instudering 8 B)",
    options: [
      "De gjorde att ingen längre behövde arbeta eftersom maskiner ersatte all mänsklig insats direkt från första dagen",
      "De ökade produktionstakten, sänkte kostnader per vara, möjliggjorde fabriker och band ihop marknader över avstånd",
      "De användes bara i kungens palats och påverkade inte vanligt folk, handel eller priser på varor",
      "De stoppade all import och export så att länder levde helt isolerade utan råvaror från andra världsdelar",
    ],
    correctAnswer:
      "De ökade produktionstakten, sänkte kostnader per vara, möjliggjorde fabriker och band ihop marknader över avstånd",
    tip: "Mer producerat, snabbare, billigare, större marknader.",
  },
  {
    id: "ind-v26-9",
    question:
      "Varför var det viktigt att forskare upptäckte att det finns bakterier? (instudering 9)",
    options: [
      "Upptäckten användes bara för att bygga större kanoner och befästningar utan någon koppling till sjukdom eller hälsa",
      "Man kunde förstå smittspridning bättre, förbättra hygien och utveckla medicinska metoder mot sjukdomar",
      "Den ledde till att man slutade tvätta händerna i sjukvården eftersom man trodde smitta var ofarlig",
      "Den visade att alla sjukdomar beror enbart på väder och årstider utan smittämnen eller möjlighet till vaccin",
    ],
    correctAnswer:
      "Man kunde förstå smittspridning bättre, förbättra hygien och utveckla medicinska metoder mot sjukdomar",
    tip: "Pasteur, Koch m.fl. – koppling mellan mikrober och sjukdom.",
  },
  {
    id: "ind-v26-10",
    question:
      "Redogör för orsaker och konsekvenser för den industriella revolutionen – vad beskriver ”snöbollseffekten”? (instudering 10)",
    options: [
      "Att allt alltid förblir oförändrat tills ett enda land bestämmer allt i en dag utan förberedelser eller motstånd",
      "Att en förändring leder till nya förändringar i kedjeform – orsaker och konsekvenser förstärker varandra över tid",
      "Att revolutionen bara handlade om snö och vinterväder i Norden utan koppling till teknik eller fabriker",
      "Att orsak och verkan aldrig kan kopplas i historiska sammanhang eftersom varje händelse är unik utan samband",
    ],
    correctAnswer:
      "Att en förändring leder till nya förändringar i kedjeform – orsaker och konsekvenser förstärker varandra över tid",
    tip: "En sak leder till nästa: teknik → fabriker → urbanisering → nya problem/lösningar …",
  },
  {
    id: "ind-v26-11",
    question:
      "Vad avser man ofta med ”framstegstanken” i 1800-talets Europa – tron på att samhället kan bli bättre? (instudering 11, kunskapsmässigt)",
    options: [
      "Tro på att ingenting någonsin kan förändras oavsett vad människor gör inom vetenskap, politik eller teknik",
      "Tro på att endast krig kan skapa framsteg och att fred alltid leder till stagnation utan industri eller innovation",
      "Tro på att vetenskap, teknik och förnuft kan förbättra människors liv och bygga ett bättre samhälle",
      "Tro på att historien alltid går bakåt och att industrialisering var ett misstag alla ångrade direkt",
    ],
    correctAnswer:
      "Tro på att vetenskap, teknik och förnuft kan förbättra människors liv och bygga ett bättre samhälle",
    tip: "I prov: koppla till upplysning, industri, optimism – din egen ståndpunkt är separat.",
  },
  {
    id: "ind-v26-12",
    question:
      "Vad var Ludditerna och vad gjorde de? (instudering 12)",
    options: [
      "En kunglig orden som belönade fabriksägare för att köpa fler maskiner och utöka produktionen utan protester",
      "En vetenskapsorganisation som bara studerade växter och aldrig närmade sig fabriker, textil eller maskiner",
      "Arbetarprotester i England tidigt 1800-tal mot maskiner som hotade jobb – vissa grupper förstörde maskiner i textilindustrin",
      "En fredlig festival i London där man firade ångmaskinen utan protester, strejker eller sabotage",
    ],
    correctAnswer:
      "Arbetarprotester i England tidigt 1800-tal mot maskiner som hotade jobb – vissa grupper förstörde maskiner i textilindustrin",
    tip: "Namnet lever kvar i uttryck om teknikmotstånd – maskiner = hot mot försörjning.",
  },
  {
    id: "ind-v26-13",
    question:
      "Förklara varför USA kunde växa fram som en industristat. (instudering 13, s. 76–77)",
    options: [
      "Endast för att landet var litet och isolerat utan handel med andra världsdelar eller invandring av arbetskraft",
      "Endast för att Europa förbjöd all industri utan undantag så att USA inte kunde bygga fabriker",
      "Råvaror, kapital, invandring, stor inre marknad, naturresurser och tillgång till teknik och investeringar",
      "Endast på grund av att slaveri försvann över en natt utan ekonomiska eller sociala följder i någon region",
    ],
    correctAnswer:
      "Råvaror, kapital, invandring, stor inre marknad, naturresurser och tillgång till teknik och investeringar",
    tip: "Tänk resurser, människor, pengar, marknad, skydd för inhemsk industri (tullar).",
  },
  {
    id: "ind-v26-14",
    question:
      "Vilka var bland de viktigaste industrierna för Sverige i slutet av 1800-talet och början av 1900-talet? (instudering 14, s. 81–86)",
    options: [
      "Bland annat skogsindustri, gruvor, järn/stål och verkstadsindustri samt textil",
      "Endast fiske och turism utan tung industri, gruvdrift eller masugnar i någon del av landet",
      "Endast jordbruk utan någon förädling eller export av trä, malm eller maskiner till utlandet",
      "Endast import av färdiga varor utan egen tillverkning i Sverige eller utnyttjande av skog och vattenkraft",
    ],
    correctAnswer:
      "Bland annat skogsindustri, gruvor, järn/stål och verkstadsindustri samt textil",
    tip: "Sverige: skog, malm, vattenkraft – byggde industrier.",
  },
  {
    id: "ind-v26-15",
    question:
      "På vilket sätt förändrades livet för många svenskar och familjer när Sverige industrialiserades? (instudering 15 – urbanisering, stad, trångboddhet, arbetsliv, könsroller)",
    options: [
      "Alla blev omedelbart rika och fattigdom försvann helt i hela landet utan undantag för någon grupp",
      "Urbanisering till städer, ofta trångboddhet, nya arbetsvillkor i industri, förändrade könsroller och kvinnors arbete",
      "Ingen flyttade till städer; allt arbete skedde oförändrat på gårdar som förr utan fabriker eller löner",
      "Bara män påverkades medan kvinnors vardag förblev exakt som före 1800-talet överallt utan fabriksarbete",
    ],
    correctAnswer:
      "Urbanisering till städer, ofta trångboddhet, nya arbetsvillkor i industri, förändrade könsroller och kvinnors arbete",
    tip: "Flytt till fabriker, trångt, nya jobb, kvinnor in i lönearbete i större utsträckning.",
  },
  {
    id: "ind-v26-16",
    question:
      "Varför började många svenskar emigrera till USA mot slutet av 1800-talet? (instudering 16)",
    options: [
      "Fattigdom, brist på jord och arbete, hungerår och hopp om bättre liv och jord i USA",
      "För att USA tvingade Sverige militärt att skicka alla medborgare över havet mot deras vilja",
      "För att Sverige förbjöd all utvandring och folket flydde illegalt utan ekonomiska eller sociala skäl till utvandringen",
      "Endast för att resa som turister utan avsikt att bosätta sig, arbeta eller skaffa jord i Amerika",
    ],
    correctAnswer:
      "Fattigdom, brist på jord och arbete, hungerår och hopp om bättre liv och jord i USA",
    tip: "Brist på åker, arbetslöshet, svåra år – Amerika som löfte om land och jobb.",
  },
];
