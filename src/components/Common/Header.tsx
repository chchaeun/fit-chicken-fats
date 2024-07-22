import { PiSealQuestionDuotone } from "react-icons/pi";
import ChickenLabsLogo from "../../assets/imges/ChickenLabsLogo.png"

interface HeaderProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <>
            <div className="w-screen border-b-2 border-b-chickenPoint">
                <div className="flex items-center justify-between p-4 text-3xl text-chickenMain">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <img src={ChickenLabsLogo} alt="logo" className="w-44"/>
                            {/* <GiChicken />
                            <PiChartPieSliceDuotone />
                            <ImLab className="text-2xl"/> */}
                        </div>
                    </div>
                    <PiSealQuestionDuotone
                        className="mr-3 text-4xl cursor-pointer hover:text-chickenPoint"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    />
                </div>
            </div>
        </>
    );
};

export default Header