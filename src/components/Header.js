import React from 'react'
import styled from 'styled-components'

// Local
import Logo from '../vectors/logo'

// Header
const Header = () => (
  <Wrapper>
    <Title>
      <Logo/>
      <Text>Prisma</Text>
      <Em>Community</Em>
    </Title>
    <Nav>
      <NavLink>FAQ</NavLink>
      <NavLink>Log In</NavLink>
    </Nav>
  </Wrapper>
)

// Styles
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  color: ${p => p.theme.darkGray1};
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1;

  svg {
    position: relative;
    top: 1px;
    display: block;
    height: 32px;
    margin-right: 6px;
  }
`

const Text = styled.div`
  font-weight: 700;
  letter-spacing: -0.5px;
`

const Em = styled.div`
  background: ${p => p.theme.darkGray1};
  color: ${p => p.theme.white};
  border-radius: 5px;
  margin-left: 10px;
  padding: 4px 5px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLink = styled.div`
  padding: 4px 8px;
  &:hover {
    cursor: pointer;
    background: #dadada;
  }
  & + & { margin-left: 8px; }
`

export default Header