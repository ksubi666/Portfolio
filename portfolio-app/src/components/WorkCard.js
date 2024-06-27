import { SquareArrowOutUpRight } from 'lucide-react';
import WorkCardImg from '../assets/WorkCardImg.png';

const buttons = [
  'React',
  'Next.js',
  'Typescript',
  'Nest.js',
  'PostgreSQL',
  'Tailwindcss',
  'Figma',
  'Cypress',
  'Storybook',
  'Git',
];
const WorkCard = () => {
  return (
    <div className="flex flex-col max-w-[1152px] rounded-xl md:flex-row mb-4">
      <div className="dark:bg-[#374151] flex p-12 bg-[#F9FAFB] border-r border-gray-100 rounded-bl-lg ">
        <img
          className="size-full rounded-lg"
          src={WorkCardImg}
          alt="WorkCardImg"
        ></img>
      </div>
      <div className="flex flex-col gap-6 p-12 flex-2 md:flex-1 dark:bg-[#1F2937]">
        <h3 className="text-xl font-semibold leading-7 text-gray-900 dark:text-[#F9FAFB]">
          Fiskil
        </h3>
        <p className="text-base font-normal text-gray-600 font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra.
        </p>
        <div className="flex flex-wrap gap-2">
          {buttons.map((el) => {
            return (
              <button className="dark:bg-[#374151] dark:text-[#D1D5DB] bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium gap-2">
                {el}
              </button>
            );
          })}
        </div>
        <div>
          <SquareArrowOutUpRight className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};
export default WorkCard;
