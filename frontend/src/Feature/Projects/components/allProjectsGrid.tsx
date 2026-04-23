import ProjectCard from "../../../components/ProjectCard"

const AllProjectsGrid = () => {
    return (
        <div className="grid grid-cols-12 gap-3 mt-10 px-5">
            <ProjectCard
                title="E-Commerce Platform"
                description="Full-Stack e-commerce solution with better Next.js and Stripe integration"
            />
            <ProjectCard
                title="E-Commerce Platform"
                description="Full-Stack e-commerce solution with better Next.js and Stripe integration"
            />
            <ProjectCard
                title="E-Commerce Platform"
                description="Full-Stack e-commerce solution with better Next.js and Stripe integration"
            />
            <ProjectCard
                title="E-Commerce Platform"
                description="Full-Stack e-commerce solution with better Next.js and Stripe integration"
            />
        </div>
    )
}

export default AllProjectsGrid