import { Figma, Github, Twitter } from 'lucide-react';
import { contact, footersvg } from '../constants';
import { Button } from './Button';
export const Contact = () => {
  return (
    <div className=" dark:bg-[#030712] pt-16 pr-4 pl-4 pb-16">
      <Button name="Get in touch" margin="mb-4" />
      <p className="text-xl dark:text-[#D1D5DB] text-gray-600 font-normal text-center mb-6">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      {contact.map((el) => {
        return (
          <div className="flex justify-center gap-4 h-9">
            <div className="text-gray-600 dark:text-[#D1D5DB]">{el.icon}</div>
            <h1 className="text-lg font-bold dark:text-[#F9FAFB]">
              {el.email}
            </h1>
            <div className="text-gray-600 dark:text-[#D1D5DB]">{footersvg}</div>
          </div>
        );
      })}
      <p className="text-base dark:text-[#D1D5DB] text-gray-600 font-normal text-center mb-4 mt-6">
        You may also find me on these platforms!
      </p>
      <div className="flex justify-center gap-4 text-gray-600 dark:text-[#D1D5DB]">
        <Github />
        <Twitter />
        <Figma />
      </div>
    </div>
  );
};
