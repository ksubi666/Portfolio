import { Menu, MoonStar, Sun } from 'lucide-react';
import { menuItems } from '../constants';
const s = '<SS/>';
const changeTheme = () => {
  document.documentElement.classList.toggle('dark');
};

export const Navbar = ({ handlerClick }) => {
  return (
    <div className="flex justify-center max-w-[100%] dark:bg-[#030712]">
      <div className=" dark:bg-[#030712] items-center md:items-center md:font-medium flex justify-between p-4 md:py-4 w-[1280px] md:px-8">
        <p className="text-gray-900 text-3xl font-bold dark:text-[#F9FAFB]">
          {s}
        </p>
        <Menu
          strokeWidth={2}
          className="md:hidden text-gray-600 cursor-pointer"
          onClick={handlerClick}
        />
        <div className=" cursor-pointer hidden md:flex md:text-gray-600 md:gap-x-6 md:text-base md:items-center dark:text-[#F9FAFB]">
          {menuItems.map((el) => (
            <p>{el}</p>
          ))}
          <span className="h-6 md:border-r md:border-gray-200 "></span>
          <div className="md:flex  md:gap-x-6 md:items-center">
            <Sun
              onClick={changeTheme}
              className="dark:hidden cursor-pointer "
            />
            <MoonStar
              onClick={changeTheme}
              className="hidden dark:flex cursor-pointer "
            />
            <button className="dark:bg-[#F9FAFB] dark:text-[#111827] md:bg-gray-900 md:text-gray-50 md:text-base md:h-fit md:w-fit md:rounded-xl py-1.5 px-4 hover:bg-gray-700">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
