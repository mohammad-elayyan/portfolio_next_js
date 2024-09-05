import React from 'react'
import ProjectLayout from './ProjectLayout'
import { motion } from 'framer-motion'

const container = {
    hidden: { y: -100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: .5 }
    },

}

const ProjectList = ({ projects }) => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className='w-full max-w-auto xl:max-w-4xl mx-auto px-4 lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'>{projects.map((project) => (
            <ProjectLayout key={project.id} {...project} />
        ))}</motion.div>
    )
}

export default ProjectList