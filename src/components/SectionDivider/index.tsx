import { logos } from '../../assets';
import './style.css';

interface SectionDividerProps {
  anchorRef: string;
}

export default function SectionDivider({ anchorRef }: SectionDividerProps) {
  return (
    <div className="divider-container" id={anchorRef}>
      <span className="divider-line left"></span>
      <img className="logo-icon" src={logos.light} alt="BRS DevWeb logo" />
      <span className="divider-line right"></span>
    </div>
  );
}
