import { useState } from 'react';

const pacchetti = [
  {
    id: 1,
    titolo: 'Weekend a Parigi',
    descrizione: '3 giorni / 2 notti in hotel 4 stelle con colazione inclusa.',
    prezzo: 299,
    immagine: 'https://source.unsplash.com/featured/?paris',
  },
  {
    id: 2,
    titolo: 'Tour Sicilia Classica',
    descrizione: '7 giorni tra Palermo, Catania e Taormina con guida.',
    prezzo: 799,
    immagine: 'https://source.unsplash.com/featured/?sicily',
  },
  {
    id: 3,
    titolo: 'Capodanno a New York',
    descrizione: '5 notti a Manhattan, volo incluso, party di Capodanno.',
    prezzo: 1599,
    immagine: 'https://source.unsplash.com/featured/?newyork',
  },
];

export default function Home() {
  const [carrello, setCarrello] = useState([]);

  const aggiungiAlCarrello = (p) => {
    setCarrello([...carrello, p]);
    window.open(`https://www.paypal.com/paypalme/fantasticopay/${p.prezzo}`, '_blank');
  };

  return (
    <div style={{ display: 'grid', gap: 20, padding: 20 }}>
      {pacchetti.map((p) => (
        <div key={p.id} style={{ border: '1px solid #ddd', padding: 20, borderRadius: 10 }}>
          <img src={p.immagine} alt={p.titolo} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
          <h2>{p.titolo}</h2>
          <p>{p.descrizione}</p>
          <p><strong>€ {p.prezzo}</strong></p>
          <button onClick={() => aggiungiAlCarrello(p)}>Acquista con PayPal</button>
        </div>
      ))}
    </div>
  );
}