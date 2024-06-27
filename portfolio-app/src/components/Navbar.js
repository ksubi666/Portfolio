import { Menu, MoonStar, Sun } from 'lucide-react';

const s = '<SS/>';
const changeTheme = () => {
  document.documentElement.classList.toggle('dark');
};

export const Navbar = ({ handlerClick }) => {
  return (
    <div className="flex justify-center max-w-[100%] dark:bg-[#030712] md:px-8">
      <div className=" dark:bg-[#030712] items-center md:items-center md:font-medium flex justify-between p-4 md:py-4 md:px-0 w-[1280px]">
        <p className="text-gray-900 text-3xl font-bold dark:text-[#F9FAFB]">
          {s}
        </p>
        <Menu
          strokeWidth={2}
          className="md:hidden text-gray-600 cursor-pointer"
          onClick={handlerClick}
        />

        <div className=" cursor-pointer hidden md:flex md:text-gray-600 md:gap-x-6 md:text-base md:items-center dark:text-[#F9FAFB]">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <span className="h-6 md:border-r md:border-gray-200 "></span>
          <div className="md:flex  md:gap-x-6 md:items-center">
            <Sun onClick={changeTheme} className="dark:hidden cursor-pointer" />
            <MoonStar
              onClick={changeTheme}
              className="hidden dark:flex cursor-pointer"
            />
            <button className="dark:bg-[#F9FAFB] dark:text-[#111827] md:bg-gray-900 md:text-gray-50 md:text-base md:h-fit md:w-fit md:rounded-xl py-1.5 px-4">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
