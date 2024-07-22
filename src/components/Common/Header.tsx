import ChickenLabsLogo from "../../assets/imges/ChickenLabsLogo.png"
import { GrCircleQuestion } from "react-icons/gr";

interface HeaderProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMouseEnter, onMouseLeave }) => {
    return (
         <div className="w-screen border-b-2 border-b-chickenPoint">
            <div className="flex items-center justify-between p-4 text-3xl text-chickenMain">
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <img
                            src={ChickenLabsLogo}
                            alt="logo"
                            className="w-44"
                        />
                    </div>
                </div>
                <GrCircleQuestion
                    className="mr-3 text-4xl rounded-full cursor-pointer text-chickenMain hover:text-white hover:bg-chickenPoint"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            </div>
        </div>
    );
};

export default Header