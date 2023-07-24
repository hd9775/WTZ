import zaraImg from "../../assets/img/zaraImg.png";
import btnImg from "../../assets/img/blackBtnImg.png";
import simpleSquareImg from "../../assets/img/simpleSquareImg.png";
interface profileSideMenuProps {
  onSetViewMain: (num: number) => void;
  viewMain: number;
}

const ProfileSideMenu = ({ viewMain, onSetViewMain }: profileSideMenuProps) => {
  return (
    <aside className="relative ml-[60px] flex flex-col leading-[140px] text-cente items-center text-center justify-center">
      <img src={zaraImg} className="absolute left-[-64px] top-[-108px] w-[200px]" />
      <div
        className={`w-[400px] h-[200px] bg-contain bg-no-repeat bg-center relative flex items-center justify-center cursor-pointer`}
        style={{ backgroundImage: `url(${btnImg})` }}
        onClick={() => onSetViewMain(1)}
      >
        <p className={`text-white text-[48px] w-full ${viewMain === 1 ? "text-yellow-200" : ""}`}>비밀번호 변경</p>
      </div>
      <div
        className={`w-[400px] h-[200px] bg-contain bg-no-repeat bg-center relative flex items-center justify-center cursor-pointer`}
        style={{ backgroundImage: `url(${btnImg})` }}
        onClick={() => onSetViewMain(2)}
      >
        <p className={`text-white text-[48px] w-full ${viewMain === 2 ? "text-yellow-200" : ""}`}>게임전적조회</p>
      </div>
      <div
        className={`w-[400px] h-[200px] bg-contain bg-no-repeat bg-center relative flex items-center justify-center cursor-pointer`}
        style={{ backgroundImage: `url(${btnImg})` }}
        onClick={() => onSetViewMain(3)}
      >
        <p className={`text-white text-[48px] w-full ${viewMain === 3 ? "text-yellow-200" : ""}`}>게임전적통계</p>
      </div>
      <div className="relative " onClick={() => onSetViewMain(4)}>
        <img src={simpleSquareImg} className=" bg-black w-[300px]" />
        <div className=" absolute font-bold text-red-300 -top-[20px] text-center w-full h-full text-[40px] cursor-pointer">
          회원 탈퇴
        </div>
      </div>
    </aside>
  );
};

export default ProfileSideMenu;
