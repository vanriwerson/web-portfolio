import { socialNetworks } from '../../assets';
import Signature from '../Signature';
import SocialNetworkButton from '../SocialNetworkButton';
import './style.css';

function Footer() {
  return (
    <footer className="footer-container pattern">
      <div className="footer-content">
        <SocialNetworkButton
          anchorLink="https://github.com/vanriwerson"
          imageSource={socialNetworks.github}
          altText="Github icon"
        />

        <SocialNetworkButton
          anchorLink="https://www.linkedin.com/in/bruno-riwerson/"
          imageSource={socialNetworks.linkedin}
          altText="Linkedin icon"
        />

        <Signature />
      </div>
    </footer>
  );
}

export default Footer;
