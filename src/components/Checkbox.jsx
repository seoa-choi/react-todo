export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  className,
}) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <span className=" line-clamp-2">{label}</span>
    </label>
  );
}

// 체크박스만 value가 없음
