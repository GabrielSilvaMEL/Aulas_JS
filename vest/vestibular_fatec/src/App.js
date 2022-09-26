import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <h1>
          Inscreva-se no Vestibular da Fatec
        </h1>
        <div className='tabelas'>
          <div className='container'>
            
            <h2>Área do Candidato</h2>
            <button className='botaoentrar'>Entrar</button>
            
            <h3>O que é a Fatec?</h3>
            <div>
            <p>A Fatec é uma faculdade de tecnologia estadual </p>
            <p>Seu objetivo é promover ensino gratuito de qualidade</p>
            </div>
          </div>
            
          <div className='container'>
            <h2>Cursos</h2>
            <p>Agronegócio</p>
            <p>Análise e Desenvolvimento de sistemas</p>
            <p>Eventos</p>
            <p>Gestão Empresarial</p>
            <p>Marketing</p>             
          </div>
          <div className='container2'>
            
            <h2>Calendário</h2>
            <div className='borda'>
              <p>Inscrições</p>
              <p>25/5 a 27/07/2022</p>             
            </div>

            <div className='borda'>
              <p>Provas</p>
              <p>05/08/2022</p>
            </div> 
            
          </div>
          
        </div>
        <a
          className="App-link"
          href="https://www.vestibularfatec.com.br/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vestibular Fatec
        </a>
      
      </header>
    </div>
  );
}

export default App;
