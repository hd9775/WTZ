import { HomeBtn } from "./HomeBtn";
import { ModalCategoryMap } from "../../constants/ModalCategoryMap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { removeAllToken } from "../../utils/cookie";
import { useIsLoginState } from "../../context/loginContext";

interface HomeSideMenuProps {
  showModalHandler: (type: number) => void;
}

const HomeSideMenu = ({ showModalHandler }: HomeSideMenuProps) => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useIsLoginState();
  return isLogin ? (
    <aside className="absolute bottom-[60px] ml-[60px] flex flex-col l">
      <HomeBtn text="로비입장" color="yellow" onClick={() => navigate("/lobby")} />
      <HomeBtn
        text="로그아웃"
        color="none"
        onClick={() => {
          toast.success("로그아웃 되었습니다.");
          removeAllToken();
          setIsLogin(false);
        }}
      />
      <HomeBtn text="게임설명" color="none" onClick={() => showModalHandler(ModalCategoryMap.GameDescription)} />
    </aside>
  ) : (
    <aside className="absolute bottom-[60px] ml-[60px] flex flex-col l">
      <HomeBtn text="로그인" color="yellow" onClick={() => showModalHandler(ModalCategoryMap.Login)} />
      <HomeBtn text="회원가입" color="none" onClick={() => showModalHandler(ModalCategoryMap.SignUp)} />
      <HomeBtn text="비밀번호 찾기" color="none" onClick={() => showModalHandler(ModalCategoryMap.ResetPw)} />
      <HomeBtn text="게임설명" color="none" onClick={() => showModalHandler(ModalCategoryMap.GameDescription)} />
    </aside>
  );
};

export default HomeSideMenu;
