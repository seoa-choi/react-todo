import Checkbox from '@/components/Checkbox';
import { useState } from 'react';

const initTodos = [
  {
    id: 1,
    text: '리액트 공부하기',
    done: false,
  },
  {
    id: 2,
    text: '백엔드도 열심히 해야지',
    done: false,
  },
  {
    id: 3,
    text: '넷플릭스 시청',
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initTodos);
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <Checkbox
        label="동의합니다"
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}
// 체크박스 잘 들어오는지 확인한거임
