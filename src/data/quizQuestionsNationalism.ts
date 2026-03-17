/**
 * Flervalsfrågor om Nationalism och imperialism
 * (Sol Nova 8, Historia, nationalism s. 110–127, imperialism s. 128–155).
 */

import type { QuizQuestion } from "./quizQuestions";

export const quizQuestionsNationalism: QuizQuestion[] = [
  // —— Nationalism, begrepp och spridning ——
  {
    id: "ni-nationalism-begrepp",
    question: "Vad bygger nationalismen på?",
    options: [
      "Tanken att folkgrupper med egen kultur, historia och språk bör ha egen nationalstat",
      "Tanken att alla människor ska leva i ett enda världsrike utan gränser",
      "Tanken att religion ska styra gränserna mellan stater och lagar",
      "Tanken att kungar ska ärva flera länder och förena dem under en monark",
    ],
    correctAnswer:
      "Tanken att folkgrupper med egen kultur, historia och språk bör ha egen nationalstat",
    tip: "Nationalism kopplar folkgrupp (språk, kultur, historia) till egen stat.",
  },
  {
    id: "ni-franska-rev-nationalism",
    question: "Vilken betydelse hade franska revolutionen för nationalismens framväxt?",
    options: [
      "Den hade ingen betydelse för nationalismen",
      "Människor blev medborgare med rättigheter i staten istället för undersåtar till en kung",
      "Den avskaffade alla nationer och införde ett europeiskt förbund",
      "Den införde monarki och adelsvälde i hela Europa",
    ],
    correctAnswer:
      "Människor blev medborgare med rättigheter i staten istället för undersåtar till en kung",
    tip: "Franska revolutionen förändrade förhållandet till staten – från undersåte till medborgare.",
  },
  {
    id: "ni-napoleon-nationalism",
    question: "Hur bidrog Napoleons erövringar till att nationalismen spreds i Europa?",
    options: [
      "Napoleon avskaffade nationalism överallt och införde enhetliga lagar",
      "Motståndet mot fransmännen väckte nationalistiska känslor och gemenskap hos de erövrade",
      "Napoleon tvingade alla att bli fransmän och använda franska språket",
      "Han förbjöd alla andra språk och religioner i de erövrade områdena",
    ],
    correctAnswer:
      "Motståndet mot fransmännen väckte nationalistiska känslor och gemenskap hos de erövrade",
    tip: "På erövrade platser växte motstånd och känsla av ”vi mot dem” – en grund för nationalism.",
  },
  {
    id: "ni-spridning-skolan",
    question: "Varför bidrog ökad skolgång till nationalismens spridning?",
    options: [
      "Skolan lärde barn att avvisa nationen och prioritera lokala traditioner",
      "Befolkningen lärde sig om nationen och dess historia och ett gemensamt nationellt språk",
      "Skolan lärde bara ut matematik och naturvetenskap utan historia",
      "Skolan var förbehållen adeln och de rikaste familjerna",
    ],
    correctAnswer:
      "Befolkningen lärde sig om nationen och dess historia och ett gemensamt nationellt språk",
    tip: "Gemensamt språk och gemensam historia i skolan knyter ihop nationen.",
  },
  {
    id: "ni-spridning-medier",
    question: "Vilka faktorer drev på nationalismens spridning utöver skolan?",
    options: [
      "Bara kyrkan och de religiösa skrifterna",
      "Bättre kommunikationer (t.ex. järnväg, telegraf) och massdistribuerade tidningar",
      "Endast krig och militära segrar som enade folket",
      "Endast handel och ekonomisk tillväxt mellan regioner",
    ],
    correctAnswer:
      "Bättre kommunikationer (t.ex. järnväg, telegraf) och massdistribuerade tidningar",
    tip: "Ny teknik möjliggjorde att budskap och idéer nådde fler människor.",
  },
  // —— Tyskland ——
  {
    id: "ni-tyskland-38-stater",
    question: "Hur såg Tyskland ut i mitten av 1800-talet innan enandet?",
    options: [
      "Ett enda starkt rike under en kejsare i Berlin",
      "Uppdelat i 38 stater som ingick i Tyska förbundet",
      "En del av Frankrike efter Napoleons erövringar",
      "En del av Ryssland och Österrike tillsammans",
    ],
    correctAnswer: "Uppdelat i 38 stater som ingick i Tyska förbundet",
    tip: "Tyska förbundet leddes av Österrikes kejsare; det fanns många småstater med tullar och gränser.",
  },
  {
    id: "ni-bismarck-blod-jarn",
    question: "Vad menade Bismarck med att ena Tyskland med \"blod och järn\"?",
    options: [
      "Att bygga järnvägar och donera blod för de sårade i krig",
      "Att vägen till ett enat rike skulle ske med våld (krig)",
      "Att alla skulle arbeta i gruvor och i järnindustrin",
      "Att förbjuda vapen och lösa konflikter fredligt",
    ],
    correctAnswer: "Att vägen till ett enat rike skulle ske med våld (krig)",
    tip: "Bismarck genomförde tre krig för att ena de tyska staterna.",
  },
  {
    id: "ni-bismarck-krig",
    question: "Mot vilka tre länder genomförde Bismarck krig för att ena Tyskland?",
    options: [
      "Sverige, Norge och Danmark",
      "Danmark 1864, Österrike 1866 och Frankrike 1870–1871",
      "Italien, Spanien och Portugal",
      "Ryssland, USA och Japan",
    ],
    correctAnswer: "Danmark 1864, Österrike 1866 och Frankrike 1870–1871",
    tip: "Tre krig i följd – Danmark, Österrike, Frankrike – ledde till Tyska kejsarriket 1871.",
  },
  {
    id: "ni-tyskland-1871",
    question: "Var och när utropades det tyska kejsarriket 1871?",
    options: [
      "I Berlin",
      "I Versailles i Frankrike; den preussiske kungen Vilhelm I kröntes till tysk kejsare",
      "I Wien",
      "I Rom",
    ],
    correctAnswer:
      "I Versailles i Frankrike; den preussiske kungen Vilhelm I kröntes till tysk kejsare",
    tip: "Kröningen i Versailles var medvetet vald för att markera seger över Frankrike.",
  },
  {
    id: "ni-tyskland-alsace-lorraine",
    question: "Vilken effekt hade förlusten av Alsace och Lorraine för Frankrike?",
    options: [
      "Frankrike glömde det snabbt och accepterade de nya gränserna",
      "Det skapade stor revanschlust i Frankrike under kommande år",
      "Frankrike erövrade hela Tyskland och tog tillbaka områdena",
      "Det påverkade inte relationerna mellan länderna alls",
    ],
    correctAnswer: "Det skapade stor revanschlust i Frankrike under kommande år",
    tip: "Förlusten av dessa landskap blev en drivkraft för fransk revanschpolitik.",
  },
  // —— Italien ——
  {
    id: "ni-risorgimento",
    question: "Vad betyder risorgimento i italiensk nationalism?",
    options: [
      "Krig och militär erövring av grannländerna",
      "Pånyttfödelse – rörelsen för Italiens enande",
      "Kungadöme och monarkins återinförande",
      "Religion och kyrkans ledande roll i enandet",
    ],
    correctAnswer: "Pånyttfödelse – rörelsen för Italiens enande",
    tip: "Risorgimento var den nationalistiska rörelsen som ville ena den italienska halvön.",
  },
  {
    id: "ni-mazzini",
    question: "Vilken roll spelade Giuseppe Mazzini för Italiens enande?",
    options: [
      "Han var kung av Italien",
      "Han var nationalistisk företrädare som skrev för enandet och planerade revolution",
      "Han var fransk general",
      "Han var påve",
    ],
    correctAnswer:
      "Han var nationalistisk företrädare som skrev för enandet och planerade revolution",
    tip: "Mazzini är känd som en av de främsta italienska nationalisterna under 1800-talet.",
  },
  {
    id: "ni-garibaldi-rodskjortor",
    question: "Vad var Garibaldis \"rödskjortor\"?",
    options: [
      "En modekreation som spreds från Milano till hela Italien",
      "En frivillig armé som kämpade för Italiens enande, känd för röda skjortor",
      "En religiös orden under påvens ledning som verkade för fred",
      "Österrikiska soldater som försvarade italienska staterna",
    ],
    correctAnswer:
      "En frivillig armé som kämpade för Italiens enande, känd för röda skjortor",
    tip: "Garibaldi ledde frivilliga som med våld erövrade stora delar av den italienska halvön.",
  },
  {
    id: "ni-cavour",
    question: "Vad gjorde Camillo Cavour för Italiens enande?",
    options: [
      "Han var bara kung av en liten italiensk stat",
      "Han var regeringschef i Piemonte, fick Frankrike att stödja kampen mot Österrike",
      "Han erövrade Rom ensam med en liten armé och tog makten",
      "Han avskaffade nationalismen och verkade för att behålla de gamla gränserna",
    ],
    correctAnswer:
      "Han var regeringschef i Piemonte, fick Frankrike att stödja kampen mot Österrike",
    tip: "Cavour var liberal politiker i Piemonte och drev diplomati och allianser för enandet.",
  },
  {
    id: "ni-italien-1861",
    question: "När enades Italien till ett kungarike och vilket land ledde enandet?",
    options: [
      "1871 under Preussen som då kontrollerade halvön",
      "1861; kungariket Sardinien-Piemonte ledde enandet",
      "1832 under Grekland som allierat med Italien",
      "1815 under Österrike efter Wienkongressen",
    ],
    correctAnswer: "1861; kungariket Sardinien-Piemonte ledde enandet",
    tip: "1861 utropades Kungariket Italien; Piemonte och Cavour var centrala.",
  },
  {
    id: "ni-rom-vatikanen",
    question: "Hur förhåller sig Rom och Vatikanstaten till Italiens enande?",
    options: [
      "Rom var alltid italienskt och påven flyttade till Florens",
      "Italien erövrade Rom 1870 som blev huvudstad; påven garanterades skydd och Vatikanen blev världens minsta stat",
      "Påven förbjöd Italiens enande och exkommunicerade Garibaldi",
      "Vatikanen styrde hela Italien genom en union mellan kyrka och stat",
    ],
    correctAnswer:
      "Italien erövrade Rom 1870 som blev huvudstad; påven garanterades skydd och Vatikanen blev världens minsta stat",
    tip: "Rom kontrollerades av kyrkostaten till 1870; därefter blev det Italiens huvudstad med särskild status för Vatikanen.",
  },
  // —— Osmanska riket ——
  {
    id: "ni-osmanska-millet",
    question: "Vad var millet-systemet i Osmanska riket?",
    options: [
      "Ett militärsystem där provinser försvarades av lokala trupper",
      "Att religiösa minoriteter hade visst självstyre och egna lagar under osmanerna",
      "Ett skattesystem som fördelade skatter mellan olika folkgrupper",
      "Ett språksystem där alla måste tala turkiska i förvaltningen",
    ],
    correctAnswer:
      "Att religiösa minoriteter hade visst självstyre och egna lagar under osmanerna",
    tip: "Millet-systemet gav minoriteter viss autonomi men under osmannisk överhöghet.",
  },
  {
    id: "ni-osmanska-splittring",
    question: "Varför splittrades Osmanska riket under 1800- och tidiga 1900-talet?",
    options: [
      "Bara på grund av klimat och missväxt som försvagade riket",
      "Nationalismen spreds bland minoriteter som krävde självständighet; inre och yttre tryck",
      "Österrike erövrade det helt efter första världskriget",
      "Det splittrades inte utan förblev enat under sultanen",
    ],
    correctAnswer:
      "Nationalismen spreds bland minoriteter som krävde självständighet; inre och yttre tryck",
    tip: "Flera folkgrupper ville bilda egna nationalstater; riket kallades ”Europas sjuke man”.",
  },
  {
    id: "ni-osmanska-1923",
    question: "Vad återstod av Osmanska riket år 1923?",
    options: [
      "Hela riket",
      "En liten del – det som är dagens Turkiet",
      "Ingenting",
      "Bara Balkan",
    ],
    correctAnswer: "En liten del – det som är dagens Turkiet",
    tip: "Första världskriget och nationalismen ledde till att imperiet ersattes av många stater; kvar blev dagens Turkiet.",
  },
  {
    id: "ni-europas-sjuke-man",
    question: "Vilket rike kallades \"Europas sjuke man\" och varför?",
    options: [
      "Storbritannien på grund av sjukdomar",
      "Osmanska riket – uttryck för hur svagt riket hade blivit",
      "Frankrike på grund av revolution",
      "Tyskland efter 1871",
    ],
    correctAnswer: "Osmanska riket – uttryck för hur svagt riket hade blivit",
    tip: "Uttrycket användes för att beskriva det sönderfallande Osmanska riket.",
  },
  // —— Österrike-Ungern ——
  {
    id: "ni-osterrike-ungern",
    question: "Vad hände med Österrike 1867?",
    options: [
      "Det försvann och delades upp i många småstater",
      "Det bildade unionen Österrike-Ungern (dubbelmonarki) under Frans Josef",
      "Det erövrade Frankrike och blev Europas starkaste makt",
      "Det enades med Italien i en stor central europeisk federation",
    ],
    correctAnswer: "Det bildade unionen Österrike-Ungern (dubbelmonarki) under Frans Josef",
    tip: "Frans Josef var både kejsare i Österrike och kung över Ungern.",
  },
  {
    id: "ni-osterrike-1918",
    question: "Varför splittrades Österrike-Ungern efter första världskriget?",
    options: [
      "Bara för att det förlorade kriget",
      "Nationalismen – många folkgrupper krävde självständighet; nya stater bildades (t.ex. Tjeckoslovakien, Ungern, Jugoslavien)",
      "Det splittrades inte",
      "Påven krävde det",
    ],
    correctAnswer:
      "Nationalismen – många folkgrupper krävde självständighet; nya stater bildades (t.ex. Tjeckoslovakien, Ungern, Jugoslavien)",
    tip: "Många folkgrupper i riket ville ha egna nationalstater.",
  },
  // —— Imperialism ——
  {
    id: "ni-imperialism-period",
    question: "Under vilken period var imperialismen som starkast i Europa?",
    options: [
      "1600-talet",
      "1870–1914 (slutet av 1800-talet och början av 1900-talet)",
      "Medeltiden",
      "Efter andra världskriget",
    ],
    correctAnswer: "1870–1914 (slutet av 1800-talet och början av 1900-talet)",
    tip: "Imperialismen var en intensifierad kolonialism med ökad tävling om kolonier.",
  },
  {
    id: "ni-imperialism-orsak-ww1",
    question: "Vad var imperialismen i förhållande till första världskriget?",
    options: [
      "Ingen koppling – imperialismen upphörde innan kriget",
      "En bakomliggande orsak till första världskriget",
      "Ett resultat av kriget som kom efter att kolonierna förlorats",
      "Bara ett begrepp som inte påverkade politik eller konflikter",
    ],
    correctAnswer: "En bakomliggande orsak till första världskriget",
    tip: "Tävlingen om kolonier och makt bidrog till spänningar mellan stormakterna.",
  },
  {
    id: "ni-imperialism-kannetecken",
    question: "Vilket av följande är ett kännetecken på imperialismen?",
    options: [
      "Avveckling av alla arméer och nedrustning i kolonierna",
      "Kolonial expansion – europeiska länder tog kontroll över stora delar av Afrika, Asien och Stilla havet",
      "Avskaffande av handel mellan Europa och andra världsdelar",
      "Endast kulturellt utbyte utan makt eller politisk kontroll",
    ],
    correctAnswer:
      "Kolonial expansion – europeiska länder tog kontroll över stora delar av Afrika, Asien och Stilla havet",
    tip: "Imperialismen innebar också ekonomisk exploatering, kulturell dominans och militär överlägsenhet.",
  },
  {
    id: "ni-brittiska-imperiet",
    question: "Ungefär hur stor del av jordens yta styrde Storbritannien vid imperialismens höjdpunkt (cirka 1920)?",
    options: [
      "Cirka 5 %",
      "Cirka 25 %",
      "Cirka 50 %",
      "Hela jorden",
    ],
    correctAnswer: "Cirka 25 %",
    tip: "Uttrycket ”solen går aldrig ner över det brittiska imperiet” syftar på dess omfattning.",
  },
  {
    id: "ni-brittiska-indien",
    question: "Vad kallades Brittiska Indien i det brittiska imperiet?",
    options: [
      "Ingen särskild benämning – bara en koloni bland många",
      "\"Juvelen i kronan\" – Storbritanniens viktigaste koloni",
      "Den fattigaste kolonin som krävde mest bistånd från London",
      "En provins utan betydelse för handel eller strategi",
    ],
    correctAnswer: "\"Juvelen i kronan\" – Storbritanniens viktigaste koloni",
    tip: "Indien var central för imperiets ekonomi och makt.",
  },
  {
    id: "ni-great-game",
    question: "Vad var \"The Great Game\"?",
    options: [
      "Ett TV-program eller en sporttävling mellan nationer",
      "Maktkampen mellan Storbritannien och Ryssland; Ryssland expanderade och hotade GB:s koloni Indien, Afghanistan hamnade i kläm",
      "Ett krig mellan Frankrike och Tyskland om kolonierna i Afrika",
      "Ett handelsspel där länder tävlade om att sälja mest varor",
    ],
    correctAnswer:
      "Maktkampen mellan Storbritannien och Ryssland; Ryssland expanderade och hotade GB:s koloni Indien, Afghanistan hamnade i kläm",
    tip: "Begreppet användes för den strategiska rivaliteten kring Centralasien och Indien.",
  },
  {
    id: "ni-white-mans-burden",
    question: "Vad handlade Rudyard Kiplings dikt \"The White Man's Burden\" (1899) om?",
    options: [
      "Att avveckla kolonierna och ge alla folk självständighet",
      "Budskapet att vita människor hade \"plikten\" att styra och \"civilisera\" andra folk – användes för att motivera kolonial expansion",
      "Kritik mot imperialismen och kolonialmakternas övergrepp",
      "Om jordbruk och hur kolonierna skulle odla nya grödor",
    ],
    correctAnswer:
      "Budskapet att vita människor hade \"plikten\" att styra och \"civilisera\" andra folk – användes för att motivera kolonial expansion",
    tip: "Dikten blev en symbol för kolonial och imperialistisk rättfärdigande.",
  },
  {
    id: "ni-divide-et-impera",
    question: "Vad betyder \"söndra och härska\" (divide et impera) i kolonial kontext?",
    options: [
      "Att ena alla folkgrupper under ett gemensamt språk och lagar",
      "Att splittra urbefolkningen i kolonierna så att olika grupper krigade mot varandra och kolonisatörerna lättare kunde kontrollera dem",
      "Att avveckla arméer och lägga resurser på skolor och sjukvård istället",
      "Att bygga skolor och sprida kristendomen till alla invånare",
    ],
    correctAnswer:
      "Att splittra urbefolkningen i kolonierna så att olika grupper krigade mot varandra och kolonisatörerna lättare kunde kontrollera dem",
    tip: "Kolonialmakter använde ofta strategin att stödja vissa grupper mot andra för att behålla kontroll.",
  },
  {
    id: "ni-imperialism-nationalism-industrialism",
    question: "Hur hängde imperialismen ihop med nationalism och industrialism?",
    options: [
      "De hade inget samband – imperialismen byggde bara på religion",
      "Nationalism och industrialism gav europeiska makter teknologisk och militär överlägsenhet som användes för att dominera andra delar av världen",
      "Industrialismen avskaffade imperialismen eftersom fabriker inte behövde kolonier",
      "Nationalismen förbjöd kolonier och krävde att alla länder skulle vara självständiga",
    ],
    correctAnswer:
      "Nationalism och industrialism gav europeiska makter teknologisk och militär överlägsenhet som användes för att dominera andra delar av världen",
    tip: "Starkare stater och bättre vapen/kommunikation möjliggjorde kolonial expansion.",
  },
  // —— Begrepp (banal/aggressiv, patriotism) ——
  {
    id: "ni-banal-nationalism",
    question: "Vad menas med \"banal\" nationalism?",
    options: [
      "Endast våldsamma demonstrationer och hat mot andra länder",
      "Att nationen återskapar sig genom vardagliga saker (flaggor, pengar, idrott) utan att man nödvändigtvis tänker på det",
      "Att det inte finns nationalism i moderna samhällen",
      "Bara i krig och vid militära evenemang",
    ],
    correctAnswer:
      "Att nationen återskapar sig genom vardagliga saker (flaggor, pengar, idrott) utan att man nödvändigtvis tänker på det",
    tip: "Banal nationalism är det som gör nationen självklar i vardagen – till skillnad från tydligt aggressiv nationalism.",
  },
  {
    id: "ni-patriotism",
    question: "Vad betyder patriotism?",
    options: [
      "Hat mot andra länder och krav på att egna intressen alltid går före",
      "Fosterlandskärlek – lojalitet och kärlek till det egna landet eller staten",
      "Samma som imperialism – att utöva makt över andra länder",
      "Avsaknad av nationell känsla och vilja att avskaffa gränser",
    ],
    correctAnswer: "Fosterlandskärlek – lojalitet och kärlek till det egna landet eller staten",
    tip: "En patriot är en person som älskar sitt land och främjar dess intressen.",
  },
  // —— Från begreppslista & instuderingsfrågor ——
  {
    id: "ni-nationalstat",
    question: "Vad är en nationalstat?",
    options: [
      "Ett land som styrs av flera kungar i union med varandra",
      "En stat där folket delar gemensam identitet, kultur och ofta språk – nationen och staten sammanfaller",
      "Ett land utan gränser där alla människor har samma medborgarskap",
      "Samma som imperium – en makt som styr över flera erövrade territorier",
    ],
    correctAnswer:
      "En stat där folket delar gemensam identitet, kultur och ofta språk – nationen och staten sammanfaller",
    tip: "Nationalstaten är kärnan i nationalistiska idéer: ett folk, en stat.",
  },
  {
    id: "ni-medborgare",
    question: "Vad innebar begreppet medborgare i samband med franska revolutionen?",
    options: [
      "Samma som kung – den som har högsta makten i staten",
      "Personer med rättigheter i staten som deltar i samhället – inte bara undersåtar till en monark",
      "Endast adeln och de som ägde land och titlar",
      "Endast präster och andra som arbetade för kyrkan",
    ],
    correctAnswer:
      "Personer med rättigheter i staten som deltar i samhället – inte bara undersåtar till en monark",
    tip: "Medborgaridealet från revolutionen stärkte känslan av gemenskap inom nationen.",
  },
  {
    id: "ni-tyska-forbundet",
    question: "Vad var Tyska förbundet (efter 1815)?",
    options: [
      "Ett enat tyskt kejsarrike",
      "En lös sammanslutning av tyska stater, ledd av Österrikes kejsare",
      "En armé under Napoleon",
      "En handelsorganisation",
    ],
    correctAnswer:
      "En lös sammanslutning av tyska stater, ledd av Österrikes kejsare",
    tip: "Efter Wienkongressen 1815 – Tyskland var uppdelat i många stater under österrikiskt inflytande.",
  },
  {
    id: "ni-jarnkanslern",
    question: "Vem kallas \"Järnkanslern\" och varför är han känd?",
    options: [
      "En fransk kung",
      "Otto von Bismarck – han enade Tyskland genom krig och stark politik",
      "En italiensk general",
      "En brittisk admiral",
    ],
    correctAnswer:
      "Otto von Bismarck – han enade Tyskland genom krig och stark politik",
    tip: "Bismarck var Preussens ministerpresident och arkitekten bakom Tyska kejsarriket 1871.",
  },
  {
    id: "ni-furstendome",
    question: "Vad är ett furstendöme?",
    options: [
      "Ett republik",
      "Ett område som styrs av en furste (monark med mindre titel än kung/kejsare)",
      "Ett religiöst tempel",
      "Ett kolonialt territorium",
    ],
    correctAnswer:
      "Ett område som styrs av en furste (monark med mindre titel än kung/kejsare)",
    tip: "Många av de tyska och italienska staterna var furstendömen eller hertigdömen.",
  },
  {
    id: "ni-trikoloren",
    question: "Vad är trikoloren?",
    options: [
      "En typ av kanon",
      "En flagga med tre färgade band – ofta kopplad till franska revolutionen och nationalism",
      "Ett förbund mellan tre länder",
      "En nationalsymbol för Tyskland",
    ],
    correctAnswer:
      "En flagga med tre färgade band – ofta kopplad till franska revolutionen och nationalism",
    tip: "Den franska trikoloren (blå, vit, röd) blev symbol för revolution och nation.",
  },
  {
    id: "ni-aggressiv-nationalism",
    question: "Vad kännetecknar aggressiv (\"hot\") nationalism?",
    options: [
      "Att man inte bryr sig om nationen utan bara om det lokala samhället",
      "Att det egna landet alltid har rätt och går före andra; nationen är allt, individen ingenting",
      "Samma som banal nationalism – vardagliga symboler som flaggor och idrott",
      "Endast fredliga demonstrationer och debatter utan våld eller hot",
    ],
    correctAnswer:
      "Att det egna landet alltid har rätt och går före andra; nationen är allt, individen ingenting",
    tip: "Aggressiv nationalism kan leda till främlingsfientlighet och krig.",
  },
  {
    id: "ni-imperialismen-fyra",
    question: "Vilka är imperialismens fyra kännetecken (enligt läroboken)?",
    options: [
      "Demokrati, jämställdhet, fred och fri handel mellan länder",
      "Kolonial expansion, ekonomisk exploatering, kulturell dominans, militär överlägsenhet",
      "Skolor, sjukvård, vägar och kyrkor byggda i kolonierna",
      "Telegraf, järnväg, tidningar och flaggor som spred idéer",
    ],
    correctAnswer:
      "Kolonial expansion, ekonomisk exploatering, kulturell dominans, militär överlägsenhet",
    tip: "Imperialismen byggde på att ta kontroll över områden, utnyttja resurser, påtvinga kultur och använda militär styrka.",
  },
  {
    id: "ni-scramble-africa",
    question: "Vad var \"kapplöpningen om Afrika\" (Scramble for Africa)?",
    options: [
      "Ett idrottsevenemang där afrikanska länder tävlade mot varandra",
      "Europas stormakters tävlan om att erövra och kolonisera afrikanska territorier under slutet av 1800-talet",
      "Ett inbördeskrig i ett afrikanskt land som delade folket i två läger",
      "En handelsavtal mellan Afrikas länder om fri handel och tullar",
    ],
    correctAnswer:
      "Europas stormakters tävlan om att erövra och kolonisera afrikanska territorier under slutet av 1800-talet",
    tip: "Under 1880–1900-talet delade europeiska makter upp nästan hela Afrika mellan sig.",
  },
  {
    id: "ni-slaveri-kolonisering",
    question: "Hur påverkade slaveriets avskaffande den europeiska koloniseringen (1800-talet)?",
    options: [
      "Kolonisering upphörde helt eftersom slaveri var grunden för alla kolonier",
      "Europeiska länder sökte nya sätt att utnyttja kolonierna – t.ex. råvaror och marknad – när slavhandel avskaffades",
      "Slaveri och kolonisering hade ingen koppling – de utvecklades oberoende",
      "Bara USA koloniserade medan Europa lämnade Afrika och Asien",
    ],
    correctAnswer:
      "Europeiska länder sökte nya sätt att utnyttja kolonierna – t.ex. råvaror och marknad – när slavhandel avskaffades",
    tip: "Efter slaveriets avskaffande ökade intresset för att kontrollera territorier och resurser i Afrika och Asien.",
  },
  {
    id: "ni-kolonialism",
    question: "Vad innebär kolonialism?",
    options: [
      "Att bygga skolor och sprida utbildning i eget land",
      "Att ett land tar kontroll över andra territorier och folk, ofta för att utnyttja resurser och marknader",
      "Att avveckla arméer och lösa konflikter fredligt mellan länder",
      "Samma som demokrati – att alla folk ska få välja egen regering",
    ],
    correctAnswer:
      "Att ett land tar kontroll över andra territorier och folk, ofta för att utnyttja resurser och marknader",
    tip: "Imperialismen var en intensifierad och mer tävlingsinriktad form av kolonialism.",
  },
  {
    id: "ni-imperium",
    question: "Vad är ett imperium?",
    options: [
      "Ett litet kungarike",
      "Ett välde där en stat eller makt styr över flera länder, folk eller territorier",
      "Ett parlament",
      "En religiös organisation",
    ],
    correctAnswer:
      "Ett välde där en stat eller makt styr över flera länder, folk eller territorier",
    tip: "Exempel: Brittiska imperiet, Osmanska riket, Ryssland.",
  },
  {
    id: "ni-telegraf",
    question: "Vad hade telegrafen för betydelse för nationalismens spridning?",
    options: [
      "Ingen betydelse – tidningar och brev räckte för att sprida idéer",
      "Text kunde sändas snabbt över långa avstånd – budskap och idéer nådde fler",
      "Telegrafen användes bara i krig för att koordinera arméer",
      "Den förbjöd tidningar och gjorde att färre kunde läsa nyheter",
    ],
    correctAnswer:
      "Text kunde sändas snabbt över långa avstånd – budskap och idéer nådde fler",
    tip: "Snabbare kommunikation underlättade spridning av nationalistiska budskap och gemensam identitet.",
  },
  {
    id: "ni-massdistribuering",
    question: "Vad innebär massdistribuering (t.ex. av tidningar)?",
    options: [
      "Att skicka brev till en person eller en liten grupp",
      "Att trycka och sprida information till många människor i stort antal",
      "Att förbjuda böcker och tidningar som regeringen ogillade",
      "Att endast adeln och de rikaste skulle läsa och få information",
    ],
    correctAnswer:
      "Att trycka och sprida information till många människor i stort antal",
    tip: "Massdistribuerade tidningar gjorde att nationalistiska budskap nådde större delar av befolkningen.",
  },
  {
    id: "ni-minoritet",
    question: "Vad menas med minoritet i sammanhanget Osmanska riket och nationalism?",
    options: [
      "Den största folkgruppen som styrde riket och bestämde lagarna",
      "Folkgrupper som inte utgjorde den dominerande gruppen men ofta krävde egen stat eller självstyre",
      "Endast religiösa ledare som inte tillhörde den officiella religionen",
      "Handelsmän och köpmän som reste mellan provinserna",
    ],
    correctAnswer:
      "Folkgrupper som inte utgjorde den dominerande gruppen men ofta krävde egen stat eller självstyre",
    tip: "Nationalismen bland minoriteter (t.ex. greker, serber, bulgarer) bidrog till Osmanska rikets splittring.",
  },
  {
    id: "ni-likheter-tyskland-italien",
    question: "Vilken likhet fanns mellan enandet av Tyskland och enandet av Italien?",
    options: [
      "Båda enades utan krig genom fredliga förhandlingar och folkomröstningar",
      "Båda var redan enade under medeltiden och behöll bara den gamla ordningen",
      "Nationalistiska rörelser och ledande stater (Preussen respektive Sardinien-Piemonte) enade många småstater till en nation",
      "Båda enades under fransk ledning efter Napoleons erövringar",
    ],
    correctAnswer:
      "Nationalistiska rörelser och ledande stater (Preussen respektive Sardinien-Piemonte) enade många småstater till en nation",
    tip: "Tyskland under Bismarck/Preussen; Italien under Cavour/Garibaldi och Piemonte.",
  },
  {
    id: "ni-industrialism-nationalism-tavling",
    question: "På vilket sätt kombinerade man industrialism och nationalism (t.ex. på utställningar)?",
    options: [
      "Man avvek från båda och prioriterade bara jordbruk och traditioner",
      "Länder visade upp sin teknik och kultur – en slags industriell och kulturell tävling mellan nationer",
      "Endast krig användes för att visa vilket land som var starkast",
      "Skolan lärde bara språk och historia utan koppling till teknik eller industri",
    ],
    correctAnswer:
      "Länder visade upp sin teknik och kultur – en slags industriell och kulturell tävling mellan nationer",
    tip: "Internationella industriutställningar (t.ex. London 1851) lyfte fram nationella prestationer.",
  },
  {
    id: "ni-margherita-historiebruk",
    question: "Varför hålls berättelsen om pizzan Margherita (tomaten, mozzarella, basilika = Italiens flagga) levande i historiebruket?",
    options: [
      "Bara för att den smakar gott och är populär överallt i världen",
      "Den används som en del av Italiens nationalism och identitet – att knyta symboler till nationen",
      "Den har ingen koppling till nationalism utan är bara en maträtt",
      "Den kom från Frankrike och spreds sedan till Italien",
    ],
    correctAnswer:
      "Den används som en del av Italiens nationalism och identitet – att knyta symboler till nationen",
    tip: "Historiebruk handlar om hur historien används i dag – t.ex. för att stärka nationell känsla.",
  },
];
