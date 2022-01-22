import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'


const Navigation = () => {

  const router = useRouter()

  const handleRouter = (route: string) => {
    router.push(route)
  }

  return (
    <header>
      <NavigationContainer>
        <div>
          <span onClick={() => handleRouter('/')}>Home</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/gallery')}>Photo</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/map')}>Map</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/message')}>Message</span>

        </div>
      </NavigationContainer>
    </header>
  )
}

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 8vh;
  background-color: #121858;
  color: #fffef2;

`

export default Navigation
