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
    photos: [],
    letter: {
      greeting: 'Lieve Faay,',
      body:     'Jouw tekst komt hier...',
      signoff:  'Liefs, Kyra',
    },
  },
  {
    iata:   'KTT',
    friend: 'Jaad',
    city:   'Finland 2024',
    label:  'Jaad - Finland 2024',
    quote:  'Kou, lichten en avonturen in het hoge noorden',
    photo:  'https://www.figma.com/api/mcp/asset/6d02a3c3-fe2c-4224-8f89-3ee2df8b3ee4',
    photos: [],
    letter: {
      greeting: 'Lieve Faay,',
      body:     'Jouw tekst komt hier...',
      signoff:  'Liefs, Jaad',
    },
  },
  {
    iata:   'GIG',
    friend: 'Maud',
    city:   'Rio de Janeiro 2025',
    label:  'Maud - Rio de Janeiro 2025',
    quote:  "Carnaval, caipirinha's en de mooiste zonsondergangen",
    photo:  'https://www.figma.com/api/mcp/asset/5545028a-3ef5-4a9f-b146-86b3cce945d5',
    photos: [],
    letter: {
      greeting: 'Lieve Faay,',
      body:     'Jouw tekst komt hier...',
      signoff:  'Liefs, Maud',
    },
  },
  {
    iata:   'DPS',
    friend: 'Lara',
    city:   'Bali 2025',
    label:  'Lara - Bali 2025',
    quote:  'Savaya, dropshippers & taxi chachi avonturen',
    photo:  'https://www.figma.com/api/mcp/asset/d697aa29-fc3b-4e19-a28b-b84cb134e5be',
    photos: [],
    letter: {
      greeting: 'Lieve Faay,',
      body:     'Gefeliciteerd met je nieuwe bestemming.....\n\nJouw tekst komt hier...',
      signoff:  'Liefs,\nLara',
    },
  },
  {
    iata:   'FCO',
    friend: 'Sarah',
    city:   'Rome 2025',
    label:  'Sarah - Rome 2025',
    quote:  'Pasta, piazze e pomeriggi perfetti sotto il sole',
    photo:  'https://www.figma.com/api/mcp/asset/cb29a677-45da-4807-86dc-17a1b9d16c80',
    photos: [],
    letter: {
      greeting: 'Lieve Faay,',
      body:     'Jouw tekst komt hier...',
      signoff:  'Liefs, Sarah',
    },
  },
]

export const openDestinations = [
  { hint: 'Add your first KLM Destination' },
  { hint: 'Another adventure waiting' },
  { hint: 'The world is your oyster' },
]
