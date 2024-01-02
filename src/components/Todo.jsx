import { useEffect, useState } from 'react';
import '../styles/Todo.css';
import { Menu, TodoList } from '../components/index';
import { useId } from 'react';

const dummyList = [
    {
        id: 1,
        title: 'Learn React',
        description: 'Learn React from one and only Sanket Sir...',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Learn Node',
        description: 'Learning to write clean code in Node...',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Learn Express',
        description: 'Learn Express from official documentation...',
        isCompleted: false
    }
]

export default function Todo() {
    const [isListView, setIsListView] = useState((localStorage.getItem('isListView') !== null && localStorage.getItem('isListView') !== undefined) ? (localStorage.getItem('isListView') === 'true' ? true : false) : false);
    const [isCardView, setIsCardView] = useState((localStorage.getItem('isCardView') !== null && localStorage.getItem('isCardView') !== undefined) ? (localStorage.getItem('isCardView') === 'true' ? true : false) : true);
    const [isModerateView, setIsModerateView] = useState((localStorage.getItem('isModerateView') !== null && localStorage.getItem('isModerateView') !== undefined) ? (localStorage.getItem('isModerateView') === 'true' ? true : false) : false);
    const id = useId();
    const [list, setList] = useState((localStorage.getItem('list') !== null && localStorage.getItem('list') !== undefined) ? localStorage.getItem('list') : dummyList);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className='todo'>
            <h1 className='tasksmart'>TaskSmart</h1>
            <Menu isListView={isListView} isCardView={isCardView} isModerateView={isModerateView} setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
            <div className='add-todo'>
                <input className='add-title' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className='add-description' type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className='add-task' onClick={(e) => {
                    e.preventDefault();
                    if (!title || !description) return;
                    setList([...list, { id: id, title: title, description: description, isCompleted: false }]);
                    setTitle('');
                    setDescription('');
                }}>Add Task</button>
            </div>
            <TodoList isListView={isListView} isCardView={isCardView} isModerateView={isModerateView} list={list} setList={setList} />
        </div>
    )
}