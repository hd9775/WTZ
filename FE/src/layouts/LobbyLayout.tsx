import lobbyImg from "../assets/img/lobbyImg.png";
import { LayoutChildrenProps } from "../types/LayoutChildrenProps";

const LobbyLayout = ({ children }: LayoutChildrenProps) => {
  return (
    <div
      className={`w-full h-screen bg-contain bg-black bg-no-repeat bg-center relative`} // bg-black 제거
      style={{ backgroundImage: `url(${lobbyImg})` }}
    >
      {children}
    </div>
  );
};

export default LobbyLayout;
