import React from "react";
import Canvas from "./_component/canvas";
import Room from "@/components/room";
import Loading from "./_component/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <>
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </>
  );
};

export default BoardIdPage;
