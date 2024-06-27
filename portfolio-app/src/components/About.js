import Photo2nd from '../assets/Photo2nd.png';
import AboutDark from '../assets/AboutDark.png';
import About768 from '../assets/About768.png';
import About768dark from '../assets/About768dark.png';
import { aboutText } from '../constants';
import { Button } from './Button';
export const About = () => {
  return (
    <div className="flex flex-col items-center dark:bg-[#111827] bg-gray-50">
      <div className=" dark:bg-[#111827] pt-16 md:px-8 p-4 pb-16 bg-gray-50 md:flex md:flex-col mb:items-center max-w-[1280px]">
        <Button name="About me" margin="m-12" />
        <div className="md:flex">
          <div className="md:min-h-[694px] md:min-w-[584px] flex justify-center md:block ">
            <img
              className="mb-12 max-w-[440px] max-h-[520px] md:hidden md:dark:hidden dark:hidden "
              src={Photo2nd}
              alt="Photo2nd"
            ></img>
            <img
              className="mb-12 max-w-[440px] max-h-[520px] md:hidden hidden md:dark:hidden dark:flex"
              src={AboutDark}
              alt="Photo2nd"
            ></img>
            <img
              className="mb-12 hidden md:flex dark:md:hidden "
              src={About768}
              alt="About768"
            ></img>
            <img
              className="mb-12 hidden md:hidden md:dark:flex "
              src={About768dark}
              alt="About768dark"
            ></img>
          </div>
          <div className=" dark:text-[#F9FAFB] flex flex-col gap-4 text-gray-600 text-base md:ml-24">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-[#F9FAFB]">
              Curious about me? Here you have it:
            </h1>
            {aboutText.map((el) => (
              <p>{el}</p>
            ))}
            <div className="flex">
              <ul className="list-disc ml-4">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
              <ul className="list-disc ml-4">
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
