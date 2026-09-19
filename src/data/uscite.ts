// Calendario delle uscite. Per aggiungere una voce basta copiare una riga.
// data: AAAA-MM-GG oppure solo AAAA-MM se il giorno non è ancora noto
// articolo: slug di un articolo collegato (facoltativo)

export interface Uscita {
  data: string;
  titolo: string;
  piattaforme: string[];
  tipo: 'gioco' | 'hardware' | 'software';
  nota?: string;
  articolo?: string;
}

export const USCITE: Uscita[] = [
  { data: '2026-09-14', titolo: 'iOS 27 e iPadOS 27', piattaforme: ['iPhone', 'iPad'], tipo: 'software', nota: 'Siri AI non ancora disponibile in UE', articolo: 'aggiornare-a-ios-27-guida' },
  { data: '2026-09-18', titolo: 'iPhone 18 Pro e 18 Pro Max', piattaforme: ['Apple'], tipo: 'hardware', nota: 'Da 1.489 €', articolo: 'iphone-18-pro-prezzi-italia-uscita' },
  { data: '2026-09-18', titolo: 'Apple Watch Series 12, Ultra 4 e AirPods 5', piattaforme: ['Apple'], tipo: 'hardware' },
  { data: '2026-09-21', titolo: 'One UI 9 (Android 17), prima fase globale', piattaforme: ['Samsung Galaxy S26'], tipo: 'software', nota: 'Poi a scaglioni fino a novembre', articolo: 'one-ui-9-android-17-samsung-quando-arriva' },
  { data: '2026-09-29', titolo: 'The Witcher 3: Wild Hunt per Switch 2', piattaforme: ['Switch 2'], tipo: 'gioco', nota: 'Con controlli mouse e movimento', articolo: 'nintendo-direct-settembre-2026-annunci' },
  { data: '2026-10-02', titolo: 'Ace Combat 8: Wings of Theve', piattaforme: ['PS5', 'Xbox Series', 'PC'], tipo: 'gioco' },
  { data: '2026-10-06', titolo: 'Gears of War: E-Day', piattaforme: ['Xbox Series', 'PC'], tipo: 'gioco', nota: 'Incluso in Game Pass Ultimate. Accesso anticipato dal 1° ottobre con la Premium' },
  { data: '2026-10-08', titolo: 'Kingdom Hearts Collection [I-III]', piattaforme: ['PS5', 'Xbox Series'], tipo: 'gioco' },
  { data: '2026-10-09', titolo: "Dragon's Dogma II: Dark Arisen", piattaforme: ['PS5', 'Xbox Series', 'PC'], tipo: 'gioco' },
  { data: '2026-10-13', titolo: 'Planet Zoo 2', piattaforme: ['PS5', 'Xbox Series', 'PC'], tipo: 'gioco' },
  { data: '2026-10-14', titolo: 'Warhammer 40,000: Boltgun 2', piattaforme: ['PC', 'Console'], tipo: 'gioco' },
  { data: '2026-10-15', titolo: "Castlevania: Belmont's Curse", piattaforme: ['Multipiattaforma'], tipo: 'gioco' },
  { data: '2026-10-16', titolo: 'iPhone Duo, apertura preordini', piattaforme: ['Apple'], tipo: 'hardware', nota: 'Dalle 14:00', articolo: 'iphone-duo-pieghevole-apple-uscita-prezzo' },
  { data: '2026-10-23', titolo: 'Call of Duty: Modern Warfare 4', piattaforme: ['PS5', 'Xbox Series', 'PC', 'Switch 2'], tipo: 'gioco', nota: 'Campagna in accesso anticipato dal 16 ottobre per chi prenota il digitale' },
  { data: '2026-10-23', titolo: 'iPhone Duo nei negozi', piattaforme: ['Apple'], tipo: 'hardware', nota: 'Da 2.369 €', articolo: 'iphone-duo-pieghevole-apple-uscita-prezzo' },
  { data: '2026-10-29', titolo: 'Phantom Blade Zero', piattaforme: ['PS5', 'PC'], tipo: 'gioco' },
  { data: '2026-11-12', titolo: 'GTA VI, precaricamento digitale', piattaforme: ['PS5', 'Xbox Series'], tipo: 'gioco', articolo: 'gta-6-uscita-19-novembre-cosa-sappiamo' },
  { data: '2026-11-19', titolo: 'Grand Theft Auto VI', piattaforme: ['PS5', 'Xbox Series'], tipo: 'gioco', nota: 'Nessuna versione PC annunciata', articolo: 'gta-6-uscita-19-novembre-cosa-sappiamo' },
  { data: '2026-12-04', titolo: 'Monster Hunter Wilds per Switch 2', piattaforme: ['Switch 2'], tipo: 'gioco', articolo: 'nintendo-direct-settembre-2026-annunci' },
  { data: '2027-01-28', titolo: 'Metroid Ravenous', piattaforme: ['Switch 2'], tipo: 'gioco', nota: 'Esclusiva Switch 2', articolo: 'nintendo-direct-settembre-2026-annunci' },
  { data: '2027-01-28', titolo: 'Until Dawn 2', piattaforme: ['PS5'], tipo: 'gioco', articolo: 'state-of-play-settembre-2026-annunci' },
  { data: '2027-02-04', titolo: 'Metro 2039', piattaforme: ['PS5', 'Xbox Series', 'PC'], tipo: 'gioco', articolo: 'state-of-play-settembre-2026-annunci' },
  { data: '2027-03-05', titolo: 'Gundam: Rogue Orbit', piattaforme: ['PS5'], tipo: 'gioco', articolo: 'state-of-play-settembre-2026-annunci' },
  { data: '2027-04-08', titolo: 'Final Fantasy VII Revelation', piattaforme: ['PS5', 'Switch 2'], tipo: 'gioco', nota: 'Capitolo finale della trilogia Remake', articolo: 'state-of-play-settembre-2026-annunci' },
  { data: '2027-03', titolo: 'Kirby and the World Beyond', piattaforme: ['Switch 2'], tipo: 'gioco', nota: 'Primavera 2027, data da definire', articolo: 'nintendo-direct-settembre-2026-annunci' },
];
