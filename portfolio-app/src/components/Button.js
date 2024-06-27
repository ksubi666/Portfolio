export const Button = (props) => {
  return (
    <div className="mb-12 flex justify-center">
      <button className="dark:bg-[#374151] dark:text-[#D1D5DB] bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium w-[content-fit]">
        {props.name}
      </button>
    </div>
  );
};
