import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button/Button'

function Header({ data = [], style }) {

  return (
    <header className='app-header' style={style}>
      <img src={logo} className="App-logo" alt="logo" />
      <ul className='nav dim'>
        {data.map(d => <li key={d}>{d}</li>)}
        <li><Button>Contact us</Button></li>
      </ul>
    </header>
  )
}

export default Header;