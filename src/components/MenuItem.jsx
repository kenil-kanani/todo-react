import '../styles/MenuItem.css';

export default function MenuItem({ text, isBackgroundWhite, setIsListView, setIsCardView, setIsModerateView }) {
    return (
        <div onClick={() => {
            setIsListView(text === 'List View');
            setIsCardView(text === 'Card View');
            setIsModerateView(text === 'Moderate View');
        }} className='menu-item' style={{ backgroundColor: isBackgroundWhite ? 'white' : '#F5F4F5' }}>{text}</div>
    )
}
