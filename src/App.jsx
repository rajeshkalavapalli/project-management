import { useState } from "react";
import "./index.css";
import Projectsidebar from "./components/Projectsidebar";
import Newproject from "./components/Newproject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import Heading from "./components/Heading";

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
      tasks: prevState.tasks.filter((task) => task.id !== id),
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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 text-gray-900">
      <Heading />
      <main className="flex flex-col md:flex-row gap-6 p-6">
        <Projectsidebar
          onSelectProject={handleSelectProject}
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          selectedProjectId={projectsState.selectedProjectId}
        />
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 transform transition duration-500 hover:scale-105">
          {content}
        </div>
      </main>
    </div>
  );
}

export default App;
