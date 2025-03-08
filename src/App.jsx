import { useState } from "react";
import "./index.css";
import Projectsidebar from "./components/Projectsidebar";
import Newproject from "./components/Newproject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random().toString(); 
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask], 
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter(
        (task) => task.id !== id 
      ),
    }));
  }
  

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
      tasks: prevState.tasks.filter(
        (task) => task.projectId !== prevState.selectedProjectId
      ),
    }));
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random().toString(); 
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <Newproject onAdd={handleAddProject} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask} 
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks.filter(
          (task) => task.projectId === projectsState.selectedProjectId
        )} 
      />
    );
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
