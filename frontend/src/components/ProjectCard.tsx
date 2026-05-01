const ProjectCard = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='col-span-6 rounded-lg border border-slate-800 bg-slate-900/70 px-5 py-10 text-slate-100 shadow-sm shadow-slate-950/50 transition-colors hover:border-cyan-400/50'>
            <p className='text-2xl font-semibold tracking-tight'>{title}</p>
            <p className='mt-2 text-slate-400'>{description}</p>
        </div>
    )
}

export default ProjectCard