import type { QuizQuestion } from "./quizQuestionTypes";

/**
 * En flervalsfråga per uppgift i:
 * docs/Instuderingsfrågor - Nationalism & Imperialism.txt
 * Svarslängder varierade medvetet så att det längsta alternativet inte alltid är rätt.
 */
export const quizQuestionsNationalismInstudering: QuizQuestion[] = [
  {
    id: "nat-v26-1",
    question:
      "Vad betyder ordet nationalism? (instudering – presentationen i materialet)",
    options: [
      "Att alla länder i världen ska slås ihop till ett enda världsrike utan gränser, språk eller egen lagstiftning",
      "En ide om att folk med gemensam kultur, språk och historia hör ihop och ofta önskar egen stat eller stark tillhörighet till nationen",
      "Enbart handelspolitik utan känsla av tillhörighet till land, språk eller gemensam historia",
      "Samma sak som demokrati – bara att alla får rösta oavsett nationell identitet eller medborgarskap",
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
      "Den avskaffade alla nationer och införde ett enda världsrike utan språk eller gränser mellan folken",
      "Den gjorde så att endast kungen fick tala om nation och alla andra tystades genom censur i hela Europa",
      "Den hade ingen betydelse för nationalismen utan bara för jordbruk, skatter och kyrkans jordar",
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
      "Endast valuta och inget annat – inga flaggor, språk, sånger eller berättelser används i nationell identitet",
      "Endast religiösa skrifter utan koppling till språk, historia eller gemensamma högtider i landet",
      "Flagga, nationalspråk/historia i skolan, nationalsång/högtider, idrotts- eller kulturhjältar som representerar nationen",
      "Endast gränser på kartan utan kultur, språk, gemensamma minnen eller symboler som folk delar",
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
      "Endast för att påven krävde det utan stöd bland tysktalande furstar, handelsmän eller militära eliter",
      "Nationalistisk önskan om politisk enhet, ekonomiska vinster med gemensam marknad, språklig gemenskap och militär styrka under ledande stater som Preussen",
      "Endast för att alla tyska stater redan var enade sedan medeltiden utan splittring eller tullar",
      "Endast för att Frankrike betalade alla kostnader utan motprestation eller intresse av egen säkerhet",
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
      "Tyskland försvann direkt från kartan utan att påverka grannländer, kolonier eller allianser i Europa",
      "En ny stormakt i Europas mitt som förändrade maktbalansen, ökade spänningar med grannar (t.ex. Frankrike) och påverkade kolonial konkurrens",
      "Endast Italien påverkades medan övriga Europa förblev oförändrat i gränsdragning och diplomati",
      "Ingen märkte av Tyskland eftersom det saknade industri, befolkning och modern armé vid enandet",
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
      "Båda skedde utan krig och utan nationalistiska idéer, enbart genom slump och väderlek",
      "Båda leddes av Storbritannien som koloni över hela halvön med direktstyre från London",
      "Båda var redan enade under romarriket och behövde inte förändras under 1800-talet",
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
      "Endast våldsamma demonstrationer och hat mot minoriteter varje dag utan vardagliga symboler",
      "Att nationalism inte finns i moderna samhällen eftersom internet ersatt alla nationsgränser",
      "Att endast kungen får visa flagga medan folket ska vara neutralt utan nationalsång eller idrott",
    ],
    correctAnswer:
      "Att nationen återskapas i vardagen genom självklara saker som flaggor, pengar, idrott och språk – ofta utan att man tänker på det",
    tip: "Banal = vardaglig, nästan osynlig nationalism.",
  },
  {
    id: "nat-v26-7",
    question: "Vad menas med aggressiv (”hot”) nationalism?",
    options: [
      "Samma som banal nationalism – bara flaggor och mynt utan politisk spänning eller konflikt",
      "Att man avvisar all nationell känsla och vill leva utan identitet, språk eller historia",
      "Att det egna folket och landet sätts främst med stark känsla av överlägsenhet; kan leda till främlingsfientlighet och konflikt",
      "Att endast ekonomi styr utan några känslor för nationen, kulturen eller historien",
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
      "Den har bara med smak att göra och ingen koppling till identitet, historia eller nationell stolthet",
      "Den bevisar att Italien aldrig haft nationalism eller någon gemensam berättelse om staten",
      "Berättelsen knyter mat och symboler till italiensk identitet och stolthet – historiebruk som stärker nationell känsla",
      "Den kommer ursprungligen från Tyskland och har flyttats av misstag till Italien utan kulturell betydelse",
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
      "Ett litet kungarike i Skandinavien utan kolonier, armé eller intresse för Balkan och Mellanöstern",
      "Samma som Heliga romerska riket i västra Europa under 1900-talet med huvudstad i Berlin",
      "En republik i Sydamerika utan koppling till Balkan, Mellanöstern eller någon sultan eller kalifat",
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
      "För att riket hade de friskaste invånarna och starkast ekonomi i hela världen utan inre problem",
      "Uttryck för att riket var svagt, pressat av inre splittring, nationalism bland folkgrupper och yttre hot – ansågs nära kollaps",
      "För att det låg i Amerika och inte i Europa så att ingen europeisk makt hade kontakt med det",
      "För att ingen hade hört talas om det i diplomatin eller i samtal om Balkan och Mellanöstern",
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
      "Genom att förbjuda all industri och bara odla spannmål nationellt utan maskiner eller utställningar",
      "T.ex. världsutställningar där länder visade upp maskiner, produkter och konst som nationella prestationer – tävlan om modernitet och stolthet",
      "Genom att nationalism och fabriker aldrig förekom samtidigt i historien utan undantag",
      "Endast genom krig utan några fredliga utställningar, prisbelönta innovationer eller kultur",
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
      "Koloniseringen upphörde helt och alla europeiska flaggor försvann från Afrika och Asien över en natt",
      "Ingen förändring skedde alls i kolonial politik efter slaveriets avskaffande i någon koloni",
      "Endast USA koloniserade medan Europa ägnade sig åt jordbruk hemma utan intresse för råvaror utomlands",
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
      "Demokrati, fred, miljö och välgörenhet utan maktaspekter, kolonial kontroll eller ekonomiskt utnyttjande",
      "Kolonial expansion, ekonomisk exploatering, kulturell dominans, militär överlägsenhet",
      "Endast handel och inget annat kännetecken som skiljer imperialism från annan politik",
      "Skolor, sjukhus och vägar – inget annat räknas som imperialism enligt någon definition",
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
      "Att alltid ena alla folkgrupper under ett språk och en religion utan att spela ut grupper mot varandra",
      "Att spela ut grupper mot varandra så att kolonialmakten lättare kunde behålla kontroll över ett område",
      "Att avskaffa alla arméer och låta kolonierna styra sig själva direkt utan guvernör eller garnison",
      "Att bara bygga järnvägar och broar utan någon politisk strategi eller stöd till vissa eliter",
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
      "Ett fredligt idrotts-VM i Afrika utan europeiskt deltagande eller intresse av territorier",
      "Ett avtal där alla afrikanska stater fick samma gränser som i dag utan konflikt eller Berlinkonferensen",
      "En handelskonflikt bara mellan två städer i Europa utan Afrika, kolonier eller militära expeditioner",
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
      "Imperialismen avskaffades helt före 1914 så den påverkade inte allianser eller konflikter om kolonier",
      "Tävlan om kolonier, råvaror och inflytande ökade motsättningar och allianser mellan stormakterna",
      "Endast jordbruk i Europa orsakade kriget utan koppling till kolonier, flottor eller handel",
      "Kolonierna var enbart fredliga och skapade inga spänningar mellan Frankrike, Storbritannien och Tyskland",
    ],
    correctAnswer:
      "Tävlan om kolonier, råvaror och inflytande ökade motsättningar och allianser mellan stormakterna",
    tip: "Konkurrens om makt och resurser utanför Europa.",
  },
  {
    id: "nat-v26-17",
    question: "Vad var ”The Great Game”? (instudering)",
    options: [
      "Maktkamp mellan Storbritannien och Ryssland om Centralasien och brittiska intressen kring Indien (”The Great Game”)",
      "Ett brädspel som kungar spelade under fredsförhandlingar utan koppling till diplomati, gränser eller militära operationer i Asien",
      "Ett TV-program om sport i Afrika som sändes efter första världskriget och som saknade koppling till imperier eller strategi",
      "Samma händelse som första världskriget men med annat namn i alla läroböcker utan undantag",
    ],
    correctAnswer:
      "Maktkamp mellan Storbritannien och Ryssland om Centralasien och brittiska intressen kring Indien (”The Great Game”)",
    tip: "Storbritannien–Ryssland, Afghanistan, Indien.",
  },
  {
    id: "nat-v26-18",
    question:
      "Vad handlade Rudyard Kiplings dikt ”The White Man’s Burden” (1899) om i imperialistisk kontext? (instudering)",
    options: [
      "Att vita imperier hade ”plikt” att ”civilisera” andra – retorik som rättfärdigade kolonial herravälde (Kipling 1899)",
      "En dikt som skildrade hur kolonierna befriades och fick självständighet direkt efter publiceringen utan motstånd från imperierna",
      "En text om jordbruk och skördar utan politisk mening eller koppling till imperier, ras eller makt",
      "En kritik av industrialism som i dikten krävde att alla fabriker och järnvägar i Europa skulle rivas",
    ],
    correctAnswer:
      "Att vita imperier hade ”plikt” att ”civilisera” andra – retorik som rättfärdigade kolonial herravälde (Kipling 1899)",
    tip: "Kritiserad idé om ”börda” att styra andra – imperialistisk retorik.",
  },
];
