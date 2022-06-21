import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.style"
import { Flex } from "./styles/Flex.style"
import { StyledFooter } from "./styles/Footer.style"
import { Logo } from "./styles/Header.style"






function Footer() {
  return (
    <StyledFooter>
    
      <Container>
        <Logo><h1>FO_WD</h1></Logo>
        <Flex>
        <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+91-704-222-0780</li>
            <li>fariedomar43@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2022 FO_WD. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
