import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { transparentize } from 'polished'

// Local
import theme from './theme'
// import Header from './components/Header'
// import FeaturedThreads from './components/FeaturedThreads'
import Threads from './components/Threads'
import ThreadsHeader from './components/ThreadsHeader'
import ThreadsCompact from './components/ThreadsCompact'

const App = () => {

  const [threadsMode, setThreadsMode] = useState('comfortable')

  // Esc keybinding
  // const escKey = event => {
  //   if(event.keyCode === 27) {
  //     isModal ? setModal(false) : setActiveRow(null)
  //   }
  // }

  // Cmd+P keybinding
  // const searchKey = event => {
  //   if (event.keyCode >= 80 && event.keyCode <= 90) {
  //     if (event.metaKey && event.keyCode === 80) {
  //       event.preventDefault()
  //       setModal(true)
  //     }
  //   }
  // }

  // Manage event listeners
  // useEffect(() => {
  //   document.addEventListener("keydown", escKey, false)
  //   document.addEventListener("keydown", searchKey, false)

  //   return function cleanup() {
  //     document.removeEventListener("keydown", escKey, false)
  //     document.removeEventListener("keydown", searchKey, false)
  //   }
  // })

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Main>
          <ThreadsHeader
            threadsMode={threadsMode}
            handleSetThreadsMode={setThreadsMode} />
          { threadsMode === 'compact'
            ? <ThreadsCompact />
            : <Threads isExpanded={threadsMode === 'expanded'} />
          }
        </Main>
        <Sidebar>Sidebar</Sidebar>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 20px auto;
`

const Main = styled.div`
  flex: 1;
`

const Sidebar = styled.div`
  width: 260px;
  padding: 20px;
  height: 350px;
  margin-left: 40px;
  background-color: ${p => p.theme.white};
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 ${p => transparentize(0.925, p.theme.darkGray1)};
`

export default App