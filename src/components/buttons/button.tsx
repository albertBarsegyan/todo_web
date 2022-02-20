export default function Button({ ...props }) {
  return (
    <button
      className="text-md border border-transparent px-3 py-2  hover:text-purple-400 hover:bg-transparent hover:border hover:border-purple-400 text-white bg-purple-400 duration-75 rounded-md"
      {...props}
    >
      {props?.children}
    </button>
  );
}
