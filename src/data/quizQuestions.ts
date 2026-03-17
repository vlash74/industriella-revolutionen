/**
 * Flervalsfrågor baserade på begreppslistan och instuderingsfrågorna
 * (Sol Nova 8, Historia, s. 67–108).
 * Frågorna roteras/slumpas vid varje quiz-körning.
 */

import type { QuizTopic } from "@/lib/redis";
import { quizQuestionsNationalism } from "./quizQuestionsNationalism";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  tip?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // —— Begrepp ——
  {
    id: "revolution",
    question: "Vad menas med begreppet revolution i historiska sammanhang?",
    options: [
      "En snabb och genomgripande förändring av samhället",
      "Ett krig mellan två länder",
      "En långsam förändring av samhällets ekonomiska strukturer över decennier",
      "En religiös ceremoni eller en ekonomisk recession",
    ],
    correctAnswer: "En snabb och genomgripande förändring av samhället",
    tip: "Tänk på ordet revolution – det handlar om stor och snabb förändring, inte bara krig.",
  },
  {
    id: "nationalism",
    question: "Vad är nationalism?",
    options: [
      "Tro på nationens betydelse och fosterlandskärlek",
      "Motstånd mot kungamakt och krav på folkets inflytande",
      "En typ av handelspolitik som gynnar industrin",
      "Läran om jämställdhet mellan samhällsklasser",
    ],
    correctAnswer: "Tro på nationens betydelse och fosterlandskärlek",
    tip: "Ordet nation är nyckeln – det handlar om känslor och tro kopplat till sitt land.",
  },
  {
    id: "imperialism",
    question: "Vad innebär imperialism?",
    options: [
      "Att ett land utövar makt över andra länder eller folk",
      "Att avskaffa monarkin och införa republik överallt",
      "Att bygga fabriker och utveckla inhemsk industri",
      "Att införa demokrati och allmän rösträtt",
    ],
    correctAnswer: "Att ett land utövar makt över andra länder eller folk",
    tip: "Imperium = makt över andra. Tänk kolonier och erövring.",
  },
  {
    id: "socialdarwinism",
    question: "Vad handlar socialdarwinism om?",
    options: [
      "Att man tillämpar idén om 'de starkaste överlever' på samhället och människogrupper",
      "Att man ska ta hand om de svaga och ge alla lika möjligheter",
      "En religiös rörelse som vänder sig mot vetenskapen",
      "En jordbruksmetod baserad på växelbruk och förbättrad odling",
    ],
    correctAnswer: "Att man tillämpar idén om 'de starkaste överlever' på samhället och människogrupper",
    tip: "Darwins idéer användes på samhället – tänk hur människogrupper kunde rättfärdiga överordning.",
  },
  {
    id: "survival",
    question: "Vad betyder 'survival of the fittest'?",
    options: [
      "De som är mest anpassade överlever",
      "De rikaste vinner",
      "Alla ska ha lika rättigheter",
      "Krig är nödvändigt",
    ],
    correctAnswer: "De som är mest anpassade överlever",
    tip: "Engelska uttrycket – 'fittest' betyder mest anpassad, inte starkast i styrka.",
  },
  {
    id: "forlagssystem",
    question: "Vad var förlagssystemet?",
    options: [
      "En arbetsform där hemarbetare fick råmaterial och levererade färdiga varor tillbaka",
      "Ett system för att odla spannmål och fördela skörden i byarna",
      "En typ av fackförening som organiserade fabriksarbetare",
      "En lag om fabriksarbete och arbetstidsbegränsning",
    ],
    correctAnswer: "En arbetsform där hemarbetare fick råmaterial och levererade färdiga varor tillbaka",
    tip: "Förlag = den som gav ut arbete. Arbetet skedde hemma innan fabrikerna.",
  },
  {
    id: "kolonialism",
    question: "Vad är kolonialism?",
    options: [
      "Erövring och styre av andra territorier, ofta för att ta råvaror och sälja varor",
      "Byggande av städer och utveckling av infrastruktur i industriländerna",
      "Utveckling av demokrati och allmän rösträtt i Europa",
      "Avveckling av slaveri och handel med slavar",
    ],
    correctAnswer: "Erövring och styre av andra territorier, ofta för att ta råvaror och sälja varor",
    tip: "Kolonier = områden som styrdes av europeiska makter. Tänk råvaror och handel.",
  },
  {
    id: "scramble",
    question: "Vad menas med 'Kapplöpningen om Afrika' (Scramble of Africa)?",
    options: [
      "Europas makter tävlade om att erövra och styra delar av Afrika",
      "Afrikanska länder tävlade i idrott och kulturella evenemang",
      "Handelskrig mellan afrikanska kungariken om handelsvägar",
      "En uppfinningstävling kring nya jordbruksmetoder i Afrika",
    ],
    correctAnswer: "Europas makter tävlade om att erövra och styra delar av Afrika",
    tip: "Scramble = kapplöpning. Vilka tävlade? Tänk Europas stormakter på 1800-talet.",
  },
  {
    id: "industriella_rev",
    question: "Vad var den industriella revolutionen?",
    options: [
      "Övergången till fabriksproduktion, ångkraft och ny teknik från slutet av 1700-talet",
      "Ett krig om kolonier mellan Europas stormakter",
      "En revolt mot kungen som ledde till republik",
      "Införandet av allmän rösträtt och parlamentarism i Europa",
    ],
    correctAnswer: "Övergången till fabriksproduktion, ångkraft och ny teknik från slutet av 1700-talet",
    tip: "Det handlar om övergång från jordbruk till fabriker, ångmaskiner och ny teknik.",
  },
  {
    id: "urbanisering",
    question: "Vad innebär urbanisering?",
    options: [
      "Att allt fler människor flyttar till och bor i städer",
      "Att jordbruket mekaniseras",
      "Att fabriker stängs",
      "Att landet blir självförsörjande",
    ],
    correctAnswer: "Att allt fler människor flyttar till och bor i städer",
    tip: "Urban = stad. Vad händer med befolkningen när industrin växer?",
  },
  {
    id: "sjuarskriget",
    question: "Vad var Sjuårskriget?",
    options: [
      "Ett stort krig i Europa 1756–1763",
      "Ett inbördeskrig i Sverige",
      "Ett krig om kolonierna i Amerika",
      "Både A och C – ett europeiskt krig med koloniala konflikter",
    ],
    correctAnswer: "Både A och C – ett europeiskt krig med koloniala konflikter",
    tip: "Sju år = 1756–1763. Storbritannien mot Frankrike – och vem fick Indien?",
  },
  {
    id: "ravaror",
    question: "Vad menas med råvaror?",
    options: [
      "Material som bearbetas till färdiga produkter",
      "Färdiga varor som säljs",
      "Pengar som investeras",
      "Arbetskraft i fabriker",
    ],
    correctAnswer: "Material som bearbetas till färdiga produkter",
    tip: "Råvaror är det du behöver innan du tillverkar något – t.ex. ull, järnmalm, trä.",
  },
  {
    id: "global_handel",
    question: "Vad innebär global handel?",
    options: [
      "Handel mellan länder över hela världen",
      "Handel endast inom ett land",
      "Handel med guld och silver",
      "Handel som styrs av kyrkan",
    ],
    correctAnswer: "Handel mellan länder över hela världen",
    tip: "Global = världen. Handel över gränser och hav.",
  },
  {
    id: "handelshinder",
    question: "Vad är handelshinder?",
    options: [
      "Tullar, lagar och regler som begränsar fri handel",
      "Transportproblem och brist på vägar mellan städerna",
      "Brist på råvaror och dyr energi till fabrikerna",
      "Fackföreningarnas krav på högre löner och kortare arbetstid",
    ],
    correctAnswer: "Tullar, lagar och regler som begränsar fri handel",
    tip: "Hinder = något som stoppar eller begränsar. Tänk tullar och lagar.",
  },
  {
    id: "allmanning",
    question: "Vad var allmänning (common)?",
    options: [
      "Mark som alla bybor hade rätt att använda gemensamt",
      "En statlig skatt på jordbruk och boskap",
      "En typ av fabrik där flera hantverkare arbetade tillsammans",
      "Privat ägd skog som såldes till industrin",
    ],
    correctAnswer: "Mark som alla bybor hade rätt att använda gemensamt",
    tip: "Allmänning = gemensam mark, t.ex. för bete. Motsatsen till privat ägd.",
  },
  {
    id: "inhagnadsrorelsen",
    question: "Vad var inhägnadsrörelsen?",
    options: [
      "Att allmänning och gemensam mark lades in och blev privat ägd",
      "Att städer byggde murar och befästningar för försvar",
      "Att fabriker stängdes inne bakom grindar för att skydda maskiner",
      "En religiös rörelse som krävde återgång till enklare liv",
    ],
    correctAnswer: "Att allmänning och gemensam mark lades in och blev privat ägd",
    tip: "Inhägnad = stänga in. Vad hände med den gemensamma marken i byarna?",
  },
  {
    id: "produktivitet",
    question: "Vad menas med produktivitet?",
    options: [
      "Hur mycket som produceras per arbetsinsats eller resurs",
      "Antal anställda i en fabrik eller antal maskiner i bruk",
      "Priset på varor på marknaden eller lönen till arbetarna",
      "Mängden råvaror som importeras eller används per år",
    ],
    correctAnswer: "Hur mycket som produceras per arbetsinsats eller resurs",
    tip: "Produktivitet = hur effektivt man arbetar. Mer output med samma insats.",
  },
  {
    id: "innovation",
    question: "Vad är en innovation?",
    options: [
      "En ny idé, metod eller produkt",
      "En gammal tradition",
      "En typ av skatt",
      "Ett krig",
    ],
    correctAnswer: "En ny idé, metod eller produkt",
    tip: "Innovation = något nytt – uppfinning, förbättring eller ny metod.",
  },
  {
    id: "massproduktion",
    question: "Vad innebär massproduktion?",
    options: [
      "Tillverkning av stora mängder likadana varor, ofta i fabriker",
      "Handtillverkning av lyxvaror i små verkstäder",
      "Odling av spannmål och andra grödor på stora jordbruk",
      "Handel mellan länder över hav och handelsvägar",
    ],
    correctAnswer: "Tillverkning av stora mängder likadana varor, ofta i fabriker",
    tip: "Mass = stor mängd. Fabriker tillverkade många likadana saker.",
  },
  {
    id: "flygande_skytteln",
    question: "Vad var den flygande skytteln och vem uppfann den?",
    options: [
      "En uppfinning som snabbade på vävningen – John Kay 1733",
      "Ett tidigt flygplan – bröderna Wright",
      "En ångmaskin – James Watt",
      "En spinnmaskin – James Hargreaves",
    ],
    correctAnswer: "En uppfinning som snabbade på vävningen – John Kay 1733",
    tip: "Skyttel används vid vävning. John Kay, 1733 – textilindustrin.",
  },
  {
    id: "spinning_jenny",
    question: "Vad var Spinning Jenny och vem uppfann den?",
    options: [
      "En spinnmaskin som kunde spinna många trådar samtidigt – James Hargreaves 1764",
      "En ångmaskin – James Watt",
      "En vävstol – John Kay",
      "En ångbåt – Robert Fulton",
    ],
    correctAnswer: "En spinnmaskin som kunde spinna många trådar samtidigt – James Hargreaves 1764",
    tip: "Spinning = spinna tråd. Jenny är namnet. Hargreaves 1764.",
  },
  {
    id: "angmaskin",
    question: "Varför var ångmaskinen viktig under den industriella revolutionen?",
    options: [
      "Den gav kraft till fabriker och transport och var inte beroende av vatten eller vind",
      "Den användes bara i hemmen för uppvärmning och matlagning",
      "Den ersatte el som kraftkälla i de största städerna",
      "Den användes bara i jordbruket för att driva tröskmaskiner",
    ],
    correctAnswer: "Den gav kraft till fabriker och transport och var inte beroende av vatten eller vind",
    tip: "Ånga drev maskiner – man behövde inte längre vattenfall eller vind.",
  },
  {
    id: "kraftkalla",
    question: "Vad är en kraftkälla?",
    options: [
      "Något som ger energi till maskiner, t.ex. vatten, ånga eller el",
      "En typ av råvara som bearbetas till färdiga produkter",
      "En fackförening som organiserar arbetare i en bransch",
      "En handelsväg eller kanal som kopplar samman regioner",
    ],
    correctAnswer: "Något som ger energi till maskiner, t.ex. vatten, ånga eller el",
    tip: "Kraftkälla = varifrån maskiner får sin energi. Vatten, ånga, el.",
  },
  {
    id: "ludditer",
    question: "Vad gjorde Ludditerna?",
    options: [
      "De förstörde maskiner som de ansåg tog deras arbete",
      "De byggde de första ångmaskinerna och spinnmaskinerna",
      "De grundade fackföreningar för att kräva högre löner",
      "De erövrade kolonier och drev handel med andra länder",
    ],
    correctAnswer: "De förstörde maskiner som de ansåg tog deras arbete",
    tip: "Ludditer var arbetare som var emot de nya maskinerna. Vad gjorde de med dem?",
  },
  {
    id: "lopande_bandet",
    question: "Vad innebär löpande bandet i industrin?",
    options: [
      "Att varor eller delar förs vidare mellan arbetsstationer så att arbetet blir mer effektivt",
      "Att arbetare springer mellan maskiner för att hämta material",
      "Att band används för transport av varor mellan länder och hamnar",
      "Att fabriker bandar samman i karteller för att styra priser",
    ],
    correctAnswer: "Att varor eller delar förs vidare mellan arbetsstationer så att arbetet blir mer effektivt",
    tip: "Löpande band = varor rör sig mellan arbetsplatser. Tänk Ford och bilfabriker.",
  },
  {
    id: "manufaktur",
    question: "Vad är en manufaktur?",
    options: [
      "En verkstad eller fabrik där flera arbetare tillverkar varor, ofta med arbetsfördelning",
      "En lantbruksgård",
      "En handelsorganisation",
      "En typ av koloni",
    ],
    correctAnswer: "En verkstad eller fabrik där flera arbetare tillverkar varor, ofta med arbetsfördelning",
    tip: "Manufaktur = tillverkning på en plats med flera arbetare och arbetsfördelning.",
  },
  {
    id: "jordlos",
    question: "Vad menas med att vara jordlös?",
    options: [
      "Att man inte äger eller brukar egen jord och ofta är fattig eller arbetar för andra",
      "Att man odlar utan att använda plog",
      "Att jorden är förbrukad",
      "Att man bor i staden",
    ],
    correctAnswer: "Att man inte äger eller brukar egen jord och ofta är fattig eller arbetar för andra",
    tip: "Jordlös = utan jord. Många blev det när jordbruket förändrades – vad hände då?",
  },
  {
    id: "emigration",
    question: "Vad innebär emigration?",
    options: [
      "Att man lämnar sitt hemland för att bosätta sig i ett annat land",
      "Att man flyttar från landsbygd till stad",
      "Att man importerar varor",
      "Att man startar en fabrik",
    ],
    correctAnswer: "Att man lämnar sitt hemland för att bosätta sig i ett annat land",
    tip: "Emigration = ut ur landet. Motsatsen till immigration (in i landet).",
  },
  {
    id: "arbetarklass",
    question: "Vad menas med arbetarklass?",
    options: [
      "De som säljer sin arbetskraft för lön och ofta har få ägodelar",
      "De som äger fabriker och företag",
      "Bönder som odlar egen jord",
      "Kungligheter och adel",
    ],
    correctAnswer: "De som säljer sin arbetskraft för lön och ofta har få ägodelar",
    tip: "Arbetarklass = de som arbetar för lön i fabriker och verkstad, inte äger företag.",
  },
  {
    id: "medelklass",
    question: "Vad kännetecknar medelklassen under industrialiseringen?",
    options: [
      "Grupper mellan arbetare och de rikaste – t.ex. tjänstemän, läkare, köpmän",
      "Endast fabriksarbetare",
      "Endast bönder",
      "Endast adeln",
    ],
    correctAnswer: "Grupper mellan arbetare och de rikaste – t.ex. tjänstemän, läkare, köpmän",
    tip: "Medelklass = mellan arbetare och de rikaste. Tjänstemän, läkare, köpmän.",
  },
  {
    id: "fackforeningar",
    question: "Vad är fackföreningar?",
    options: [
      "Organisationer där arbetare går samman för att förbättra löner och arbetsvillkor",
      "Organisationer för fabriksägare",
      "Statliga myndigheter",
      "Religiösa grupper",
    ],
    correctAnswer: "Organisationer där arbetare går samman för att förbättra löner och arbetsvillkor",
    tip: "Fack = fackförening. Arbetare organiserar sig för bättre löner och villkor.",
  },
  {
    id: "konsroller",
    question: "Vad menas med könsroller i det här sammanhanget?",
    options: [
      "Förväntningar på vad män och kvinnor ska göra i samhället och i familjen",
      "Endast vem som får rösta",
      "Lagar om äktenskap",
      "Arbetsdelning enbart i fabriker",
    ],
    correctAnswer: "Förväntningar på vad män och kvinnor ska göra i samhället och i familjen",
    tip: "Könsroller = roller för män respektive kvinnor – arbete, familj, samhälle.",
  },
  {
    id: "i_u_land",
    question: "Vad menas med I-land och U-land?",
    options: [
      "I-länder är industrialiserade/utvecklade, U-länder är utvecklingsländer",
      "I-länder importerar, U-länder exporterar",
      "I-länder är i Norden, U-länder i Afrika",
      "Det är samma sak",
    ],
    correctAnswer: "I-länder är industrialiserade/utvecklade, U-länder är utvecklingsländer",
    tip: "I-land = industrialiserat/utvecklat. U-land = utvecklingsland.",
  },
  // —— Personer ——
  {
    id: "arkwright",
    question: "Vad är Richard Arkwright känd för?",
    options: [
      "Han använde vattenkraft till spinnmaskiner (1769)",
      "Han uppfann den flygande skytteln",
      "Han uppfann ångmaskinen",
      "Han byggde ångbåtar",
    ],
    correctAnswer: "Han använde vattenkraft till spinnmaskiner (1769)",
    tip: "Arkwright – vattenkraft och spinnmaskiner. Water Frame 1769.",
  },
  {
    id: "james_watt",
    question: "Vad gjorde James Watt?",
    options: [
      "Han förbättrade ångmaskinen (1765)",
      "Han uppfann Spinning Jenny",
      "Han uppfann den flygande skytteln",
      "Han byggde den första ångbåten",
    ],
    correctAnswer: "Han förbättrade ångmaskinen (1765)",
    tip: "James Watt = ångmaskinen. 1760-talet. En av de viktigaste uppfinningarna.",
  },
  {
    id: "fulton",
    question: "Vad är Robert Fulton känd för?",
    options: [
      "Ångbåten 1807",
      "Den flygande skytteln",
      "Spinning Jenny",
      "Förbättrad ångmaskin",
    ],
    correctAnswer: "Ångbåten 1807",
    tip: "Fulton = ångbåt. Transport på vattnet med ångkraft.",
  },
  // —— Instuderingsfrågor omvandlade till flerval ——
  {
    id: "kolonialism_vad",
    question: "Vad var de europeiska makterna främst ute efter när de erövrade kolonier?",
    options: [
      "Råvaror, mark, makt och möjlighet att sälja varor",
      "Endast att sprida religionen",
      "Endast att avskaffa slaveri",
      "Endast att bygga skolor",
    ],
    correctAnswer: "Råvaror, mark, makt och möjlighet att sälja varor",
    tip: "Vad behövde industriländerna? Tänk råvaror, mark och varumarknader.",
  },
  {
    id: "varfor_revolution",
    question: "Varför kallas det 'industriella revolutionen' trots att det varade i över hundra år?",
    options: [
      "Förändringarna var så stora och snabba att samhället förändrades radikalt – därav begreppet revolution",
      "För att det var ett krig som varade i 100 år",
      "För att alla länder revolutionerade samtidigt",
      "Det är ett misstag i historieböckerna",
    ],
    correctAnswer: "Förändringarna var så stora och snabba att samhället förändrades radikalt – därav begreppet revolution",
    tip: "Revolution behöver inte vara kort – det handlar om hur genomgripande förändringen var.",
  },
  {
    id: "historiebruk",
    question: "Varför skiljer sig historien om den industriella revolutionen mellan t.ex. Storbritannien och Sverige?",
    options: [
      "Varje land betonar sin egen roll och sin egen historia – historiebruk",
      "För att det är olika språk",
      "För att Sverige inte industrialiserades",
      "För att bara Storbritannien hade revolution",
    ],
    correctAnswer: "Varje land betonar sin egen roll och sin egen historia – historiebruk",
    tip: "Historiebruk = hur vi använder historien. Varför skriver Sverige och Storbritannien olika?",
  },
  {
    id: "vetenskap_ny_religion",
    question: "Vad menas med att 'vetenskapen blev den nya religionen'?",
    options: [
      "Att förklaringar och tro på framsteg alltmer byggde på vetenskap i stället för bara religion",
      "Att religion förbjöds",
      "Att alla blev ateister",
      "Att kyrkan styrde vetenskapen",
    ],
    correctAnswer: "Att förklaringar och tro på framsteg alltmer byggde på vetenskap i stället för bara religion",
    tip: "Vetenskapen gav nya svar på frågor som tidigare religion svarat på.",
  },
  {
    id: "rasindelning",
    question: "Varför var det viktigt för många europeiska erövrare att dela in människor i raser?",
    options: [
      "För att rättfärdiga slaveri, kolonialism och överordning – 'vi är bättre'",
      "För att hjälpa alla människor lika",
      "För att avskaffa slaveri",
      "För att alla skulle få rösträtt",
    ],
    correctAnswer: "För att rättfärdiga slaveri, kolonialism och överordning – 'vi är bättre'",
    tip: "Rasindelning användes för att motivera att vissa grupper skulle styra eller förtrycka andra.",
  },
  {
    id: "fabriker_varfor",
    question: "Varför kom fabriker och industrier till under den industriella revolutionen?",
    options: [
      "Förlagssystem och urbanisering samlade arbetskraft och kapital; ny teknik gjorde fabriksproduktion lönsam",
      "För att bönder tvingades in i fabriker av kungen och adeln mot sin vilja",
      "För att det inte fanns någon annan möjlighet att försörja sig efter krig och pest",
      "För att kyrkan krävde det och hotade med bannlysning annars",
    ],
    correctAnswer: "Förlagssystem och urbanisering samlade arbetskraft och kapital; ny teknik gjorde fabriksproduktion lönsam",
    tip: "Förlagssystem samlade arbete; urbanisering = fler i städer. Teknik = fabriker lönsamma.",
  },
  {
    id: "uppfinningar_viktiga",
    question: "Varför var uppfinningar som flygande skytteln, Spinning Jenny och ångmaskinen viktiga för den industriella revolutionen?",
    options: [
      "De ökade produktionstakten, minskade kostnader och gjorde fabriksproduktion möjlig",
      "De användes bara i hemmen och på små bruk utan större betydelse",
      "De var bara viktiga i USA och hade ingen effekt i Europa",
      "De ersatte all handel och gjorde att ingen behövde importera varor längre",
    ],
    correctAnswer: "De ökade produktionstakten, minskade kostnader och gjorde fabriksproduktion möjlig",
    tip: "Uppfinningar = mer producerat, billigare, möjlighet att driva fabriker.",
  },
  {
    id: "bakterier",
    question: "Varför var det viktigt att forskare upptäckte att det finns bakterier?",
    options: [
      "Man kunde bättre förstå och bekämpa sjukdomar och förbättra hälsa och hygien",
      "För att kunna bygga fler fabriker och driva maskiner effektivare",
      "För att avskaffa slaveri och motivera kolonial expansion",
      "För att förbättra ångmaskiner och andra kraftkällor",
    ],
    correctAnswer: "Man kunde bättre förstå och bekämpa sjukdomar och förbättra hälsa och hygien",
    tip: "Bakterier förklarar sjukdomar. Bättre hygien och medicin blev möjliga.",
  },
  {
    id: "snobollseffekt",
    question: "Vad menas med 'snöbollseffekten' i samband med den industriella revolutionen?",
    options: [
      "Att en förändring leder till fler förändringar – orsaker och konsekvenser bygger på varandra",
      "Att allt bara handlade om vinterkrig och militära konflikter i Norden",
      "Att bara ett land industrialiserades och andra stod stilla",
      "Att revolutionen varade exakt 100 år och sedan upphörde helt",
    ],
    correctAnswer: "Att en förändring leder till fler förändringar – orsaker och konsekvenser bygger på varandra",
    tip: "Snöbollseffekt = en sak leder till nästa. Orsaker och konsekvenser i kedjor.",
  },
  {
    id: "usa_industri",
    question: "Varför kunde USA växa fram som en industristat?",
    options: [
      "Råvaror, kapital, invandring, stora marknader och tillgång till teknik och investeringar",
      "Endast på grund av slaveri och billig arbetskraft i södern",
      "Endast på grund av krig med Storbritannien som gav USA kolonier",
      "Sverige och andra europeiska länder hjälpte till med kapital och teknik",
    ],
    correctAnswer: "Råvaror, kapital, invandring, stora marknader och tillgång till teknik och investeringar",
    tip: "USA hade stora fördelar: råvaror, många människor, stor marknad, teknik.",
  },
  {
    id: "sverige_industrier",
    question: "Vilka var bland de viktigaste industrierna för Sverige i slutet av 1800-talet och början av 1900-talet?",
    options: [
      "Skogsindustri, gruvor, stål och verkstadsindustri, textil",
      "Endast jordbruk och boskapsskötsel utan industri",
      "Endast fiske och skeppsbyggeri vid kusterna",
      "Endast handel och bankverksamhet utan tillverkning",
    ],
    correctAnswer: "Skogsindustri, gruvor, stål och verkstadsindustri, textil",
    tip: "Sverige hade skog, järnmalm, vattenkraft – vilka industrier byggde på det?",
  },
  {
    id: "livet_forandrades",
    question: "På vilket sätt förändrades livet för många när Sverige industrialiserades?",
    options: [
      "Urbanisering, trångboddhet i städer, nya arbetsvillkor, förändrade könsroller och kvinnors roll",
      "Alla blev rika direkt och fattigdomen försvann helt",
      "Ingen förändring i vardagen – livet fortsatte som förr",
      "Bara bönder påverkades medan stadsborna levde som tidigare",
    ],
    correctAnswer: "Urbanisering, trångboddhet i städer, nya arbetsvillkor, förändrade könsroller och kvinnors roll",
    tip: "Fler flyttade till städer – trångt, nya jobb, kvinnors roll förändrades.",
  },
  {
    id: "emigration_usa",
    question: "Varför började många svenskar emigrera till USA mot slutet av 1800-talet?",
    options: [
      "Fattigdom, brist på jord och arbete, hungerår och förhoppning om bättre liv i USA",
      "För att USA tvingade dem genom att erövra svenska territorier",
      "För att Sverige förbjöd jordbruk och lade beslag på all mark",
      "Endast av religiösa skäl och för att sprida sin tro",
    ],
    correctAnswer: "Fattigdom, brist på jord och arbete, hungerår och förhoppning om bättre liv i USA",
    tip: "Många hade det svårt i Sverige – brist på jord, arbete. USA lockade med möjligheter.",
  },
  // —— Från Indi 1 & indi2 (tidslinje, orsaker, uppfinningar, Sverige) ——
  {
    id: "revolution_def",
    question: "Vad innebär revolution i historiska sammanhang enligt materialet?",
    options: [
      "En snabb förändring av ett lands politiska, ekonomiska och sociala system",
      "Ett krig som varar i minst tio år mellan två eller flera länder",
      "Byttande av kung eller drottning utan andra samhällsförändringar",
      "Införande av demokrati och allmän rösträtt i ett land",
    ],
    correctAnswer: "En snabb förändring av ett lands politiska, ekonomiska och sociala system",
    tip: "Materialet säger: revolution = omvälvning, snabb förändring av politik, ekonomi och samhälle.",
  },
  {
    id: "sjuarskriget_indien",
    question: "Vad fick Storbritannien genom att besegra Frankrike i sjuårskriget (1756–1763)?",
    options: [
      "Kontroll över handeln med Indien",
      "Kolonierna i Nordamerika",
      "Alla franska fabriker",
      "Spaniens flotta",
    ],
    correctAnswer: "Kontroll över handeln med Indien",
    tip: "Storbritannien besegrade Frankrike 1756–1763. Vad gav det britterna i handel?",
  },
  {
    id: "digerdoden",
    question: "Vilken konsekvens hade Digerdöden (1347–1351) på arbetslivet i Europa?",
    options: [
      "Brist på arbetskraft – arbetare blev mer värdefulla och löner steg",
      "Alla blev rikare direkt eftersom det fanns mer att ärva",
      "Livegenskapen stärktes överallt och bönder förlorade alla rättigheter",
      "Jordbruket behövde fler arbetare och importerade dem från Asien",
    ],
    correctAnswer: "Brist på arbetskraft – arbetare blev mer värdefulla och löner steg",
    tip: "Digerdöden dödade många – färre arbetare. Vad hände med löner och livegenskap?",
  },
  {
    id: "poitiers_toledo",
    question: "Varför nämns städerna Toledo och Córdoba i samband med Europas utveckling?",
    options: [
      "Där återupptäcktes gamla texter och vetenskap som påskyndade utvecklingen i Europa",
      "Där startade den industriella revolutionen med de första fabrikerna",
      "Där byggdes de första ångmaskinerna och spinnmaskinerna",
      "Där fanns de största kolgruvorna som drev industrin",
    ],
    correctAnswer: "Där återupptäcktes gamla texter och vetenskap som påskyndade utvecklingen i Europa",
    tip: "I Spanien fanns kunskap bevarad från antiken. Europa återupptäckte den – renässans.",
  },
  {
    id: "water_frame",
    question: "Vad var Water Frame (1769)?",
    options: [
      "En spinnmaskin driven av vattenkraft",
      "En ångmaskin",
      "En vävstol",
      "Ett ånglok",
    ],
    correctAnswer: "En spinnmaskin driven av vattenkraft",
    tip: "Water Frame = vatten + ram. Arkwright 1769. Spinnmaskin med vattenkraft.",
  },
  {
    id: "spinning_mule",
    question: "Vad var Spinning Mule (1779)?",
    options: [
      "En förbättrad spinnmaskin",
      "En ångmaskin",
      "En transportvagn i gruvor",
      "En symaskin",
    ],
    correctAnswer: "En förbättrad spinnmaskin",
    tip: "Spinning Mule 1779 – en utveckling av spinnmaskinerna, mer effektiv.",
  },
  {
    id: "jarnvag_1825",
    question: "Vad hände 1825 med järnvägen?",
    options: [
      "Den första järnvägen för passagerare och gods öppnades",
      "Ångloket uppfanns",
      "Sverige fick sin första järnväg",
      "Järnvägen förbjöds i Storbritannien",
    ],
    correctAnswer: "Den första järnvägen för passagerare och gods öppnades",
    tip: "Årtal 1825 – transportrevolutionen. Järnväg för passagerare och gods.",
  },
  {
    id: "storbritannien_befolkning",
    question: "Vad hände med befolkningen i Storbritannien mellan 1750 och 1851?",
    options: [
      "Den fördubblades",
      "Den minskade",
      "Den förbley ungefär lika",
      "Den tredubblades",
    ],
    correctAnswer: "Den fördubblades",
    tip: "Perioden 1750–1851. Nya jordbruksmetoder gav mer mat – befolkningen växte.",
  },
  {
    id: "usa_massproduktion",
    question: "Vad utvecklades särskilt i USA under industrialiseringen?",
    options: [
      "Massproduktion, bland annat med löpande band i fabriker",
      "Endast jordbruksmaskiner och mekanisering av odlingen",
      "Endast ångbåtar och järnvägar för transport",
      "Endast textilindustri utan andra branscher",
    ],
    correctAnswer: "Massproduktion, bland annat med löpande band i fabriker",
    tip: "USA hade råvaror, stor befolkning, stora marknader. Löpande band = massproduktion.",
  },
  {
    id: "tyskland_industri",
    question: "Varför blev Tyskland snabbt ett starkt industriland?",
    options: [
      "Utbildning, naturresurser och stor inre marknad",
      "Endast tack vare kolonier och handel med utlandet",
      "Endast tack vare USA:s hjälp och lån av kapital",
      "Endast tack vare billig arbetskraft och låga löner",
    ],
    correctAnswer: "Utbildning, naturresurser och stor inre marknad",
    tip: "Tyskland blev starkt industriland – tänk utbildning, råvaror och inre marknad.",
  },
  {
    id: "frankrike_langsammare",
    question: "Hur industrialiserades Frankrike jämfört med Storbritannien?",
    options: [
      "Långsammare",
      "Snabbare",
      "Ungefär samtidigt och i samma takt",
      "Frankrike industrialiserades aldrig",
    ],
    correctAnswer: "Långsammare",
    tip: "Storbritannien var först. Frankrike följde – men i vilken takt?",
  },
  {
    id: "skiftesreformer",
    question: "Vad gjorde skiftesreformerna i Sverige?",
    options: [
      "Små åkrar slogs ihop till större – jordbruket blev mer effektivt",
      "All jord förstatligades och bönderna blev statens anställda",
      "Alla bönder fick lika stora gårdar oavsett tidigare storlek",
      "Jordbruket avskaffades och ersattes av import av spannmål",
    ],
    correctAnswer: "Små åkrar slogs ihop till större – jordbruket blev mer effektivt",
    tip: "Skifte = omfördelning av åkrar. I Sverige slogs små bitar ihop till större.",
  },
  {
    id: "de_laval",
    question: "Vad uppfann Gustaf de Laval?",
    options: [
      "Separatorn",
      "Kullagret",
      "Ångmaskinen",
      "Spinning Jenny",
    ],
    correctAnswer: "Separatorn",
    tip: "Gustaf de Laval – svensk uppfinnare. Separatorn används bl.a. i mjölkhantering.",
  },
  {
    id: "wingquist",
    question: "Vad utvecklade Sven Wingquist?",
    options: [
      "Kullagret",
      "Separatorn",
      "Symaskinen",
      "Ångloket",
    ],
    correctAnswer: "Kullagret",
    tip: "Sven Wingquist – kullagret. Viktigt för maskiner och rotation.",
  },
  {
    id: "asea",
    question: "Vilket svenskt företag nämns som exempel på verkstadsindustri?",
    options: [
      "ASEA",
      "Volvo",
      "Ericsson",
      "LKAB",
    ],
    correctAnswer: "ASEA",
    tip: "Verkstadsindustri = maskiner och utrustning. Ett känt svenskt företag från den tiden.",
  },
  {
    id: "sverige_naturresurser",
    question: "Vilka naturresurser var viktiga för Sveriges industrialisering?",
    options: [
      "Skog, järnmalm och vattenkraft",
      "Endast kol",
      "Endast olja",
      "Endast guld",
    ],
    correctAnswer: "Skog, järnmalm och vattenkraft",
    tip: "Sverige hade ingen kol men mycket skog, järn i bergen och vattenfall.",
  },
  {
    id: "emigration_period",
    question: "Under vilken period emigrerade särskilt många människor från Europa?",
    options: [
      "Mellan 1840 och 1940",
      "Mellan 1700 och 1750",
      "Mellan 1945 och 1960",
      "Mellan 1600 och 1650",
    ],
    correctAnswer: "Mellan 1840 och 1940",
    tip: "Den stora emigrationen från Europa – ungefär 100 år. När började och när avtog den?",
  },
  {
    id: "svenskar_usa_antal",
    question: "Ungefär hur många svenskar emigrerade till USA under den stora emigrationstiden?",
    options: [
      "Cirka 1,2 miljoner",
      "Cirka 100 000",
      "Cirka 5 miljoner",
      "Cirka 50 000",
    ],
    correctAnswer: "Cirka 1,2 miljoner",
    tip: "Siffran är stor – över en miljon svenskar. Tänk 1–2 miljoner.",
  },
  {
    id: "svenskar_usa_stater",
    question: "I vilka amerikanska delstater bosatte sig många svenskar?",
    options: [
      "Minnesota, Illinois och Wisconsin",
      "Kalifornien, Texas och Florida",
      "New York, New Jersey och Massachusetts",
      "Endast New York",
    ],
    correctAnswer: "Minnesota, Illinois och Wisconsin",
    tip: "Många svenskar bosatte sig i mellanvästern – tre delstater med M, I, W.",
  },
  {
    id: "arbetarrorelsen",
    question: "För vad kämpade arbetarrörelsen?",
    options: [
      "Bättre löner, kortare arbetstid och bättre arbetsmiljö",
      "Avskaffande av alla fabriker och återgång till hemmaproduktion",
      "Högre skatter för företag och statlig kontroll av industrin",
      "Endast rösträtt och politisk representation utan andra krav",
    ],
    correctAnswer: "Bättre löner, kortare arbetstid och bättre arbetsmiljö",
    tip: "Arbetare organiserade sig – fackföreningar. Vad ville de förbättra?",
  },
  {
    id: "konsekvenser_langsikt",
    question: "Vilka långsiktiga konsekvenser hade industrialiseringen?",
    options: [
      "Ekonomisk tillväxt och bättre levnadsstandard, men också miljöproblem och klasskillnader",
      "Endast positiva – alla blev rikare och fattigdomen försvann helt",
      "Endast negativa – allt blev sämre och levnadsstandarden sjönk överallt",
      "Inga konsekvenser – samhället förblev oförändrat i det långa loppet",
    ],
    correctAnswer: "Ekonomisk tillväxt och bättre levnadsstandard, men också miljöproblem och klasskillnader",
    tip: "Både positiva (tillväxt, levnadsstandard) och negativa (miljö, klyftor) konsekvenser.",
  },
  {
    id: "industrilander_efter_storbritannien",
    question: "Vilka länder industrialiserades efter Storbritannien under 1800-talet?",
    options: [
      "USA, Frankrike, Tyskland och Belgien",
      "Endast USA som följde direkt efter Storbritannien",
      "Endast Sverige och de andra nordiska länderna",
      "Inga – bara Storbritannien industrialiserades under 1800-talet",
    ],
    correctAnswer: "USA, Frankrike, Tyskland och Belgien",
    tip: "Storbritannien först. Sedan följde andra länder under 1800-talet – vilka?",
  },
  {
    id: "jordbruk_1700_metoder",
    question: "Vilka jordbruksförbättringar nämns under 1700-talet?",
    options: [
      "Bättre plogar av järn, utdikning av kärr, nya växter och bättre boskapsraser",
      "Endast konstgödsel och kemiska tilläggsmedel i marken",
      "Endast växelbruk och växling mellan olika grödor på åkrarna",
      "Endast större åkrar utan andra förbättringar av redskap eller djur",
    ],
    correctAnswer: "Bättre plogar av järn, utdikning av kärr, nya växter och bättre boskapsraser",
    tip: "Jordbruket förbättrades med nya redskap, odling och djur – flera saker nämns.",
  },
  {
    id: "kol_jarn",
    question: "Varför var kol viktigt för Storbritanniens industri?",
    options: [
      "Det gjorde det möjligt att producera järn och stål billigare",
      "Det användes bara till uppvärmning av hem och verkstäder",
      "Det fanns inte i Storbritannien som var tvungen att importera allt",
      "Det ersatte vattenkraft helt och drev alla maskiner i fabrikerna",
    ],
    correctAnswer: "Det gjorde det möjligt att producera järn och stål billigare",
    tip: "Kol behövdes för att smälta järn. Storbritannien hade mycket kol.",
  },
  {
    id: "transportrevolution",
    question: "Vad byggdes under transportrevolutionen?",
    options: [
      "Kanaler, bättre vägar och järnvägar",
      "Endast flygplatser och tidiga flygplan för persontransport",
      "Endast hamnar och skeppsbyggen vid kusterna",
      "Endast broar och tunnlar som kopplade samman städerna",
    ],
    correctAnswer: "Kanaler, bättre vägar och järnvägar",
    tip: "Industrin behövde transportera varor – vad byggdes? Kanaler, vägar, järnväg.",
  },
  {
    id: "symaskin_sverige",
    question: "Vad gjorde symaskinen för textilindustrin i Sverige?",
    options: [
      "Kläder kunde produceras mycket snabbare – fler kunde köpa färdiga kläder",
      "Den användes bara i hemmen och hade ingen betydelse för industrin",
      "Den förbjöds eftersom den tog arbete från hantverkarna",
      "Den ersatte alla andra maskiner och blev den enda i textilfabrikerna",
    ],
    correctAnswer: "Kläder kunde produceras mycket snabbare – fler kunde köpa färdiga kläder",
    tip: "Symaskin = snabbare tillverkning av kläder. Fler köpte färdiga kläder istället för att sy själva.",
  },
  {
    id: "frihandel_1800",
    question: "Vad hände med handel och företagande i Sverige under 1800-talet?",
    options: [
      "Många regler avskaffades – frihandel gjorde det lättare att sälja mellan länder",
      "All handel förbjöds och Sverige blev helt självförsörjande",
      "Endast inrikes handel tilläts medan export och import stoppades",
      "Kungen tog över all handel och staten ägde alla handelsföretag",
    ],
    correctAnswer: "Många regler avskaffades – frihandel gjorde det lättare att sälja mellan länder",
    tip: "Under 1800-talet togs många handelshinder bort. Frihandel = friare handel mellan länder.",
  },
  {
    id: "sagverk_norrland",
    question: "Varifrån kom skog som användes i den svenska sågverksindustrin?",
    options: [
      "Norrland",
      "Skåne",
      "Endast utomlands",
      "Sverige hade ingen sågverksindustri",
    ],
    correctAnswer: "Norrland",
    tip: "Sågverksindustrin behövde skog. Var i Sverige fanns mycket skog?",
  },
];

/**
 * Slumpar ordning på frågor och på svarsalternativ.
 * Returnerar ny array; originaldata ändras inte.
 * @param topic - "industriella" eller "nationalism"
 */
export function getShuffledQuestions(topic: QuizTopic): QuizQuestion[] {
  const source =
    topic === "nationalism" ? quizQuestionsNationalism : quizQuestions;
  const copied = [...source];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied.map((q) => ({
    ...q,
    options: shuffleArray([...q.options]),
  }));
}

/**
 * Slumpar ordning på en array (Fisher–Yates).
 */
function shuffleArray<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
