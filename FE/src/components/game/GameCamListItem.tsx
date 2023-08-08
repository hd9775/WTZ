import { useEffect, useState } from "react";
import { BORDER_COLOR_MAP } from "../../constants/common/ColorMap";
import { JOB_MAP } from "../../constants/common/JobMap";
import GameCamListItemComponent from "./GameCamListItemComponent";
import { useAccessTokenState } from "../../context/accessTokenContext";

interface GameCamListItemProps {
  orderNo: number;
  streamManager: any;
  userJob: {
    userSeq: number;
    jobSeq: number;
  }[];
  myOrderNo: number;
}

export const GameCamListItem = ({ orderNo, streamManager, userJob, myOrderNo }: GameCamListItemProps) => {
  const [userName, setUserName] = useState("");
  const { userSeq } = useAccessTokenState();
  console.log(userJob);
  useEffect(() => {
    if (streamManager) {
      let obj = JSON.parse(streamManager["stream"]["connection"]["data"]);
      setUserName(() => {
        return obj.clientData;
      });
    }
  }, [streamManager]);

  return (
    <div
      className={`relative 3xl:w-[375px] w-[300px] 3xl:h-[250px] h-[200px] bg-black border-solid 3xl:border-[15px] border-[12px] ${BORDER_COLOR_MAP[orderNo]}`}
    >
      <GameCamListItemComponent streamManager={streamManager} />$
      {(userSeq === userJob[orderNo].userSeq || (userJob[myOrderNo].jobSeq === 2 && userJob[orderNo].jobSeq === 2)) && (
        <p
          className={`absolute bottom-[5px] left-[10px] ${
            JOB_MAP[userJob[orderNo].jobSeq].color
          } drop-shadow-stroke-black-sm font-bold text-[30px]`}
        >
          {JOB_MAP[userJob[orderNo].jobSeq].name}
        </p>
      )}
      {streamManager != undefined ? (
        <p
          className={`absolute bottom-[70px] left-[110px] ${
            JOB_MAP[userJob[orderNo].jobSeq].color
          } drop-shadow-stroke-black-sm font-bold text-[30px]`}
        >
          {userName}
        </p>
      ) : null}
    </div>
  );
};
