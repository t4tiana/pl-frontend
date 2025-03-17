import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import './App.css'
import Landing from './pages/Landing';

function App() {


  return (
  <MantineProvider>
    <Landing />
  </MantineProvider>
  )
}

export default App
