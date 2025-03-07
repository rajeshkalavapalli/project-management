import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Projectsidebar from './components/Projectsidebar';
import Newproject from './components/Newproject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {

  const [ProjectsState, setProjectsState ] = useState({
    selectedProjectId:undefined,
    projects: []
  })
  
  function handeleSelectProjects () {
    setProjectsState (prevState => {
      return{
        ...prevState,
        selectedProjectId: null, 
      };
    });
  }
  
 let content;
 
 if(ProjectsState.selectedProjectId === null){
  content = <Newproject/>
 }else if (ProjectsState.selectedProjectId === undefined) {
  content = <NoProjectSelected onStartAddProject= {handeleSelectProjects}/>;
 }
  
  const [count, setCount] = useState(0)


  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <Projectsidebar onStartAddProject= {handeleSelectProjects}/>
        
        {content}
      </main>
    </>
  )
}

export default App
