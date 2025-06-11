"use server";

export interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export async function fetchCards(): Promise<CardData[]> {
  // 실제 API 호출을 시뮬레이션하기 위해 짧은 지연 추가
  await new Promise((resolve) => setTimeout(resolve, 1000));

  /**
   * 문제가 발생하면 error boundary가 작동하도록 에러를 던질 수 있습니다.
   */
  // throw new Error("서버 오류: 데이터를 가져오는 중 문제가 발생했습니다.");

  // 서버에서 데이터를 가져오는 것을 시뮬레이션
  return [
    {
      id: 1,
      title: "훌륭한 디자인 소개",
      description: "최신 웹 디자인 트렌드와 기술에 대한 깊이 있는 분석",
      imageUrl: "/images/design.jpg",
    },
    {
      id: 2,
      title: "개발 팁 모음",
      description: "웹 개발자를 위한 효율적인 코딩 팁과 트릭",
      imageUrl: "/images/development.jpg",
    },
    {
      id: 3,
      title: "UX 연구 결과",
      description: "사용자 경험 향상을 위한 최신 연구 결과와 인사이트",
      imageUrl: "/images/ux.jpg",
    },
    {
      id: 4,
      title: "성능 최적화 방법",
      description: "웹사이트 성능을 극대화하기 위한 최적화 전략",
      imageUrl: "/images/performance.jpg",
    },
    {
      id: 5,
      title: "모바일 우선 디자인",
      description: "모바일 사용자를 위한 반응형 디자인 가이드라인",
      imageUrl: "/images/mobile.jpg",
    },
    {
      id: 6,
      title: "AI와 웹 개발",
      description: "인공지능이 현대 웹 개발에 미치는 영향",
      imageUrl: "/images/ai.jpg",
    },
  ];
}

export async function fetchFeaturedCard(): Promise<CardData> {
  // 실제 API 호출을 시뮬레이션하기 위해 짧은 지연 추가
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // 서버에서 데이터를 가져오는 것을 시뮬레이션
  return {
    id: 0,
    title: "2025년 웹 개발 트렌드",
    description:
      "최신 프론트엔드 및 백엔드 기술과 프레임워크에 대한 심층적인 분석과 예측. 개발자들이 주목해야 할 핵심 동향과 새로운 기술을 소개합니다.",
    imageUrl: "/images/featured.jpg",
  };
}
