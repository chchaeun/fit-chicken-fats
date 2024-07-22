import { FaGithubSquare } from "react-icons/fa"

const Footer = () => {
    const pageGithub = () => {
        window.open("https://github.com/chchaeun/fit-chicken-fats");
    }
    
    return (
        <div className="flex justify-between border-t-2 border-t-chickenPoint">
            <FaGithubSquare
                className="m-3 text-4xl text-chickenMain hover:text-chickenPoint"
                onClick={pageGithub}
            />
            <div className="p-10 text-xs text-right text-slate-600">
                ⓒ 2024. Team-ChickenLabs. All rights reserved.
                <br />
                (출처: 식품의약품안전처 식품영양성분 데이터베이스)
            </div>
        </div>
    );
}

export default Footer