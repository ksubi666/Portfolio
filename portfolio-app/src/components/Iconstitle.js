import { iconsT } from '../constants';

const Iconstitle = () => {
  return iconsT.map((el) => {
    return (
      <div className="text-center items-center flex flex-col gap-y-2">
        <img src={el.icons} alt={el.title}></img>
        <p>{el.title}</p>
      </div>
    );
  });
};
export default Iconstitle;
