import { useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import { Box, Anchor as GrommetAnchor, Text } from "grommet";

export default function Anchor({ href, label, ...props }) {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath(href);
  const location = useLocation();

  const onClick = (event) => {
    event.preventDefault();

    navigate(event.target.pathname);
  };

  if (pathname === location?.pathname) {
    return (
      <Box>
        <Text color="text-weak" weight="bold">
          {label}
        </Text>
      </Box>
    );
  }

  return <GrommetAnchor {...props} href={pathname} label={label} onClick={onClick} />;
}
