import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  // 할일 목록을 상태로 관리
  const [tasks, setTasks] = useState([]);

  // 할일을 추가하는 함수
  const handleAddTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };
  
  // 할일을 삭제하는 함수
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // App 컴포넌트의 렌더링 부분
  return (
    <div className="app">
      <h1>현식's 할일 관리</h1>

      {/* 할일을 추가하는 폼 컴포넌트 */}
      <TaskForm onAdd={handleAddTask} />
      {/* 할일 목록을 표시하는 컴포넌트 */}
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;