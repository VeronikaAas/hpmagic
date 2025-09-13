## Hovedoppgaver (React, Vite, Vanilla CSS)

- Enkel webapp som henter og viser data fra API
- Hente lister med elementer fra API
- Filtrere resultatet
- Klikke på elementer for å få opp mer informasjon
- Siden skal fungere på mobil og desktop
- Feilhåndtering om API ikke svarer

## 06.09.25

- Lese på de forskjellige API'ene, og velge ut hvem jeg skal bruke.
- Starte prosjektet med npm create vite@latest (React, JavaScript), cd til fil, npm install.
- Installerte Prettier som kjøres på hver save, slik at koden ser ryddigere ut.
- Lagde utils/constants.mjs fil hvor jeg definerer og eksporter URL-konstanter fra ulike endepunkt.
  - Brukes til å hente data om bøker, karakterer, filmer, eliksirer og trylleformler.
- Testet så i app.jsx om jeg hadde fått "tak" i API'en, data viste seg på siden og da vet jeg at jeg har basen på plass.
- Jobbet med å finne inspirasjon og laget et ca design til siden.
- Lage elementer til siden i Adobe Illustrator

## 08.09.25

- Lage mappestruktur i prosjektet
- Lagde global css fil (index.css), hvor jeg valgte bakgrunnsfarge, font til titler, og brødtekst/knappe font.
- Installerte React Router Dom og begynte å sette opp en router
- Sidenote: ser jeg har brukt feat som meaningful commit når jeg skulle brukt build i "oppsettfasen".
- Fått inn innhold på Homepage
- Laget Navbar/Header
- Fått fetchet og displayet bøkene & mer informasjon om hver enkelt bok (vil style senere)

## 09.09.25

- Fått satt opp et reusable grid-system (må pyntes mer på)
- Fått fetchet og displayet movies & mer informasjon om hver movie
- Satt opp en base for reusable modal som går igjen på de "pop-upsa" med mer informasjon (må styles mer)
- Stylet homepage, fikk "Hevig" til å bli sentrert med tekst sentrert under
- La til hamburger meny til mindre skjermer + styling

## 10.09.25

- Fetchet og displayet characters + tilhørende modal
- Fetchet og displayet spells + tilhørende modal
- Fetchet og displayet potions + tilhørende modal

## 11.09.25

- Stylet informasjon som vises over chapters på bøker
- Stylet informasjon som vises når man klikker seg inn på en film
- Endret farge på breadcrumbs så den passer mer inn på siden
- I stedet for å bare gjøre den blåfargen til root farge som går igjen så la jeg inn den oransje fargen også (og endret der etter til å bruke denne)
- Stylet søkefelt og house-filter for karakterene
- Gikk opp for meg at jeg kunne lage globalstyle på design fra searchbar, jeg fikk det til på søkefeltene man skriver i - men ikke i dropdown filter
- Stylet modalene til å passe uansett skjermstørrelse og viser all informasjon
- Kuka (pardon my french) det skikkelig til med deploy av side på Netlify. Av en grunn jeg enda ikke har skjønt, så får jeg det kun til med å bruke terminal og netlify CLI. Hadde et svakt øyeblikk hvor jeg rota med hvor filene skulle ligge, så ble mye tull med commit (så har lite lyst til å røre de 14 filene som ligger i source control).
- Så jeg hadde lagt til error.console, men ikke error melding til brukeren - så la det så det synes for bruker også

## 12.09.25

- Lagt til en form for JSdocs, bare med enkel norsk forklaring på koden
- Oppdatert readme file

## 13.09.25

- La til document title på hcer side
