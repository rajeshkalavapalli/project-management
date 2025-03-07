import projectImage from '../assets/project-1.png'
import Button from './Button'
function NoProjectSelected ( onStartAddProject) {
return (
    <div className='mt-24 text-center w-2/3'>
        <img src={projectImage} alt="empty task list" className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected </h2>
        <p className='text-stone-400 mb-4'>select a project or get stared with new one </p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>create new Project</Button>
        </p>
    </div>
)
}

export default NoProjectSelected