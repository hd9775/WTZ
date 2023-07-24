export const ProfileData = () => {
  const userData = {
    total: 100,
    percentage: 65,
    job: [60, 35, 50, 35, 45, 55, 65, 40],
  };

  const job: Array<string> = ["토끼", "자라", "경찰", "의사", "군인", "건달", "정치인"];
  return (
    <>
      <div className="p-[20px] font-bold text-white">
        <div className="flex flex-col text-[42px] px-[56px] py-[24px]">
          <p className="mb-[80px]">총 플레이 횟수 : {userData.total}판</p>
          <p className="mb-[80px]">총 승률 : {userData.percentage}%</p>
          <p className="mb-[10px]">역할 별 승률</p>
          <div className="flex flex-wrap justify-between">
            {job.map((item, index) => (
              <p className="mx-[8px] my-[0px]" key={index}>
                {item} : {userData.job[index]}%
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
