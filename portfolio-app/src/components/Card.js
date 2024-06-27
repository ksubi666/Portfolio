import { CardItems } from '../constants';
const Card = () => {
  return CardItems.map((el) => {
    return (
      <div className="dark:bg-[#374151] min-w-[343px] md:max-w-[896px] h-[fit-content] p-8 rounded-xl bg-white mb-6 shadow-lg flex flex-col gap-y-4 md:flex-row md:gap-x-12">
        <img className="w-[102px] h-7 " src={el.icon} alt="upwork"></img>
        <div className=" md:flex-row-reverse md:flex md:gap-x-12">
          <p className="dark:text-[#D1D5DB] text-base text-gray-700 mb-4">
            {el.present}
          </p>
          <div className="">
            <h1 className="dark:text-[#F9FAFB] text-gray-900 size-lg font-semibold mb-4">
              {el.title}
            </h1>
            <ul className="list-disc">
              {el.text.map((t) => (
                <li className="text-base text-gray-600 dark:text-[#D1D5DB] ml-5">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  });
};
export default Card;
