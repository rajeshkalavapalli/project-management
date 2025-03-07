import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Projectsidebar from './components/Projectsidebar';
import Newproject from './components/Newproject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <Projectsidebar/>
        <NoProjectSelected/>

      </main>
    </>
  )
}

export default App
