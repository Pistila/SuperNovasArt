import logo from '../images/logo.gif';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="DystoPunks V2" />
        <p style={{lineHeight: "calc(12px + 2vmin)"}}>
        <b style={{color: '#ffff02'}}>SuperNovas</b> are a group of 10.000 intergalatic girls with outstanding <br/> style and out of these world vibes, creating a fun and diverse universe <br/> in the midst of the nft world.<br/><br/>       
        <br/></p>
      </header>  
    </div>
  );
}

export default App;
