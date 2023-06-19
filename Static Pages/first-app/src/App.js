import logo from './logo-white-bg.png';
import './App.css';


function Header() {
  return (
      <header>
          <nav className="nav">
              <img className = "logo" src={logo}/>
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function Footer() {
  return (
      <footer>
          <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}

function App() {
  return (
    <div className = "App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
