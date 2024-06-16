import React from 'react'
import ExcuseGen  from '../img/ExcuseGen.png'
import ToDoList from '../img/todolist.png'
import Lmb from '../img/lmb.png'
import Ttt from '../img/ttt.png'

const ProjectCard = () => {


    return (
        <div className='flex-row'>
            <label htmlFor="" className='label-projecto'>
                <a href="https://ligamozbasquetebol.netlify.app/"   target='_blank'  className='link-projecto' >
                    <img src={Lmb} alt="" className='img-portf-project' />
                    <p className='legenda-projecto'>Site da Liga de Basquetebol</p>
                </a>
            </label>
            <label htmlFor="" className='label-projecto'>
                <a href="https://tttafrica.com"   target='_blank'  className='link-projecto' >
                    <img src={Ttt} alt="" className='img-portf-project' />
                    <p className='legenda-projecto'>Transformational Talks and Training</p>
                </a>
            </label>
            <label htmlFor="" className='label-projecto'>
                <a href="https://excuse-generator-hosted.netlify.app/"   target='_blank'  className='link-projecto' >
                    <img src={ExcuseGen} alt="" className='img-portf-project' />
                    <p className='legenda-projecto'>Excuses Generator</p>
                </a>
            </label>
            <label htmlFor="" className='label-projecto'>
                <a href="https://lista-de-tarefas-phi-rouge.vercel.app/" target='_blank' className='link-projecto' >
                    <img src={ToDoList} alt="" className='img-portf-project' />
                    <p className='legenda-projecto'>To Do List</p>
                </a>
            </label>

            
        </div>
    )
}

export default ProjectCard