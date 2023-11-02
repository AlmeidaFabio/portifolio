export type ProjectType = {
    id?:number;
    name:string;
    description:string;
    imageUrl?:string;
    repoUrl?:string;
    buildUrl?:string;
    tags: string[];
}