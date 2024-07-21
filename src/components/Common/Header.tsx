import { FiHelpCircle } from "react-icons/fi";

const Header = () => {
  return (
      <div className="border-b-2 border-b-chickenPoint">
          <div className="flex items-center justify-between p-10 text-2xl text-chickenPoint">
              <div>ChickenLabs</div>
              <FiHelpCircle className="cursor-pointer"/>
          </div>
      </div>
  );
}

export default Header