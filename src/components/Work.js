import React from 'react';
import './ProjectCardStyles.css';
import ProjectCard from './ProjectCard';
import ProjectcardData from './ProjectCardData';


const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                {
                    ProjectcardData.map((value, index) =>{
                        return(
                            <ProjectCard 
                                key ={index}
                                imgsrc = {value.imgsrc}
                                title = {value.title}
                                descr ={value.descr}
                                view = {value.view}
                                source = {value.source}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work