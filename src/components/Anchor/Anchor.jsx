import { useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import { Anchor as GrommetAnchor } from "grommet";

export default function Anchor({ href, label, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = useResolvedPath(href);
  const activeProps =
    pathname === location?.pathname ? { color: "active", weight: "bold", disabled: true, style: { opacity: 1 } } : {};
  const handleClick = (event) => {
    event.preventDefault();

    navigate(event.target.pathname);
  };

  const handleScroll = (event) => {
    // TODO: implement animatad scroll to
  };

  if (href?.startsWith("#")) {
    return <GrommetAnchor href={href} label={label} onClick={handleScroll} {...activeProps} {...props} />;
  }

  return <GrommetAnchor href={pathname} label={label} onClick={handleClick} {...activeProps} {...props} />;
}
