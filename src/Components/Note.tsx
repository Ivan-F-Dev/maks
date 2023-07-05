import React, {FC, useState} from 'react'
import s from './Note.module.scss'
import {TaskI} from "../mock";

interface Props {
    task: TaskI
}

const Note: FC<Props> = ({task}) => {

    const [open, setOpen] = useState(false)

 return (
  <div id={'id: ' + task.id + ', layer: ' + task.layerIndex} className={s.Note}>
      <div className={s.Note} style={{fontWeight: task.layerIndex === '1' ? '700' : '400'}}>{task.name}</div>

      {task.childs.length !== 0 && <div className={s.Note__open} onClick={() => setOpen(!open)} style={{color: open? 'red' : 'green'}}>x</div>}

      {task.childs.length !== 0 && open && <div className={s.Note__childs}>
          {task.childs.map(el => <Note task={el}/>)}
      </div>}

  </div>
 )
}

export default Note