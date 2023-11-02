"use client"

import * as Styles from '../../../styles/projects.styles'
import { ProjectGridItem } from "@/components/ProjectsGridItem";
import { Template } from '@/components/Template';
import { projectsData } from '@/data/projectsData';

export default function ProjectsDisplay() {
    return (
        <Template>
            <title>Fábio Almeida | Projetos</title>
            <Styles.GridContainer>
                {projectsData.map(project => (
                    <ProjectGridItem key={project.id} project={project}/>
                ))}
            </Styles.GridContainer>
        </Template>
    )
}