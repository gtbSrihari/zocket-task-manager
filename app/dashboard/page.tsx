'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import TaskList from '../../components/TaskList';
import AIChat from '../../components/AIChat';

// Mock socket connection (replace with real backend URL)
const socket = io('http://localhost:3000');

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete and Submit the Zocket frontend assignment', status: 'Pending' },
  ]);

  useEffect(() => {
    // Real-time task updates via WebSocket
    socket.on('taskUpdate', (newTask) => {
      setTasks((prev) => [...prev, newTask]);
    });

    return () => {
      socket.off('taskUpdate');
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Dashboard</h1>
        <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded">
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <TaskList tasks={tasks} />
        </div>
        <div>
          <AIChat />
        </div>
      </div>
    </div>
  );
}