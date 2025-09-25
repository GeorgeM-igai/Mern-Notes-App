
export const NoteCard = ({title, content, createdAt}) => {
  return (
    <div className="card bg-base-100/40 shadow-xl">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="text-sm text-primary pb-4">{content}</p>
        <div className="noteActions">
            <span className="text-sm text-[#b13c3c]">{createdAt}</span>
        </div>
       </div>
    </div>
  )
}
