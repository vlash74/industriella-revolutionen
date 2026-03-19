/**
 * Flervalsfrågor om Nationalism och imperialism
 * (Sol Nova 8, Historia, nationalism s. 110–127, imperialism s. 128–155).
 */

import type { QuizQuestion } from "./quizQuestionTypes";
import { quizQuestionsNationalismInstudering } from "./quizNationalismInstudering";

export const quizQuestionsNationalism: QuizQuestion[] = [
  // —— Nationalism, begrepp och spridning ——
  {
    id: "ni-nationalism-begrepp",
    question: "Vad bygger nationalismen på?",
    options: [
      "Tanken att folkgrupper med egen kultur, historia och språk bör ha egen nationalstat",
      "Tanken att alla människor ska leva i ett enda världsrike utan gränser eller nationer",
      "Tanken att religion ska styra gränserna mellan stater och alla lagar i samhället",
      "Tanken att kungar ska ärva flera länder och förena dem under en monark utan folket med",
    ],
    correctAnswer:
      "Tanken att folkgrupper med egen kultur, historia och språk bör ha egen nationalstat",
    tip: "Nationalism kopplar folkgrupp (språk, kultur, historia) till egen stat.",
  },
  {
    id: "ni-franska-rev-nationalism",
    question: "Vilken betydelse hade franska revolutionen för nationalismens framväxt?",
    options: [
      "Den hade ingen betydelse för nationalismen – den handlade bara om kungamakt och skatter",
      "Människor blev medborgare med rättigheter i staten istället för undersåtar till en kung",
      "Den avskaffade alla nationer och införde ett europeiskt förbund utan nationella gränser",
      "Den införde monarki och adelsvälde i hela Europa med ännu starkare kungamakt",
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
      "Napoleon tvingade alla att bli fransmän och använda franska språket i skolor och förvaltning",
      "Han förbjöd alla andra språk och religioner i de erövrade områdena under straff",
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
      "Skolan lärde bara ut matematik och naturvetenskap utan historia eller språk",
      "Skolan var förbehållen adeln och de rikaste familjerna medan folket stod utanför",
    ],
    correctAnswer:
      "Befolkningen lärde sig om nationen och dess historia och ett gemensamt nationellt språk",
    tip: "Gemensamt språk och gemensam historia i skolan knyter ihop nationen.",
  },
  {
    id: "ni-spridning-medier",
    question: "Vilka faktorer drev på nationalismens spridning utöver skolan?",
    options: [
      "Bara kyrkan och de religiösa skrifterna som spreds från prästerna till folket",
      "Bättre kommunikationer (t.ex. järnväg, telegraf) och massdistribuerade tidningar",
      "Endast krig och militära segrar som enade folket mot gemensamma fiender",
      "Endast handel och ekonomisk tillväxt mellan regioner utan politiska budskap",
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
      "Ett enda starkt rike under en kejsare i Berlin med centraliserad makt",
      "Uppdelat i 38 stater som ingick i Tyska förbundet",
      "En del av Frankrike efter Napoleons erövringar och under fransk förvaltning",
      "En del av Ryssland och Österrike tillsammans som ett gemensamt protektorat",
    ],
    correctAnswer: "Uppdelat i 38 stater som ingick i Tyska förbundet",
    tip: "Tyska förbundet leddes av Österrikes kejsare; det fanns många småstater med tullar och gränser.",
  },
  {
    id: "ni-bismarck-blod-jarn",
    question: "Vad menade Bismarck med att ena Tyskland med \"blod och järn\"?",
    options: [
      "Att bygga järnvägar och donera blod för de sårade i krig i stället för att slåss",
      "Att vägen till ett enat rike skulle ske med våld (krig)",
      "Att alla skulle arbeta i gruvor och i järnindustrin för nationens välfärd",
      "Att förbjuda vapen och lösa konflikter fredligt mellan de tyska staterna",
    ],
    correctAnswer: "Att vägen till ett enat rike skulle ske med våld (krig)",
    tip: "Bismarck genomförde tre krig för att ena de tyska staterna.",
  },
  {
    id: "ni-bismarck-krig",
    question: "Mot vilka tre länder genomförde Bismarck krig för att ena Tyskland?",
    options: [
      "Sverige, Norge och Danmark i de skandinaviska krigen under 1860-talet",
      "Danmark 1864, Österrike 1866 och Frankrike 1870–1871",
      "Italien, Spanien och Portugal i syfte att erövra Medelhavskusten",
      "Ryssland, USA och Japan i en global konflikt om handelsrutter",
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
      "I Wien där Österrike och Tyskland sedan länge hade sitt politiska centrum",
      "I Rom som symbol för att Tyskland skulle bli ett nytt heligt romerskt rike",
    ],
    correctAnswer:
      "I Versailles i Frankrike; den preussiske kungen Vilhelm I kröntes till tysk kejsare",
    tip: "Kröningen i Versailles var medvetet vald för att markera seger över Frankrike.",
  },
  {
    id: "ni-tyskland-alsace-lorraine",
    question: "Vilken effekt hade förlusten av Alsace och Lorraine för Frankrike?",
    options: [
      "Frankrike glömde det snabbt och accepterade de nya gränserna utan protester",
      "Det skapade stor revanschlust i Frankrike under kommande år",
      "Frankrike erövrade hela Tyskland och tog tillbaka områdena inom några år",
      "Det påverkade inte relationerna mellan länderna alls och allt blev vänskapligt",
    ],
    correctAnswer: "Det skapade stor revanschlust i Frankrike under kommande år",
    tip: "Förlusten av dessa landskap blev en drivkraft för fransk revanschpolitik.",
  },
  // —— Italien ——
  {
    id: "ni-risorgimento",
    question: "Vad betyder risorgimento i italiensk nationalism?",
    options: [
      "Krig och militär erövring av grannländerna utan politisk eller kulturell enande",
      "Pånyttfödelse – rörelsen för Italiens enande",
      "Kungadöme och monarkins återinförande som enda styre över halvön",
      "Religion och kyrkans ledande roll i enandet under påvens auktoritet",
    ],
    correctAnswer: "Pånyttfödelse – rörelsen för Italiens enande",
    tip: "Risorgimento var den nationalistiska rörelsen som ville ena den italienska halvön.",
  },
  {
    id: "ni-mazzini",
    question: "Vilken roll spelade Giuseppe Mazzini för Italiens enande?",
    options: [
      "Han var kung av Italien och styrde enandet från Rom med absolut makt",
      "Han var nationalistisk företrädare som skrev för enandet och planerade revolution",
      "Han var fransk general som erövrade halvön åt Napoleon och Frankrike",
      "Han var påve och ledde kyrkostaten under Italiens enande",
    ],
    correctAnswer:
      "Han var nationalistisk företrädare som skrev för enandet och planerade revolution",
    tip: "Mazzini är känd som en av de främsta italienska nationalisterna under 1800-talet.",
  },
  {
    id: "ni-garibaldi-rodskjortor",
    question: "Vad var Garibaldis \"rödskjortor\"?",
    options: [
      "En modekreation som spreds från Milano till hela Italien under 1800-talet",
      "En frivillig armé som kämpade för Italiens enande, känd för röda skjortor",
      "En religiös orden under påvens ledning som verkade för fred mellan staterna",
      "Österrikiska soldater som försvarade italienska staterna mot nationalistiska uppror",
    ],
    correctAnswer:
      "En frivillig armé som kämpade för Italiens enande, känd för röda skjortor",
    tip: "Garibaldi ledde frivilliga som med våld erövrade stora delar av den italienska halvön.",
  },
  {
    id: "ni-cavour",
    question: "Vad gjorde Camillo Cavour för Italiens enande?",
    options: [
      "Han var bara kung av en liten italiensk stat utan inflytande över enandet",
      "Han var regeringschef i Piemonte, fick Frankrike att stödja kampen mot Österrike",
      "Han erövrade Rom ensam med en liten armé och tog makten över kyrkostaten",
      "Han avskaffade nationalismen och verkade för att behålla de gamla gränserna mellan staterna",
    ],
    correctAnswer:
      "Han var regeringschef i Piemonte, fick Frankrike att stödja kampen mot Österrike",
    tip: "Cavour var liberal politiker i Piemonte och drev diplomati och allianser för enandet.",
  },
  {
    id: "ni-italien-1861",
    question: "När enades Italien till ett kungarike och vilket land ledde enandet?",
    options: [
      "1871 under Preussen som då kontrollerade halvön efter kriget mot Frankrike",
      "1861; kungariket Sardinien-Piemonte ledde enandet",
      "1832 under Grekland som allierat med Italien i en gemensam federation",
      "1815 under Österrike efter Wienkongressen och restaurationspolitiken",
    ],
    correctAnswer: "1861; kungariket Sardinien-Piemonte ledde enandet",
    tip: "1861 utropades Kungariket Italien; Piemonte och Cavour var centrala.",
  },
  {
    id: "ni-rom-vatikanen",
    question: "Hur förhåller sig Rom och Vatikanstaten till Italiens enande?",
    options: [
      "Rom var alltid italienskt och påven flyttade till Florens som ny kyrklig huvudstad",
      "Italien erövrade Rom 1870 som blev huvudstad; påven garanterades skydd och Vatikanen blev världens minsta stat",
      "Påven förbjöd Italiens enande och exkommunicerade Garibaldi och alla nationalister",
      "Vatikanen styrde hela Italien genom en union mellan kyrka och stat under påvens ledning",
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
      "Ett militärsystem där provinser försvarades av lokala trupper under sultanens befäl",
      "Att religiösa minoriteter hade visst självstyre och egna lagar under osmanerna",
      "Ett skattesystem som fördelade skatter mellan olika folkgrupper efter deras inkomst",
      "Ett språksystem där alla måste tala turkiska i förvaltningen och i skolorna",
    ],
    correctAnswer:
      "Att religiösa minoriteter hade visst självstyre och egna lagar under osmanerna",
    tip: "Millet-systemet gav minoriteter viss autonomi men under osmannisk överhöghet.",
  },
  {
    id: "ni-osmanska-splittring",
    question: "Varför splittrades Osmanska riket under 1800- och tidiga 1900-talet?",
    options: [
      "Bara på grund av klimat och missväxt som försvagade riket ekonomiskt och militärt",
      "Nationalismen spreds bland minoriteter som krävde självständighet; inre och yttre tryck",
      "Österrike erövrade det helt efter första världskriget och lade det under kejsaren",
      "Det splittrades inte utan förblev enat under sultanen fram till nutiden",
    ],
    correctAnswer:
      "Nationalismen spreds bland minoriteter som krävde självständighet; inre och yttre tryck",
    tip: "Flera folkgrupper ville bilda egna nationalstater; riket kallades ”Europas sjuke man”.",
  },
  {
    id: "ni-osmanska-1923",
    question: "Vad återstod av Osmanska riket år 1923?",
    options: [
      "Hela riket förblev intakt med samma gränser som under 1800-talet",
      "En liten del – det som är dagens Turkiet",
      "Ingenting – imperiet upplöstes helt och alla territorier blev självständiga stater",
      "Bara Balkan – övriga delar förlorades till Ryssland och Storbritannien",
    ],
    correctAnswer: "En liten del – det som är dagens Turkiet",
    tip: "Första världskriget och nationalismen ledde till att imperiet ersattes av många stater; kvar blev dagens Turkiet.",
  },
  {
    id: "ni-europas-sjuke-man",
    question: "Vilket rike kallades \"Europas sjuke man\" och varför?",
    options: [
      "Storbritannien på grund av sjukdomar och ekonomisk kris under 1800-talet",
      "Osmanska riket – uttryck för hur svagt riket hade blivit",
      "Frankrike på grund av revolution och inre splittring under 1800-talet",
      "Tyskland efter 1871 på grund av förlusten i första världskriget",
    ],
    correctAnswer: "Osmanska riket – uttryck för hur svagt riket hade blivit",
    tip: "Uttrycket användes för att beskriva det sönderfallande Osmanska riket.",
  },
  // —— Österrike-Ungern ——
  {
    id: "ni-osterrike-ungern",
    question: "Vad hände med Österrike 1867?",
    options: [
      "Det försvann och delades upp i många småstater redan under 1860-talet",
      "Det bildade unionen Österrike-Ungern (dubbelmonarki) under Frans Josef",
      "Det erövrade Frankrike och blev Europas starkaste makt efter krigssegrar",
      "Det enades med Italien i en stor central europeisk federation under en kejsare",
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
      "Det splittrades inte utan förblev en dubbelmonarki fram till andra världskriget",
      "Påven krävde det och påvliga bullor tvingade kejsaren att ge upp territorierna",
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
      "1600-talet när de första stora kolonialimperierna grundades i Amerika och Asien",
      "1870–1914 (slutet av 1800-talet och början av 1900-talet)",
      "Medeltiden när korsfararna och handelsmännen etablerade utposter i Östern",
      "Efter andra världskriget när de gamla kolonialmakterna återtog sina territorier",
    ],
    correctAnswer: "1870–1914 (slutet av 1800-talet och början av 1900-talet)",
    tip: "Imperialismen var en intensifierad kolonialism med ökad tävling om kolonier.",
  },
  {
    id: "ni-imperialism-orsak-ww1",
    question: "Vad var imperialismen i förhållande till första världskriget?",
    options: [
      "Ingen koppling – imperialismen upphörde innan kriget och påverkade inte allianserna",
      "En bakomliggande orsak till första världskriget",
      "Ett resultat av kriget som kom efter att kolonierna förlorats till segrarmakterna",
      "Bara ett begrepp som inte påverkade politik eller konflikter mellan stormakterna",
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
      "Avskaffande av handel mellan Europa och andra världsdelar för att skydda inhemsk industri",
      "Endast kulturellt utbyte utan makt eller politisk kontroll över erövrade territorier",
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
      "Ingen särskild benämning – bara en koloni bland många i imperiets periferi",
      "\"Juvelen i kronan\" – Storbritanniens viktigaste koloni",
      "Den fattigaste kolonin som krävde mest bistånd från London för att överleva",
      "En provins utan betydelse för handel eller strategi i det brittiska imperiet",
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
      "Ett krig mellan Frankrike och Tyskland om kolonierna i Afrika under slutet av 1800-talet",
      "Ett handelsspel där länder tävlade om att sälja mest varor till kolonierna",
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
      "Kritik mot imperialismen och kolonialmakternas övergrepp och utnyttjande av folk",
      "Om jordbruk och hur kolonierna skulle odla nya grödor för export till Europa",
    ],
    correctAnswer:
      "Budskapet att vita människor hade \"plikten\" att styra och \"civilisera\" andra folk – användes för att motivera kolonial expansion",
    tip: "Dikten blev en symbol för kolonial och imperialistisk rättfärdigande.",
  },
  {
    id: "ni-divide-et-impera",
    question: "Vad betyder \"söndra och härska\" (divide et impera) i kolonial kontext?",
    options: [
      "Att ena alla folkgrupper under ett gemensamt språk och lagar i kolonierna",
      "Att splittra urbefolkningen i kolonierna så att olika grupper krigade mot varandra och kolonisatörerna lättare kunde kontrollera dem",
      "Att avveckla arméer och lägga resurser på skolor och sjukvård istället för krig",
      "Att bygga skolor och sprida kristendomen till alla invånare i de erövrade territorierna",
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
      "Industrialismen avskaffade imperialismen eftersom fabriker inte behövde kolonier längre",
      "Nationalismen förbjöd kolonier och krävde att alla länder skulle vara helt självständiga",
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
      "Endast våldsamma demonstrationer och hat mot andra länder och folkgrupper",
      "Att nationen återskapar sig genom vardagliga saker (flaggor, pengar, idrott) utan att man nödvändigtvis tänker på det",
      "Att det inte finns nationalism i moderna samhällen utan bara i historien",
      "Bara i krig och vid militära evenemang när folket samlas kring flaggan",
    ],
    correctAnswer:
      "Att nationen återskapar sig genom vardagliga saker (flaggor, pengar, idrott) utan att man nödvändigtvis tänker på det",
    tip: "Banal nationalism är det som gör nationen självklar i vardagen – till skillnad från tydligt aggressiv nationalism.",
  },
  {
    id: "ni-patriotism",
    question: "Vad betyder patriotism?",
    options: [
      "Hat mot andra länder och krav på att egna intressen alltid går före andras",
      "Fosterlandskärlek – lojalitet och kärlek till det egna landet eller staten",
      "Samma som imperialism – att utöva makt över andra länder och erövra territorier",
      "Avsaknad av nationell känsla och vilja att avskaffa gränser mellan alla länder",
    ],
    correctAnswer: "Fosterlandskärlek – lojalitet och kärlek till det egna landet eller staten",
    tip: "En patriot är en person som älskar sitt land och främjar dess intressen.",
  },
  ...quizQuestionsNationalismInstudering,
];
