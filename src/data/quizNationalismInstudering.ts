import type { QuizQuestion } from "./quizQuestionTypes";

/**
 * En flervalsfråga per uppgift i:
 * docs/Instuderingsfrågor - Nationalism & Imperialism.txt
 * (Sol Nova 8, nationalism s. 110–126 + imperialism; undantag: ren bänkdiskussion s. 127).
 * Bildfråga s. 119 ersatts med motsvarande text om Margherita/nationalism.
 */
export const quizQuestionsNationalismInstudering: QuizQuestion[] = [
  {
    id: "nat-v26-1",
    question:
      "Vad betyder ordet nationalism? (instudering – presentationen i materialet)",
    options: [
      "En ide om att folk med gemensam kultur, språk och historia hör ihop och ofta önskar egen stat eller stark tillhörighet till nationen",
      "Att alla länder i världen ska slås ihop till ett enda världsrike utan gränser",
      "Enbart handelspolitik utan känsla av tillhörighet till land eller kultur",
      "Samma sak som demokrati – bara att alla får rösta oavsett nationell identitet",
    ],
    correctAnswer:
      "En ide om att folk med gemensam kultur, språk och historia hör ihop och ofta önskar egen stat eller stark tillhörighet till nationen",
    tip: "Nation + känsla av gemenskap och politiska krav – se läroboken.",
  },
  {
    id: "nat-v26-2",
    question:
      "Vilken betydelse hade franska revolutionen för nationalismens framväxt? (112–113)",
    options: [
      "Människor blev medborgare med rättigheter i staten i stället för bara undersåtar – stärkte idén om folket och nationen",
      "Den avskaffade alla nationer och införde ett enda världsrike utan språk eller gränser",
      "Den gjorde så att endast kungen fick tala om nation och alla andra tystades",
      "Den hade ingen betydelse för nationalismen utan bara för jordbruk och skatter",
    ],
    correctAnswer:
      "Människor blev medborgare med rättigheter i staten i stället för bara undersåtar – stärkte idén om folket och nationen",
    tip: "Medborgare, folk, nation – koppling till politiska rättigheter.",
  },
  {
    id: "nat-v26-3",
    question:
      "Vilka faktorer gör att människor kan känna gemenskap och ”bygga” en nation – och vilka typer av symboler och begrepp används ofta för att väcka stolthet över sitt land? Välj den svarsalternativ som bäst listar fyra typiska exempel. (instudering)",
    options: [
      "Flagga, nationalspråk/historia i skolan, nationalsång/högtider, idrotts- eller kulturhjältar som representerar nationen",
      "Endast valuta och inget annat – inga symboler eller berättelser används",
      "Endast religiösa skrifter utan koppling till språk eller historia",
      "Endast gränser på kartan utan kultur, språk eller gemensamma minnen",
    ],
    correctAnswer:
      "Flagga, nationalspråk/historia i skolan, nationalsång/högtider, idrotts- eller kulturhjältar som representerar nationen",
    tip: "I prov: nämn gärna fyra konkreta ord – flagga, språk, historia, sång, idrott …",
  },
  {
    id: "nat-v26-4a",
    question:
      "Vilka bakomliggande orsaker fanns till att vilja ena de tyska staterna till ett enda rike? (114–115, instudering A)",
    options: [
      "Nationalistisk önskan om politisk enhet, ekonomiska vinster med gemensam marknad, språklig gemenskap och militär styrka under ledande stater som Preussen",
      "Endast för att påven krävde det utan stöd bland tysktalande",
      "Endast för att alla tyska stater redan var enade sedan medeltiden utan splittring",
      "Endast för att Frankrike betalade alla kostnader utan motprestation",
    ],
    correctAnswer:
      "Nationalistisk önskan om politisk enhet, ekonomiska vinster med gemensam marknad, språklig gemenskap och militär styrka under ledande stater som Preussen",
    tip: "Tänk Bismarck, krig, ekonomi, gemensamt språk.",
  },
  {
    id: "nat-v26-4b",
    question:
      "Hur påverkades Europa och världen av den nyskapade tyska nationen (Tyska kejsarriket)? (114–115, instudering B)",
    options: [
      "En ny stormakt i Europas mitt som förändrade maktbalansen, ökade spänningar med grannar (t.ex. Frankrike) och påverkade kolonial konkurrens",
      "Tyskland försvann direkt från kartan utan att påverka någon annan stat",
      "Endast Italien påverkades medan övriga Europa förblev oförändrat",
      "Ingen märkte av Tyskland eftersom det saknade industri och armé",
    ],
    correctAnswer:
      "En ny stormakt i Europas mitt som förändrade maktbalansen, ökade spänningar med grannar (t.ex. Frankrike) och påverkade kolonial konkurrens",
    tip: "Ny stormakt → förändrad politik fram till första världskriget.",
  },
  {
    id: "nat-v26-5",
    question:
      "Vilka likheter fanns mellan enandet av Tyskland och enandet av Italien? (116–118)",
    options: [
      "Nationalistiska rörelser och ledande stater (Preussen respektive Sardinien-Piemonte) enade många småstater till en nation genom diplomati och krig",
      "Båda skedde utan krig och utan nationalistiska idéer, enbart genom slump",
      "Båda leddes av Storbritannien som koloni över hela halvön",
      "Båda var redan enade under romarriket och behövde inte förändras",
    ],
    correctAnswer:
      "Nationalistiska rörelser och ledande stater (Preussen respektive Sardinien-Piemonte) enade många småstater till en nation genom diplomati och krig",
    tip: "Bismarck/Cavour, krig, småstater → en stat.",
  },
  {
    id: "nat-v26-6",
    question: "Vad menas med banal nationalism?",
    options: [
      "Att nationen återskapas i vardagen genom självklara saker som flaggor, pengar, idrott och språk – ofta utan att man tänker på det",
      "Endast våldsamma demonstrationer och hat mot minoriteter varje dag",
      "Att nationalism inte finns i moderna samhällen",
      "Att endast kungen får visa flagga medan folket ska vara neutralt",
    ],
    correctAnswer:
      "Att nationen återskapas i vardagen genom självklara saker som flaggor, pengar, idrott och språk – ofta utan att man tänker på det",
    tip: "Banal = vardaglig, nästan osynlig nationalism.",
  },
  {
    id: "nat-v26-7",
    question: "Vad menas med aggressiv (”hot”) nationalism?",
    options: [
      "Att det egna folket och landet sätts främst med stark känsla av överlägsenhet; kan leda till främlingsfientlighet och konflikt",
      "Samma som banal nationalism – bara flaggor utan politisk spänning",
      "Att man avvisar all nationell känsla och vill leva utan identitet",
      "Att endast ekonomi styr utan några känslor för nationen",
    ],
    correctAnswer:
      "Att det egna folket och landet sätts främst med stark känsla av överlägsenhet; kan leda till främlingsfientlighet och konflikt",
    tip: "Hot-full, exkluderande nationalism – jämför med banal.",
  },
  {
    id: "nat-v26-8",
    question:
      "Varför hålls berättelsen om pizzan Margherita (tomat, mozzarella, basilika som Italiens färger) levande – och på vilket sätt är detta nationalism/historiebruk? (motsvarar bildfrågan s. 119 i textform)",
    options: [
      "Berättelsen knyter mat och symboler till italiensk identitet och stolthet – historiebruk som stärker nationell känsla",
      "Den har bara med smak att göra och ingen koppling till identitet eller historia",
      "Den bevisar att Italien aldrig haft nationalism",
      "Den kommer ursprungligen från Tyskland och har flyttats av misstag",
    ],
    correctAnswer:
      "Berättelsen knyter mat och symboler till italiensk identitet och stolthet – historiebruk som stärker nationell känsla",
    tip: "Historiebruk = hur historiska berättelser används i dag.",
  },
  {
    id: "nat-v26-9",
    question:
      "Vad var Osmanska riket för något? (instudering A)",
    options: [
      "Ett mångnationellt imperium centrerat kring dagens Turkiet som under lång tid styrde stora områden i sydöstra Europa, Mellanöstern och Nordafrika",
      "Ett litet kungarike i Skandinavien utan kolonier",
      "Samma som Heliga romerska riket i västra Europa under 1900-talet",
      "En republik i Sydamerika utan koppling till Balkan eller Mellanöstern",
    ],
    correctAnswer:
      "Ett mångnationellt imperium centrerat kring dagens Turkiet som under lång tid styrde stora områden i sydöstra Europa, Mellanöstern och Nordafrika",
    tip: "Osmanerna, sultanen, stort men sönderfallande på 1800-talet.",
  },
  {
    id: "nat-v26-10",
    question:
      "Varför kallades Osmanska riket för ”Europas sjuke man”? (121, instudering B)",
    options: [
      "Uttryck för att riket var svagt, pressat av inre splittring, nationalism bland folkgrupper och yttre hot – ansågs nära kollaps",
      "För att riket hade de friskaste invånarna och starkast ekonomi i hela världen",
      "För att det låg i Amerika och inte i Europa",
      "För att ingen hade hört talas om det i diplomatin",
    ],
    correctAnswer:
      "Uttryck för att riket var svagt, pressat av inre splittring, nationalism bland folkgrupper och yttre hot – ansågs nära kollaps",
    tip: "Sjuke man = svag, sårbar stormakt.",
  },
  {
    id: "nat-v26-11",
    question:
      "På vilket sätt kombinerade man industrialism och nationalism – och hur kan det liknas vid en industriell och kulturell tävling mellan länder? (instudering)",
    options: [
      "T.ex. världsutställningar där länder visade upp maskiner, produkter och konst som nationella prestationer – tävlan om modernitet och stolthet",
      "Genom att förbjuda all industri och bara odla spannmål nationellt",
      "Genom att nationalism och fabriker aldrig förekom samtidigt i historien",
      "Endast genom krig utan några fredliga utställningar eller kultur",
    ],
    correctAnswer:
      "T.ex. världsutställningar där länder visade upp maskiner, produkter och konst som nationella prestationer – tävlan om modernitet och stolthet",
    tip: "London 1851 m.fl. – nationell tävlan i teknik och kultur.",
  },
  {
    id: "nat-v26-12",
    question:
      "Hur påverkade slaveriets avskaffande den europeiska koloniseringen under 1800-talet? (133)",
    options: [
      "När slavhandeln och slaveri avvecklades sökte europeiska makter nya sätt att kontrollera territorier och utnyttja resurser och arbetskraft i kolonier",
      "Koloniseringen upphörde helt och alla europeiska flaggor försvann från Afrika och Asien",
      "Ingen förändring skedde alls i kolonial politik efter slaveriets avskaffande",
      "Endast USA koloniserade medan Europa ägnade sig åt jordbruk hemma",
    ],
    correctAnswer:
      "När slavhandeln och slaveri avvecklades sökte europeiska makter nya sätt att kontrollera territorier och utnyttja resurser och arbetskraft i kolonier",
    tip: "Kolonial kontroll, kontrakt, skatter, råvaror – nya former av utbyte.",
  },
  {
    id: "nat-v26-13",
    question:
      "Vilka är imperialismens fyra kännetecken enligt presentationen/läromedlet? (instudering)",
    options: [
      "Kolonial expansion, ekonomisk exploatering, kulturell dominans, militär överlägsenhet",
      "Demokrati, fred, miljö och välgörenhet utan maktaspekter",
      "Endast handel och inget annat kännetecken",
      "Skolor, sjukhus och vägar – inget annat räknas som imperialism",
    ],
    correctAnswer:
      "Kolonial expansion, ekonomisk exploatering, kulturell dominans, militär överlägsenhet",
    tip: "Fyra pelare: territorium, ekonomi, kultur, militär.",
  },
  {
    id: "nat-v26-14",
    question:
      "Vad innebär ”söndra och härska” (divide et impera) – och hur kunde kolonisatörer använda strategin? (instudering)",
    options: [
      "Att spela ut grupper mot varandra så att kolonialmakten lättare kunde behålla kontroll över ett område",
      "Att alltid ena alla folkgrupper under ett språk utan splittring",
      "Att avskaffa alla arméer och låta kolonierna styra sig själva direkt",
      "Att bara bygga järnvägar utan politisk strategi",
    ],
    correctAnswer:
      "Att spela ut grupper mot varandra så att kolonialmakten lättare kunde behålla kontroll över ett område",
    tip: "Splittra opposition – klassiskt kolonialt grepp.",
  },
  {
    id: "nat-v26-15",
    question:
      "Vad var ”kapplöpningen om Afrika” (Scramble for Africa)? (instudering A)",
    options: [
      "Europeiska stormakters tävlan om att erövra och kolonisera afrikanska områden under slutet av 1800-talet",
      "Ett fredligt idrotts-VM i Afrika utan europeiskt deltagande",
      "Ett avtal där alla afrikanska stater fick samma gränser som i dag utan konflikt",
      "En handelskonflikt bara mellan två städer i Europa utan Afrika",
    ],
    correctAnswer:
      "Europeiska stormakters tävlan om att erövra och kolonisera afrikanska områden under slutet av 1800-talet",
    tip: "1880–1900-tal – nästan hela Afrika delades in.",
  },
  {
    id: "nat-v26-16",
    question:
      "Varför var imperialismen en bidragande orsak till första världskriget? (instudering B)",
    options: [
      "Tävlan om kolonier, råvaror och inflytande ökade motsättningar och allianser mellan stormakterna",
      "Imperialismen avskaffades helt före 1914 så den påverkade inte alls",
      "Endast jordbruk i Europa orsakade kriget utan koppling till kolonier",
      "Kolonierna var enbart fredliga och skapade inga spänningar",
    ],
    correctAnswer:
      "Tävlan om kolonier, råvaror och inflytande ökade motsättningar och allianser mellan stormakterna",
    tip: "Konkurrens om makt och resurser utanför Europa.",
  },
  {
    id: "nat-v26-17",
    question: "Vad var ”The Great Game”? (instudering)",
    options: [
      "Den strategiska maktkampen mellan Storbritannien och Ryssland om inflytande i Centralasien och hotet mot brittiska intressen kring Indien",
      "Ett brädspel som spelades av kungar under fredsförhandlingar",
      "Ett TV-program om sport i Afrika",
      "Samma som första världskriget men med ett annat namn",
    ],
    correctAnswer:
      "Den strategiska maktkampen mellan Storbritannien och Ryssland om inflytande i Centralasien och hotet mot brittiska intressen kring Indien",
    tip: "Storbritannien–Ryssland, Afghanistan, Indien.",
  },
  {
    id: "nat-v26-18",
    question:
      "Vad handlade Rudyard Kiplings dikt ”The White Man’s Burden” (1899) om i imperialistisk kontext? (instudering)",
    options: [
      "Ett budskap att vita imperier hade ”plikt” att styra och ”civilisera” andra folk – användes ofta för att rättfärdiga kolonial herravälde",
      "En dikt som skildrade hur kolonierna befriades och fick självständighet direkt",
      "En text om jordbruk utan politisk mening",
      "En kritik av industrialism som avskaffade alla fabriker",
    ],
    correctAnswer:
      "Ett budskap att vita imperier hade ”plikt” att styra och ”civilisera” andra folk – användes ofta för att rättfärdiga kolonial herravälde",
    tip: "Kritiserad idé om ”börda” att styra andra – imperialistisk retorik.",
  },
];
