export type NewProject = {
    owner_email: string;
    title: string;
    description: string;
    category: string;
    status?: string | undefined;
}

export type Project = {
    id: number;
    owner_email: string;
    title: string;
    description: string;
    category: string;
    status: string;
}