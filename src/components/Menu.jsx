import { MenuItem } from './index'
import '../styles/Menu.css';

export default function Menu({ isListView, isCardView, isModerateView, setIsListView, setIsCardView, setIsModerateView }) {
    return (
        <div className='menu'>
            <MenuItem text='List View' isBackgroundWhite={isListView} setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
            <MenuItem text='Card View' isBackgroundWhite={isCardView} setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
            <MenuItem text='Moderate View' isBackgroundWhite={isModerateView} setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
        </div>
    )
}
