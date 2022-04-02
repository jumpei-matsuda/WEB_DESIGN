import { Box, Link, LinkProps } from '@mui/material'
import { styled } from '@mui/system';

const HeaderLink = styled(Link)<LinkProps>({
  fontSize: "1.25rem",
  margin: "10px",
  color: "#633E00",
})

const Header: React.FC = () => (
  <Box sx={{
    position: "fixed",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    background: "rgba(255,255,255,0.8)",
    minHeight: 60,
    width: "100%",
    padding: "5px 50px",
    zIndex: 1,
  }}>
    <HeaderLink href="#Top" underline='hover'>Top</HeaderLink>
    <HeaderLink href="#About" underline='hover'>About</HeaderLink>
    <HeaderLink href="#Works" underline='hover'>Works</HeaderLink>
    <HeaderLink href="#Contact" underline='hover'>Contact</HeaderLink>
  </Box>
)
export default Header;