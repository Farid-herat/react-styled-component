import { Button } from "./styles/Button.style"
import { Container } from "./styles/Container.style"
import { Flex } from "./styles/Flex.style"
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.style"






function Header() {
  return (
    <StyledHeader>
        <Container>
         <Nav>
            <Logo><h1>FO_WD</h1> </Logo>
            <Button color="black">Try it free</Button>
         </Nav>
         <Flex>
            <div>
                <h1>Build The Community Your Funs Will Love</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                 text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                </p>
                <Button bg='#ff0099' color="#fff">Try it for free</Button>
            </div>
            <Image src='./images/illustration-mockups.svg'/>

         </Flex>
        </Container>
    </StyledHeader>
  )
}

export default Header
