type Props = {
  text: string;
  onClick: () => void;
};
export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="rounded-md border-2 shadow-md  text-center">
      <button
        className="w-[150px] bg-white rounded-sm text-sm  p-[0.3rem] select-none 
        hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
