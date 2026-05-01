import { CircleCheckBig, Layers, Plus, Timer, Zap } from "lucide-react"
import { useForm } from "react-hook-form"
import StatCard from "../components/StatCard"
import AllProjectsGrid from "../Feature/Projects/components/allProjectsGrid"
import axios from "axios"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import type { NewProject } from "../types/projecttype"


export const Dashboard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewProject>({
        defaultValues: {
            title: "",
            description: "",
            category: "",
            status: "not started",
        },
    })

    const CreateProject = async (data:NewProject) => {
        // console.log(data)
        const newProject = await axios.post("http//localhost:5000/projects",data)
        console.log(newProject)
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 text-slate-100">
            {/* Heading */}
            <div className="pl-5">
                <p className="text-4xl font-semibold tracking-tight text-slate-100">My Projects</p>
                <p className="font-medium text-slate-400">Manage and track all your development projects in one place</p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-12 gap-5 px-4 mt-10">
                <StatCard icon={<Layers />} title="Total Projects" count={6} />
                <StatCard icon={<Zap />} title="Active" count={3} />
                <StatCard icon={<Timer />} title="Pending" count={1} />
                <StatCard icon={<CircleCheckBig />} title="Completed" count={6} />
            </div>
            {/* Toolbar */}
            <div className="mt-8 flex justify-end px-5">


                <Dialog>
                    <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-950 shadow-sm shadow-cyan-500/25 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60">
                            <Plus className="h-4 w-4" />
                            <p>New project</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="border-slate-800 bg-slate-900 text-slate-100">
                        <DialogHeader>
                            <DialogTitle>Create your own project from here </DialogTitle>
                            <DialogDescription>
                                Fill all project fields before creating it.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(CreateProject)} className="grid grid-cols-1 gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="title" className="text-sm font-medium text-slate-300">Title</label>
                                <input
                                    id="title"
                                    type="text"
                                    {...register("title", { required: "Title is required" })}
                                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300/60 transition focus-visible:ring-2"
                                />
                                {errors.title ? <p className="text-xs text-rose-400">{errors.title.message}</p> : null}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="description" className="text-sm font-medium text-slate-300">Description</label>
                                <textarea
                                    id="description"
                                    rows={3}
                                    {...register("description", { required: "Description is required" })}
                                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300/60 transition focus-visible:ring-2"
                                />
                                {errors.description ? <p className="text-xs text-rose-400">{errors.description.message}</p> : null}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="category" className="text-sm font-medium text-slate-300">Category</label>
                                <input
                                    id="category"
                                    type="text"
                                    {...register("category", { required: "Category is required" })}
                                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300/60 transition focus-visible:ring-2"
                                />
                                {errors.category ? <p className="text-xs text-rose-400">{errors.category.message}</p> : null}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="status" className="text-sm font-medium text-slate-300">Status</label>
                                <input
                                    id="status"
                                    type="text"
                                    {...register("status", { required: "Status is required" })}
                                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300/60 transition focus-visible:ring-2"
                                />
                                {errors.status ? <p className="text-xs text-rose-400">{errors.status.message}</p> : null}
                            </div>

                            <button
                                type="submit"
                                className="mt-2 inline-flex items-center justify-center rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-950 shadow-sm shadow-cyan-500/25 transition-colors hover:bg-cyan-400"
                            >
                                Create Project
                            </button>
                        </form>
                    </DialogContent>
                </Dialog>

            </div>
            {/* All Projects */}
            <div className="pb-8">
                <AllProjectsGrid />
            </div>
        </div>
    )
}
