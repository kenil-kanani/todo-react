import '../styles/CardView.css';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function CardView({ title, description, id, list, setList }) {
    return (
        <div className="card-view">
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
            <div className='card-view-icons'>
                <CiEdit size={30} cursor={'pointer'} />
                <MdDelete size={30} cursor={'pointer'} onClick={(e) => {
                    e.preventDefault();
                    setList(list.filter((item) => item.id !== id));
                }} />
            </div>
        </div>
    )
}
