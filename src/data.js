// ─── Figma asset URLs (refreshed 2026-06-02) ─────────────────────────────────
export const assets = {
  klmLogoMask:   'https://www.figma.com/api/mcp/asset/ef7318d8-68ff-49cf-a098-64240b723f6d',
  avatar:        'https://www.figma.com/api/mcp/asset/8a216ce4-dc43-474f-adff-09138ff7f3d1',
  newDestCircle: 'https://www.figma.com/api/mcp/asset/85e394d6-e94c-478f-a97a-238ed9874652',
  newDestPlane:  'https://www.figma.com/api/mcp/asset/0b4b33eb-518e-48a7-805e-0c43a550f66f',
  barcode:       'https://www.figma.com/api/mcp/asset/d0fc5649-2ee0-4037-96fd-c11f4638fcbd',
}

export const passenger = {
  name: 'Faya Shiekh',
  avatar: assets.avatar,
}

export const flightInfo = {
  from: { code: '20s', label: 'YOUR TWENTIES' },
  to:   { code: '30s', label: 'YOUR THIRTIES' },
  gate: 'KLM',
  date: '01-06-2026',
  seat: 'Window',
}

// ─── Stopovers ────────────────────────────────────────────────────────────────
// Each stopover has:
//   photo       — hero image (top of overlay)
//   photos      — array of polaroid photos shown in the collage (up to 6)
//   letter      — the handwritten letter from each friend
export const stopovers = [
  {
    iata:   'DUB',
    friend: 'Kyra',
    city:   'Dublin 2024',
    label:  'Kyra - Dublin 2024',
    quote:  'Weekendje live muziek, baby guinness en gezelligheid',
    photo:  'https://www.figma.com/api/mcp/asset/64ea33a9-e301-4ff4-893d-26a301a79490',
    photos: [
      '/photos/dub/1.jpeg',
      '/photos/dub/2.jpeg',
      '/photos/dub/3.jpeg',
      '/photos/dub/4.jpeg',
      '/photos/dub/5.jpeg',
    ],
    letter: {
      greeting: 'Lieve Faay,',
      body: [
        'En dan was het moment daar,\nDe start van jouw 30ste levensjaar.',
        'Wat een mooie reizen en ervaringen heb jij tot nu toe gehad,\nIBP’en met je zusjes, reisjes naar Azië, weekendjes weg, het liefst ben jij op pad.',
        'In maart 2024 vlogen wij met elkaar naar Dublin,\nSamen met Jaad, Laar en jouw als ervaren reisvriendin.',
        'Want van tevoren doe jij al uitgebreid onderzoek en heb jij vaak de omgeving al eerder verkend,\nVan culturele sight-seeings, cocktailbarretjes en de leukste en hipste eettent.',
        'We verbleven in Pembroke Townhouse, samen met onze gastheer Gerard zooo galant,\nDie had alles in de gaten en zorgde tijdens onze brakje ochtendjes voor een verse croissant.',
        'Een scone bij Avoca en een cocktailworkshop bij Roe & Co,\n’s avonds nog een klein dansje bij Nolita met een drum en vuurwerkshow.',
        'Een traditionele avond met livemuziek bij Lundy’s Foot,\nen onze Sluijs die tijdens het uitgaan weer een leuke Engelsman heeft ontmoet.',
        'Met elkaar uit eten bij de Grayson, met live partymuziek op het toilet,\nToch belanden jullie ‘onze mooie singles’ keurig ’s avonds weer in je eigen bed.',
        'Een bezoekje aan Trinity College Dublin voor wat culturele verbreding,\nNu zijn we in 2026, de start van jouw nieuwe baan, de KLM mag in hun handen klappen met jouw indiensttreding.',
        'Wat een ontzettend nieuw gaaf avontuur ga jij tegemoet,\nIk ben heel erg trots op hoe je deze switch hebt gemaakt en dit allemaal zo succesvol doet.',
        '11 mei ging je van start met verschillende trainingen en voor het eerst meedraaien in de lucht,\nWat staat het blauwe pakje jou goed, een onwijs mooie verschijning voor elke vlucht.',
        'Ik kijk heel fijn terug op deze mooie herinneringen in Dubs en natuurlijk op de heerlijke Baby Guiness,\nWie weet ga jij hier nog een keer naar terug in jouw rol als Stewardess.',
        'Geniet van alle mooie momenten die nog komen gaan,\nDie gepland kunnen zijn, maar bij jou ook vaak spontaan kunnen ontstaan.',
      ].join('\n\n'),
      signoff: 'Veel liefs,\nKyr',
    },
  },
  {
    iata:   'KTT',
    friend: 'Jaad',
    city:   'Finland 2024',
    label:  'Jaad - Finland 2024',
    quote:  'Kou, lichten en avonturen in het hoge noorden',
    photo:  'https://www.figma.com/api/mcp/asset/6d02a3c3-fe2c-4224-8f89-3ee2df8b3ee4',
    photos: [
      '/photos/ktt/1.jpeg',
      '/photos/ktt/2.jpeg',
      '/photos/ktt/3.jpeg',
      '/photos/ktt/4.jpeg',
      '/photos/ktt/5.jpeg',
      '/photos/ktt/6.jpeg',
    ],
    letter: {
      greeting: 'Bestemming: Finland 🇫🇮',
      body: [
        'Welkom aan boord van vlucht FI-030 richting Finland, een land waar de zon in de winter erg zeldzaam is.',
        'Om je voor te bereiden, hier wat herinneringen van je reis in 2024. De reis begon goed: op kosten van Johan mochten we dit bijzondere stukje wereld ontdekken. Eenmaal aangekomen in het noorden kwamen we er al snel achter dat er met slechts een paar uur daglicht niet veel anders op zat dan vanaf een uur of drie ’s middags in de pub yätzy te spelen. Gelukkig zijn de Finnen volledig voorbereid op een leven in het donker.',
        'Zo werden we getrakteerd op het hoogtepunt van de week: bingo. Geen doorsnee bingo, maar een bingo met spectaculaire prijzen zoals een ijsvishengel en een naaimachine. Helaas gingen we met lege handen naar huis, maar dromen mag altijd.',
        'Tussen alle activiteiten door kan het zomaar gebeuren dat je in een hangmat belandt, midden in een besneeuwd bos bij -10 graden. Gelukkig is daar altijd de Hollandse Stephan en zijn vrouw Rita, die op een vuurtje een verse koffie voor je zetten zodat je langzaam weer gevoel krijgt in je vingers.',
        'De dagen werden afgesloten zoals het hoort: met rendierstoof, een sauna en het gevoel dat je eigenlijk best goed bent ingeburgerd.',
        'Finland bleek daarnaast een land vol fantasie. Van de kerstman tot elfen en complete fantasiewerelden in het bos: we hebben het allemaal gezien. Soms vraag je je af of de Finnen een beetje kierewiet zijn geworden van al die maanden donkerte, maar eerlijk is eerlijk: het maakt het wel gezellig.',
        'En voor het slapengaan was er altijd nog één belangrijke taak: de aurora-app checken. Want misschien, heel misschien, zou het noorderlicht verschijnen. Als de KP-index goed was, stonden we binnen no-time bij de auto om ieder groen streepje aan de hemel te bewonderen.',
        'Voor jouw volgende vlucht naar Finland wensen we je veel bessen, rendieren, bingo-overwinningen en natuurlijk een prachtig noorderlicht 🌲❄️',
      ].join('\n\n'),
      signoff: '',
    },
  },
  {
    iata:   'GIG',
    friend: 'Maud',
    city:   'Rio de Janeiro 2025',
    label:  'Maud - Rio de Janeiro 2025',
    quote:  "Carnaval, caipirinha's & de dirty thirty inluiden in Rio 🇧🇷",
    photo:  'https://www.figma.com/api/mcp/asset/5545028a-3ef5-4a9f-b146-86b3cce945d5',
    photos: [
      '/photos/gig/1.jpg',
      '/photos/gig/2.jpg',
      '/photos/gig/3.jpg',
      '/photos/gig/4.jpg',
      '/photos/gig/5.jpg',
    ],
    letter: {
      greeting: 'Lieve Faay,',
      body: [
        'Van harte gefeliciteerd! 🥂 Gewoon onze eerste dirty 30. Gelukkig houdt die Korean skin care je nog stiekem een 20\'er. En wat hebben we afgelopen tijd toch veel meegemaakt met elkaar. Onze vriendschap is deze laatste jaren zo hecht geworden. Dat ze zelfs ja zei op de bizarre vraag, "Wie gaat er mee naar Rio om onze reis af te sluiten." 🇧🇷',
        'Van één iemand was de kans toch het grootste om daadwerkelijk een ticket te boeken (oftewel te IPB\'en). En dan ook nog eens zo\'n lange vlucht heerlijk business class. Na elkaar bijna een jaar niet te zien hebben we een aantal volle dagen samen met Jimmy (en je oud collega\'s) mogen genieten van carnaval in Rio. Wat een ervaring en wat zijn wij goed afgestemd op elkaar in wat we leuk vinden op zo\'n reis/vakantie.',
        'Daarnaast is het ook heel bijzonder hoe dit met zijn 3e was. Niet aanhang van een stel maar echt als drie vrienden! 👫🏼 Van een helikoptervlucht over de bewolkte Jezus Christ tot te laat komen op een zonsondergang party op de Sugarloaf mountain en dronken tijdens carnaval door de gevaarlijke straten van Rio struinen zonder beroofd te worden of enge ervaringen. Het was in één woord FANTASTISCH! ✨ Een trip die we zeker nog een keer gaan maken samen met de andere meiden.',
        'En dan nu als allereerste de 30 aangetikt. Hoe bijzonder dat je je jaar aftrapt met je eerste weken als stewardess. Wat staat het je goed en wat ga jij genieten van deze baan. Iets wat al jaren op je lijf geschreven staat. Ookal zullen we straks werelddelen van elkaar verwijderd zijn, zo\'n vriendschap raken we niet meer kwijt. De jaarlijkse citytrips plannen we gewoon om je schema heen want jij gaat hier hoe dan ook geen jaar van missen.',
        'Lieve Faay, ik wens je aankomende tijd alle geluk en vooral veel blijheid toe! Jij gaat dit geweldig doen. Ik ben echt heel erg trots op je. I love you!',
      ].join('\n\n'),
      signoff: 'Liefs, Maud 💕',
    },
  },
  {
    iata:   'DPS',
    friend: 'Lara',
    city:   'Bali 2025',
    label:  'Lara - Bali 2025',
    quote:  'Savaya, dropshippers & taxi chachi avonturen',
    photo:  'https://www.figma.com/api/mcp/asset/d697aa29-fc3b-4e19-a28b-b84cb134e5be',
    // Demo polaroids from the Figma overlay — swap for Lara's real photos
    photos: [
      'https://www.figma.com/api/mcp/asset/90a55b60-cb4a-4d26-8586-8b233d4a9baf',
      'https://www.figma.com/api/mcp/asset/134f1414-e821-43da-b30d-c6a2ab5bb092',
      'https://www.figma.com/api/mcp/asset/6b1f2c85-d511-4e4c-a835-32ee03ec5d71',
      'https://www.figma.com/api/mcp/asset/fbbf4b3b-af38-4566-84e8-08cc9bf33602',
      'https://www.figma.com/api/mcp/asset/55638e2e-f3f0-46ee-8c10-fe1aa7ac9766',
      'https://www.figma.com/api/mcp/asset/2901ca88-8204-4dc2-8d5b-5858fbfd1a16',
    ],
    letter: {
      greeting: 'Lieve schat,',
      body: [
        'Gefeliciteerd met je dirty thirty! Stiekem heel fijn dat jij als eerste van ons het voorbeeld geeft, want als jij op je 30e nog zo fabulous, jong en avontuurlijk door het leven gaat, hoeven wij ons voorlopig geen zorgen te maken. Het zit wel goed met ons allemaal. 😌',
        'En avontuur, dat ga jij de komende tijd zeker niet tekort komen. Ik ben zo ontzettend trots op hoe je de afgelopen tijd je eigen pad hebt bewandeld. Grenzen aangeven op je oude werk, en dan ook echt de knoop doorhakken en je leven omgooien. Niet iedereen durft dat, maar jij wel! Je nieuwe bestemming: KLM. Zo exciting!! De outfit staat je in iedergeval amazinggg.',
        'Zo blij met alle herinneringen die we de afgelopen jaren hebben gemaakt. Met de katjes, maar ook samen. En dan met name ons Bali avontuur 😍 Zon, zee, strand, en het nodige bijzondere volk zoals Melvin en Crispijn. Dropshippers die dachten dat ze de wereld begrepen, terwijl wij gewoon genoten van het leven. Hilarische avonden en afro parties in Da Maria en Mesa, eindeloos lachen met Tess en precies de juiste mensen op precies de verkeerde momenten tegenkomen. En dan natuurlijk onze spetterende avond bij Savaya (letterlijk ☔️) met Black Coffee. Ik denk er nog steeds aan terug met veel plezier. Dat was er eentje voor de boeken.',
        'Hopelijk kunnen we komende jaren nog veel meer tripjes maken. Voor nu wens ik jou heel veel plezier en succes met jouw nieuwe bestemming. Ik kijk er nu al naar uit om al je verhalen te horen. En vlieg uiteraard graag een keer met je mee 🤩',
      ].join('\n\n'),
      signoff: 'Love you xxx\nLaar',
    },
  },
  {
    iata:   'FCO',
    friend: 'Sarah',
    city:   'Rome 2025',
    label:  'Sarah - Rome 2025',
    quote:  'Pasta, piazze e pomeriggi perfetti sotto il sole',
    photo:  'https://www.figma.com/api/mcp/asset/cb29a677-45da-4807-86dc-17a1b9d16c80',
    photos: [
      '/photos/fco/1.jpeg',
      '/photos/fco/2.jpeg',
      '/photos/fco/3.jpeg',
      '/photos/fco/4.jpeg',
      '/photos/fco/5.jpeg',
    ],
    letter: {
      greeting: 'Lief lief mopje,',
      body: [
        'Van harte gefeliciteerd met je 30ste verjaardag 💕 Bye twentiesss, helllo dirty thirty!!! Wat een mooi jaar was het toch ook met o.a. een leuke trip naar Rome. Wat hebben we hier genoten met elkaar, het heeerlijke eten met goede wijntjes en met als kers op de taart, de kroegen tocht van onze vriend Marco (POLO!). De grootste lol gehad en mooie herinneringen gemaakt!',
        'En nu ga jij mooie herinneringen maken in de lucht en bij prachtige nieuwe bestemmingen! Zo trots op hoe je het nu allemaal doet en waar je mee bezig bent, je bent een toppertje.',
        'We proosten op jou en op een prachtig nieuw hoofdstuk!',
      ].join('\n\n'),
      signoff: 'Een hele dikke kus en heel veel liefs,\nSaar 💖',
    },
  },
]

export const openDestinations = [
  { hint: 'Add your first KLM Destination' },
  { hint: 'Another adventure waiting' },
  { hint: 'The world is your oyster' },
]
