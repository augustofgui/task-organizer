import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckSquare } from 'react-icons/fi';

import AppMenu from '../AppMenu';
import TaskList from '../TaskList';

import './styles.css';

export default function HomeApp() {
    return (
        <div className="home-app-container">
            <AppMenu />
            <TaskList />
        </div>
    );
}