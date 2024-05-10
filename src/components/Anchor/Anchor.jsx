import { useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import { Anchor as GrommetAnchor, Text } from "grommet";

export default function Anchor({ href, label, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = useResolvedPath(href);

  const handleClick = (event) => {
    event.preventDefault();

    navigate(event.target.pathname);
  };

  const handleScroll = (event) => {
    // TODO: implement animatad scroll to
  };

  if (href?.startsWith("#")) {
    return <GrommetAnchor {...props} href={href} label={label} onClick={handleScroll} />;
  }

  if (pathname === location?.pathname) {
    return (
      <Text color="active" weight="bold">
        {label}
      </Text>
    );
  }

  return <GrommetAnchor {...props} href={pathname} label={label} onClick={handleClick} />;
}
