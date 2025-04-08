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
      background: 'linear-gradient(150deg, #511fb6, #Fa7e0c)',
      animation: 'zoomGradient 7s infinite',
      backgroundSize: '100% 100%',
    }}>
      <style>
        {`
          @keyframes zoomGradient {
            0% {
              background-size: 100% 100%;
            }
            50% {
              background-size: 200% 200%;
            }
            100% {
              background-size: 100% 100%;
            }
          }
        `}
      </style>
      <h1>👋 Olá, eu sou o Rafael! 👨‍💻</h1>
      <p>🚀 Falo sobre Qualidade de Software, Automação de testes e Desenvolvimento! 💡</p>
      <a
        href="https://www.youtube.com/@QAverso"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#Fa7e0c',
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