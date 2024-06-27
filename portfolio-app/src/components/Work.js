import { Button } from './Button';
import WorkCard from './WorkCard';

export const Work = () => {
  return (
    <div className="dark:bg-[#030712] pt-16 pr-4 pl-4 pb-16 md:pr-32 md:pl-32 md:pt-24 md:pb-24">
      <Button name="Work" margin="m-4" />
      <p className="text-lg dark:text-[#D1D5DB] text-gray-600 font-normal text-center mb-6 md:mb-12">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};
