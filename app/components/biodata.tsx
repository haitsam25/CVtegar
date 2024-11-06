import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: 'Tegar Gimnastiar',
    birthDate: '13 Januari 2000',
    email: 'Tegarrr@gmail.com',
    phone: '082126892474',
    address: 'Jl. Raya Tanjungsari Depan SMPN 1, Gudang, Kec. Tanjungsari, Kabupaten Sumedang, Jawa Barat 45362',
    occupation: 'WEB DEVELOPER',
  };

  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Gaya standar untuk tampilan yang lebih minimalis dan profesional
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: '1px solid #ddd', 
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9', 
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
  },
  title: {
    color: '#333', 
    fontWeight: '600',
    fontSize: '20px',
    marginBottom: '15px',
    textTransform: 'uppercase',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    color: '#555',
    fontSize: '14px',
    backgroundColor: '#fff', 
    border: '1px solid #ddd', 
    borderRadius: '5px',
    padding: '10px',
    transition: 'background-color 0.3s', 
  },
  listItemHover: {
    backgroundColor: '#eee',
    cursor: 'pointer',
  }
};

// Komponen untuk efek hover
const ListItem = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      style={{
        ...styles.listItem,
        ...(isHovered ? styles.listItemHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </li>
  );
};

export default PersonalInfo;
