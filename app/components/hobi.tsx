'use client'; // Menandai komponen ini sebagai komponen klien

import React, { useState } from 'react';
import Image from 'next/image';
import hobby1 from '../hobi1.jpg';
import hobby2 from '../hobi2.jpg';
import hobby3 from '../hobi3.jpg';
import hobby4 from '../hobi4.jpg';

const HobbiesGallery: React.FC = () => {
  const hobbies = [
    { id: 1, title: 'Futsal', image: hobby1 },
    { id: 2, title: 'Programmer', image: hobby2 },
    { id: 3, title: 'Gitar', image: hobby3 },
    { id: 4, title: 'Tenis Meja', image: hobby4 },
  ];

  // Objek gaya dengan tema transparan
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'transparent', // Mengatur latar belakang menjadi transparan
      color: '#333333', // Teks abu gelap
      fontFamily: 'Arial, sans-serif',
    } as React.CSSProperties,
    title: {
      color: '#333', // Warna teks abu gelap
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    } as React.CSSProperties,
    gallery: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap' as 'wrap',
      gap: '15px',
      marginTop: '20px',
    } as React.CSSProperties,
    card: {
      width: '220px',
      margin: '5px',
      border: '1px solid #ddd', // Border abu-abu lembut
      borderRadius: '8px',
      overflow: 'hidden',
      textAlign: 'center',
      transition: 'transform 0.2s, box-shadow 0.2s', // Efek transisi halus
      backgroundColor: '#f9f9f9', // Warna latar belakang kartu netral
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)', // Bayangan lembut
    } as React.CSSProperties,
    hobbyTitle: {
      margin: '10px 0',
      fontSize: '16px',
      fontWeight: '600',
      color: '#333', // Warna teks abu gelap
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Gallery</h2>
      <div style={styles.gallery}>
        {hobbies.map((hobby) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={hobby.id}
              style={{
                ...styles.card,
                transform: isHovered ? 'scale(1.03)' : 'scale(1)', // Efek zoom sedikit saat hover
                boxShadow: isHovered ? '0 4px 10px rgba(0, 0, 0, 0.15)' : '0 1px 5px rgba(0, 0, 0, 0.1)', // Bayangan lebih tegas saat hover
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={hobby.image}
                alt={hobby.title}
                layout='responsive'
                width={200}
                height={200}
              />
              <h3 style={styles.hobbyTitle}>{hobby.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HobbiesGallery;
