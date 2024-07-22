import { FiHelpCircle } from "react-icons/fi";

interface HeaderProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <>
            <div className="w-screen border-b-2 border-b-chickenPoint">
                <div className="flex items-center justify-between p-10 text-3xl text-chickenMain">
                    <div>ChickenLabs</div>
                    <FiHelpCircle
                        className="text-5xl cursor-pointer hover:text-chickenPoint"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    />
                </div>
            </div>
        </>
    );
};

export default Header