import { Link } from "react-router-dom";

const SocialMedia = () => {
  const socialLinks = [
    {
      id: "soc1",
      name: "Instagram",
      href: {
        pathname: "https://www.instagram.com/rikid_ev/"
      }
    },
    {
      id: "soc2",
      name: "Facebook",
      href: {
        pathname: "https://www.facebook.com/"
      }
    },
    {
      id: "soc3",
      name: "YouTube",
      href: {
        pathname:
          "https://www.youtube.com/"
      }
    }
  ];

  return (
    <div className="SocialMedia">
      {socialLinks.map((link) => {
        return (
          <Link className="socLink" to={link.href} target="_blank">
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
