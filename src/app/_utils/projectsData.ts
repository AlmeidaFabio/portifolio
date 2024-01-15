import { ProjectType } from "@/app/@types/ProjectType";

export const projectsData:ProjectType[] = [
    {
        id: 1,
        name: "Githubers",
        description: "Sistema de busca capaz de pesquisar usuários do GITHUB e exibir as informações (e avatar) do perfil pesquisado. Teste prático do curso de React da B7Web.",
        imageUrl: "/assets/imgs/projectsImages/githubers.gif",
        repoUrl: "https://github.com/AlmeidaFabio/githubers",
        buildUrl: "https://almeidafabio.github.io/githubers/", 
        tags: ["React", "Typescript"],   
    },
    {
        id: 2,
        name: "OnePiece-Api",
        description: "Api que fornece informações sobre personagens do anime One Piece. Projeto pessoal para fins de estudo.",
        imageUrl: "/assets/imgs/projectsImages/onepiece.gif",
        repoUrl: "https://github.com/AlmeidaFabio/OnePiece-api",
        buildUrl: "",
        tags: ["Node", "Typescript", "TypeOrm", "Mysql"],     
    },
    {
        id: 3,
        name: "Portifólio",
        description: "Meu Portifólio pessoal, criado utilizando NextJs, Typescript e Styled-Components.",
        imageUrl: "/assets/imgs/projectsImages/default.gif",
        repoUrl: "https://github.com/AlmeidaFabio/portifolio",
        buildUrl: "https://almeidafabio-portifolio.vercel.app/", 
        tags: ["React", "NextJs", "Styled-Components"],    
    },
    {
        id: 4,
        name: "Barbers-Api",
        description: "Api para um aplicativo de agendamento de barbeiros, desenvolvida em NodeJs, utilizando Typescript, conectada a um banco de dados MYSQL, com o ORM TypeORM.",
        imageUrl: "/assets/imgs/projectsImages/default.gif",
        repoUrl: "https://github.com/AlmeidaFabio/Node-barbers-api",
        buildUrl: "",  
        tags: ["Node", "Typescript", "Mysql", "TypeOrm"],   
    },
    {
        id: 5,
        name: "SocialMedia-Api",
        description: "Api com funcionalidades básicas de uma rede social,tais como, postar textos ou fotos, curtir, seguir, entre outras.",
        imageUrl: "/assets/imgs/projectsImages/default.gif",
        repoUrl: "https://github.com/AlmeidaFabio/social-media-api",
        buildUrl: "",  
        tags: ["Node", "Typescript", "PostgreSql", "Prisma"],   
    },
]