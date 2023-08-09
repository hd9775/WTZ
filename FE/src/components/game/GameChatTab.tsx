// import { useState } from "react";
import { TAB_MAP } from "../../constants/game/TabMap";
import { GameChatTabItem } from "./GameChatTabItem";

interface GameChatTabProps {
  selectTab: number;
  onSetSelectTab: (num: number) => void;
  amIZara: boolean;
  amIDead: boolean;
}

export const GameChatTab = ({ selectTab, onSetSelectTab, amIZara, amIDead }: GameChatTabProps) => {
  const viewTab = [true, amIZara, amIDead];

  return (
    <div className="absolute 3xl:left-[11px] left-[8.8px] 3xl:top-[-35px] top-[-28px]">
      <div className="flex justify-start">
        {viewTab[TAB_MAP.ALL] && (
          <GameChatTabItem tabType={TAB_MAP.ALL} selectTab={selectTab} onSetSelectTab={onSetSelectTab} />
        )}
        {viewTab[TAB_MAP.ZARA] && (
          <GameChatTabItem tabType={TAB_MAP.ZARA} selectTab={selectTab} onSetSelectTab={onSetSelectTab} />
        )}
        {viewTab[TAB_MAP.GHOST] && (
          <GameChatTabItem tabType={TAB_MAP.GHOST} selectTab={selectTab} onSetSelectTab={onSetSelectTab} />
        )}
      </div>
    </div>
  );
};
