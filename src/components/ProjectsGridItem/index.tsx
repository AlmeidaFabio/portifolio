import { ProjectType } from '@/types/ProjectType'
import * as Styles from './styles'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    project: ProjectType;
}

export const ProjectGridItem = ({ project }: Props) => {
    return (
        <Styles.GridItem>
            <Styles.Card>
                <Styles.ImageBox>
                    <Image
                        src={project.imageUrl ? project.imageUrl : ''}
                        alt={project.name}
                        width={260}
                        height={220}
                        priority
                    />
                </Styles.ImageBox>
                <span className='alert'>Passe o mouse para mais informações</span>
                <h3 className='project-name'>{project.name}</h3>
                <Styles.Content className='content'>
                    {project.tags.length > 0 && (
                        <div className="tags">
                            {project.tags.map((tag, index )=> (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    )}
                    <p>{project.description}</p>
                    <div className='buttons'>
                        {project.buildUrl !== '' && (
                            <Link
                                href={project.buildUrl ? project.buildUrl : ''}
                                target='blank'
                            >
                                Visitar
                            </Link>
                        )}
                        {project.repoUrl !== '' && (
                            <Link
                                href={project.repoUrl ? project.repoUrl : ''}
                                target='blank'
                            >
                                Ver Código
                            </Link>
                        )}
                    </div>
                </Styles.Content>
            </Styles.Card>
        </Styles.GridItem>
    )
}
