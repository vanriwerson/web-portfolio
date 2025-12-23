import { logos } from '../../assets';
import './style.css';

export default function Logo() {
  return (
    <a href="#home" className="logo-container">
      <img
        className="logo"
        src={logos.light}
        alt="Imagem estilizada do perfil de uma cabeça humana com circuitos representado o cérebro"
      />
      <div className="logo-txt">
        <p className="main-txt">BRS</p>
        <p className="sub-txt">DevWeb</p>
      </div>
    </a>
  );
}
