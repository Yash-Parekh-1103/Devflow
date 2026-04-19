import { Button } from '../components/ui/button'
import { Plus } from 'lucide-react'
import { Card } from '../components/ui/card'

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
            <Card className="pl-5">
                <p className='text-lg'>Project 1</p>
                <p className='text-md text-slate-600'>Description of Project 1</p>
            </Card>
        </div>
    )
}

export default Project