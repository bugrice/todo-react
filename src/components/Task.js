import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      {/* 할일 텍스트 표시 */}
      <p>{task.text}</p>
      {/* 할일 삭제 버튼 */}
      <button onClick={() => onDelete(task.id)}>삭제</button>
    </div>
  );
};

export default Task;