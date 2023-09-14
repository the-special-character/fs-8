import React from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './Todo'
import './style.css'

const container = document.getElementById('app');
const root = createRoot(container);


root.render(<Todo />);
