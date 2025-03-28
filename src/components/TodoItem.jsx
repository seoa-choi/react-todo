import Checkbox from '@/components/Checkbox';

export default function TodoItem({ todo, todos, setTodos }) {
  // 배열 업데이트
  function handleDone() {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            done: !t.done,
          };
        } else {
          return t;
        }
      })
    );
  }

  // 배열요소 삭제
  function handleDelete() {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <li className="flex item-center gap-x-[15px]">
      <Checkbox
        label={todo.text}
        onChange={handleDone}
        className={`grow ${todo.done ? 'line-through' : ''} `}
      />
      <button
        type="button"
        className="h-[32px] border border-[#b83030] rounded-[4px] px-[10px] text-[#b83030]"
        onClick={handleDelete}
      >
        remove
      </button>
    </li>
  );
}

// TodoItem {todo}는 맵 돌릴때 각각 들어오는 거, 객체 하나씩, todos는 배열의 전체(상태state)

// 업데이트를 할때 배열을 통해서 맵을 돌려서 요소 갯수만큼 새로운 배열을 만들엉
// todos에서 맵을 돌려 갯수만큼 보여주는데 t로 받았음(배열전체의 요소들이 하나씩 들어옴 t-배열요소)
// t.id배열요소 전체의 아이디 배열요소 전체의 아이디와 todo.id자기꺼랑 비교해서 done 처리
