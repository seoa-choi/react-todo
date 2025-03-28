import { useRef, useState } from 'react';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  // 렌더링과 관련없이 id값 저장을 위해 useRef 사용
  const idRef = useRef(0);

  function handleAdd() {
    // 공백제거 후 값이 있을때만 추가
    if (txt.trim()) {
      idRef.current++;
      // 할일 추가 시 입력필드 초기화
      setTxt('');
      setTodos([
        ...todos,
        {
          id: idRef.current,
          text: txt,
          done: false,
        },
      ]);
    }
  }

  function handleEnter(e) {
    if (e.key === 'Enter') handleAdd();
  }

  // useRef 렌더링과 관련없이 값을 보관할 때 사용할 수 있음
  // useRef는 새로고침 하지 않는이상 계속 숫자 올라감, 새로고침 하면 다시 시작

  return (
    <div className="flex my-[10px] gap-x-[10px]">
      <input
        type="text"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        className="w-full border-[#ddd] rounded-[4px] text-gray-600"
        onKeyUp={handleEnter}
      />
      <button
        type="button"
        onClick={handleAdd}
        className="bg-gray-600 text-white px-[10px] rounded-[4px]"
      >
        Add
      </button>
    </div>
  );
}
