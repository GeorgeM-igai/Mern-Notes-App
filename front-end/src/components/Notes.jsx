import React from 'react'
import { NoteCard } from './NoteCard'

const Notes = () => {
  return (
    <div className='px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <NoteCard title={"George Muigai"} content={"This guy cannot secure a job, Shiiiet"} createdAt={"Sep 21"}/>
        <NoteCard title={"Mr Karani"} content={"The main acting director of the new sarvid gardens"} createdAt={"Sep 20"}/>
        <NoteCard title={"Mr Simon"} content={"The man who made that shii called George to lose his job"} createdAt={"Sep 21"}/>
        <NoteCard title={"Purity"} content={"Her beauty should not make you think she is good, She is the reason New Sarvid employs every week"} createdAt={"Sep 21"}/>
    </div>
  )
}

export default Notes