import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router"

const Note = ({title, content}) => {
  return (
    <Link
      to={"/note/123"}
      className="card border-solid border-t-4 bg-base-200
    cursor-pointer hover:shadow-lg transition-all duration-200"
    >
      <div className="card-body ">
        <h3 className="card-title text-base-content">{title}</h3>
        <p className="text-base-content/70 line-clamp-2">{content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">May 30, 2026</span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs">
              <Trash2Icon className="size-4 text-error" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Note