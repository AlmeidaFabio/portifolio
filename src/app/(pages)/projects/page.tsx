"use client"

import { projectsData } from '@/app/_utils/projectsData'
import * as Styles from '../../styles/projects.styles'
import { ProjectGridItem } from '@/app/_components/projectsGridItem'


export default function ProjectsDisplay() {
    return (
        <Styles.GridContainer>
            {projectsData.map(project => (
                <ProjectGridItem key={project.id} project={project} />
            ))}
        </Styles.GridContainer>
    )
}