import { useState } from "react";
import { LobbyJobBtn } from "./LobbyJobBtn";
import { LobbyNumBtn } from "./LobbyNumBtn";
import lobbyYellowBtnImg from "../../assets/img/lobbyYellowBtnImg.png";

export const LobbyCreateRoom = () => {
  const [selectedNum, setSelectedNum] = useState(1);
  const [selectedJob, setSelectedJob] = useState(0);

  const onSetSelectedNum = (num: number) => {
    setSelectedNum(num);
  };

  const onSetSelectedJob = (num: number) => {
    if ((selectedJob & (1 << num)) != 0) {
      setSelectedJob(selectedJob & ~(1 << num));
    } else {
      setSelectedJob(selectedJob | (1 << num));
    }
  };

  const num = [...Array(4).keys()];
  const job = [...Array(8).keys()];

  return (
    <>
      {/* <div className="absolute left-[40%] top-[15%] w-[55%] h-[70%] border-solid border-white border-[20px] p-[100px] text-[48px] font-bold"> */}
      <div className="absolute left-[36%] top-[17%] w-[1140px] h-[700px] border-solid border-white border-[20px] p-[80px] text-[56px] font-bold bg-black">
        <div className="flex">
          <p className="text-white px-[36px] mr-[100px]">인원</p>
          <div className="w-[620px] flex justify-between text-white">
            {num.map((item) => {
              return (
                <LobbyNumBtn
                  text={`${item + 5}명`}
                  index={item}
                  selectedNum={selectedNum}
                  onSetSelectedNum={onSetSelectedNum}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-[40px] flex flex-wrap justify-between">
          {job.map((item) => {
            return <LobbyJobBtn index={item} selectedJob={selectedJob} onSetSelectedJob={onSetSelectedJob} />;
          })}
        </div>
        <div className="absolute w-[360px] h-[120px] flex justify-center items-center bottom-[-50px] right-[-60px]">
          <img src={lobbyYellowBtnImg} className="absolute" />
          <p className="absolute">만들기</p>
        </div>
      </div>
    </>
  );
};
