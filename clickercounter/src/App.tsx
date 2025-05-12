import './App.css'
import { useState } from 'react'

const App : React.FC = () : React.ReactElement => {


const [okMaksaa, setOkMaksaa] = useState<number>(0);
const [vaatiiSelvitysta, setVaatiiSelvitysta] = useState<number>(0);
const [nollausPvm, setNollausPvm] = useState<string>("");
const summa : number = okMaksaa + vaatiiSelvitysta;

function lisaaOkMaksaa(): void{
  setOkMaksaa(prev => prev + 1);
};

function vahennaOkMaksaa(): void{
  setOkMaksaa(prev => Math.max(0, prev - 1));
};

function lisaaVaatiiSelvitysta(): void {
  setVaatiiSelvitysta(prev => prev + 1);
};

function vahennaVaatiiSelvitysta(): void {
  setVaatiiSelvitysta(prev => Math.max(0, prev - 1));
};

function nollaaKaikki(): void {
  const vahvista = window.confirm("Haluatko varmasti nollata kaikki tiedot?");
  if (vahvista) {
    setVaatiiSelvitysta(0);
    setOkMaksaa(0);
    setNollausPvm(new Date().toLocaleString());
  };
};



  return (
 <div className="container">
      <h1>Maksettu yhteensä {summa} laskua</h1>

      <div className="boxes">
        <div className="box">
          <div className="box-title">Ok maksaa</div>
          <div className="box-value">{okMaksaa}</div>
          <div className="box-buttons">
            <button onClick={lisaaOkMaksaa}>+</button>
            <button onClick={vahennaOkMaksaa}>-</button>
          </div>
        </div>

        <div className="box">
          <div className="box-title">Vaatii selvittämistä</div>
          <div className="box-value">{vaatiiSelvitysta}</div>
          <div className="box-buttons">
            <button onClick={lisaaVaatiiSelvitysta}>+</button>
            <button onClick={vahennaVaatiiSelvitysta}>-</button>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <button className="reset-button" onClick={nollaaKaikki}>Nollaa kaikki</button>
        <div className="timestamp">Nollattu viimeksi: {nollausPvm}</div>
      </div>
    </div>
  );
};

export default App
