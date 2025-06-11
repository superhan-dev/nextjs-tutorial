"use client";
import { useEffect, useRef, useState } from "react";
import h337 from "heatmap.js";

export default function Dashboard() {
  const heatmapRef = useRef<HTMLDivElement>(null);
  const heatmapInstanceRef = useRef<any>(null);
  const [heatmapData, setHeatmapData] = useState<{
    max: number;
    min: number;
    data: Array<{ x: number; y: number; value: number }>;
  }>({
    max: 100,
    min: 0,
    data: [],
  });

  // 초기 데이터 생성
  useEffect(() => {
    // const generateInitialData = () => {
    //   const points = [];
    //   let max = 0;
    //   const width = 840;
    //   const height = 400;
    //   let len = 200;
    //   while (len--) {
    //     const val = Math.floor(Math.random() * 100);
    //     max = Math.max(max, val);
    //     const point = {
    //       x: Math.floor(Math.random() * width),
    //       y: Math.floor(Math.random() * height),
    //       value: val,
    //     };
    //     points.push(point);
    //   }
    //   setHeatmapData({
    //     max,
    //     min: 0,
    //     data: points,
    //   });
    // };
    // generateInitialData();
  }, []);

  // heatmap 인스턴스 생성 및 데이터 설정
  useEffect(() => {
    if (!heatmapRef.current) return;

    heatmapInstanceRef.current = h337.create({
      container: heatmapRef.current,
    });

    heatmapInstanceRef.current.setData(heatmapData);
  }, []);

  // heatmap 데이터가 변경될 때마다 업데이트
  useEffect(() => {
    if (heatmapInstanceRef.current) {
      heatmapInstanceRef.current.setData(heatmapData);
    }
  }, [heatmapData]);

  // 클릭 이벤트 핸들러
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const heatmapElement = e.currentTarget;
    const rect = heatmapElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 새로운 포인트 추가
    const newPoint = {
      x: Math.round(x),
      y: Math.round(y),
      value: Math.floor(Math.random() * 100),
    };

    setHeatmapData((prev) => ({
      ...prev,
      max: Math.max(prev.max, newPoint.value),
      data: [...prev.data, newPoint],
    }));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div
        ref={heatmapRef}
        className="heatmap w-[840px] h-[400px] bg-black"
        onClick={handleClick}
      />
    </div>
  );
}
