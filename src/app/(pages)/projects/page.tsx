import { projectsData } from '@/app/_utils/projectsData'
import * as Styles from '../../styles/projects.styles'
import { ProjectGridItem } from '@/app/_components/projectsGridItem'

export default function ProjectsDisplay() {
    return (
        <Styles.Page>
            <header><span>MEU TRABALHO</span><h2>Projetos selecionados</h2><p>Uma seleção de aplicações e estudos que venho desenvolvendo para praticar e explorar novas tecnologias.</p></header>
            <Styles.GridContainer>
                {projectsData.map(project => (
                    <ProjectGridItem key={project.id} project={project} />
                ))}
            </Styles.GridContainer>
        </Styles.Page>
    )
}
