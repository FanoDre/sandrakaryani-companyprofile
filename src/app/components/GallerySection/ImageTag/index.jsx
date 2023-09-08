
export default function ImageTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-yellow-500"
    : "text-[#ADB7BE] border-white hover:border-yellow-500 hover:text-yellow-500";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 mb-10 text-md cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}