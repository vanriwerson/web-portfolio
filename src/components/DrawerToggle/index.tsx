import './style.css';

interface DrawerToggleProps {
  drawerOpen: boolean;
  onToggle: () => void;
}

export default function DrawerToggle({
  drawerOpen,
  onToggle,
}: DrawerToggleProps) {
  return (
    <button
      className={`toggle-btn ${drawerOpen ? 'open' : ''}`}
      onClick={onToggle}
    >
      <span className="line top"></span>
      <span className="line mid"></span>
      <span className="line bottom"></span>
    </button>
  );
}
