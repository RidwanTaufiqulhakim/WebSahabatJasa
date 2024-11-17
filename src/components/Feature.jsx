import React from 'react';
import './Features.css';

const Features = () => {
  const categories = [
    'Grafis dan Desain',
    'Konten Kreasi',
    'Visual dan Audio',
    'Penulisan dan Penerjemahan',
    'Gaya Hidup',
    'Pertukangan',
    'Konsultasi',
    'Pemasaran dan Periklanan',
    'Hewan',
    'Web dan Pemrograman',
    'Event Organizer',
    'Instalasi',
    'Aneka Ragam',
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
