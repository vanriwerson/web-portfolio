import './style.css';

type SocialNetworkButtonProps = {
  anchorLink: string;
  imageSource: string;
  altText: string;
};

export default function SocialNetworkButton({
  anchorLink,
  imageSource,
  altText,
}: SocialNetworkButtonProps) {
  return (
    <a
      className="social-network-link"
      href={anchorLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="social-network-image" src={imageSource} alt={altText} />
    </a>
  );
}
