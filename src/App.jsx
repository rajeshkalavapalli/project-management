import { useState } from 'react';
import './index.css';
import Projectsidebar from './components/Projectsidebar';
import Newproject from './components/Newproject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProjects() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <Newproject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleSelectProjects} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Projectsidebar onStartAddProject={handleSelectProjects} />
        {content}
      </main>
    </>
  );
}

export default App;
