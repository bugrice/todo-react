import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  // 입력된 텍스트를 담는 상태
  const [text, setText] = useState('');

  // 할일 추가 함수
  const handleAddTask = () => {
    // 입력된 텍스트가 비어있지 않으면 할일 추가 함수 호출
    if (text.trim() !== '') {
      onAdd(text);
      // 입력된 텍스트 초기화
      setText('');
    }
  };

  return (
    <div>
      {/* 할일 입력 필드 */}
      <input
        type="text"
        placeholder="할일 추가"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* 할일 추가 버튼 */}
      <button onClick={handleAddTask}>추가</button>
    </div>
  );
};

export default TaskForm;