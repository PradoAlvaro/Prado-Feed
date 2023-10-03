import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;

}
export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment(){
        onDeleteComment(content)
    }
    // function handleLikeComment() {
    //     setLikeCount(likeCount + 1)
    // }

    return (
    <div className={styles.comment}>
        <Avatar 
         hasBorder ={false}
         src="https://media.licdn.com/dms/image/C4D03AQEX1QEcxr1CzA/profile-displayphoto-shrink_200_200/0/1568343675151?e=1701907200&v=beta&t=jNvsCitU02X1pyWTZHj4kN7jYT4tNSOhX5JmEDwHNFQ" 
         alt=''
        /> 
        
    <div className={styles.commentBox}>
     <div className={styles.commentContent}>
        <header>
            <div className={styles.authorAndTime}>
                <strong>Renato Veiga</strong>
                <time title="27 de Setembro de 2023" dateTime="2023-09-11">Cerca de alguns minutos atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
                < Trash size = {20} />
            </button>
        </header>
        <p>{content}</p>
    </div>
    
    <footer>
        <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
        </button>
    </footer>
</div>

    </div>
    )
}