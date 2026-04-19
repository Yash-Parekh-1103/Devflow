import { Button } from '../components/ui/button'
import { Plus } from 'lucide-react'

const Project = () => {
    const onClick = () => {
        console.log("New Project")
    }
    return (
        <div>
            <div className='flex ml-300 mt-2'>
                <Button onClick={onClick}><Plus className="w-4 h-4" />New Project</Button>
            </div>
            <div className='pl-5'>
                <p className='text-4xl'>My Projects</p>
                <p className='text-lg text-slate-600'>Manage and track all your development projects in one place.</p>
            </div>
        </div>
    )
}

export default Project