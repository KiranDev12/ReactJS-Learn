import logo from './logo-white-bg.png';

export default function Header() {
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