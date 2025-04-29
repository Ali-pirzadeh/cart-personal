import React from 'react'
import Container from '../component/Container'
import Main from '../component/Main'
import SideBar from '../component/SideBar'

function Home() {
  return (
      <div className="bg-gray-200">
          <Container>
              <div className="md:flex items-center gap-3">
                  <div className="md:w-3/2">
                      <Main />
                  </div>
                  <div>
                      <SideBar />
                  </div>
              </div>
          </Container>
        </div>
  )
}

export default Home