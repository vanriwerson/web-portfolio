import './style.css';

type SocialNetworkButtonProps = {
  anchorLink: string;
  imageSource: string;
  altText: string;
  title?: string;
};

export default function SocialNetworkButton({
  anchorLink,
  imageSource,
  altText,
  title,
}: SocialNetworkButtonProps) {
  return (
    <a
      className="social-network-link"
      href={anchorLink}
      target="_blank"
      rel="noopener noreferrer"
      title={title || ''}
    >
      <img className="social-network-image" src={imageSource} alt={altText} />
    </a>
  );
}
