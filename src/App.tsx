import { Header } from './components/Header.tsx'

import {Post} from './components/Post.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import {PostType} from './components/Post.tsx'

import styles from './App.module.css'
import './global.css'

//author: {avatar.url: "", name: "", role: "" }
// publishedAt = new Date
// content: string 

const posts: PostType[] = [
  
  {
    id: 1,
    author: {
      avatarUrl:"https://media.licdn.com/dms/image/D4D03AQEZ_ShAHYiEGw/profile-displayphoto-shrink_200_200/0/1694794789596?e=1701302400&v=beta&t=O9kiJQrLXIdjETn2AcPl7H20EmhyKuNGuPHqydiSHQs",
      name: 'Álvaro Prado',
      role: 'Developer Front-end'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no evento da Rocketseat. 🚀',},
      {type: 'link', content:'Clique aqui para ver alguns dos meus projetos'}
    ],
    publishedAt: new Date()
    },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/86856574?v=4",
      name: 'Eduardo do Prado',
      role: 'Developer FullStack'
    },
    content: [
      {type: 'paragraph', content: 'Viva a história que um dia você gostaria de contar para os seus netos.',},
    ],
    publishedAt: new Date(),  },
]

export function App() {
  return (
<>
  <Header />
  
 <div className={styles.wrapper}>
    <Sidebar />
    <main>
     {posts.map( post => {
      return (
        <Post 
        key={post.id}
        post={post}
        />
      )
     })}
    </main>
 </div>
</>
)
}




   
 
  
