function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#FFFFFF', // Text color
      backgroundColor: '#511fb6', // Optional: Add a background color
    }}>
      <h1>👋 Olá, eu sou o Rafael! 👨‍💻 </h1>
      <p>🚀 Falo sobre Qualidade de Software e Desenvolvimento 💡</p>
      <a 
        href="https://www.youtube.com/@QAverso" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#FA7e0c',
          color: '#FFFFFF',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        ▶️ Visite meu canal no YouTube
      </a>
    </div>
  );
}

export default Home;