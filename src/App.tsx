import { NavBar } from './components';
import { LanguageProvider } from './contexts';
import './styles/globals.css';
import './styles/utilities.css';

export default function App() {
  return (
    <LanguageProvider>
      <NavBar />
    </LanguageProvider>
  );
}
