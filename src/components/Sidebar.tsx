import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=506&q=60"
            />

            <div className={styles.profile}>
                <Avatar src ="https://media.licdn.com/dms/image/D4D03AQEZ_ShAHYiEGw/profile-displayphoto-shrink_200_200/0/1694794789596?e=1701302400&v=beta&t=O9kiJQrLXIdjETn2AcPl7H20EmhyKuNGuPHqydiSHQs" /> 

                <strong>Álvaro Prado</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    < PencilLine size ={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}