import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import Page from "../../../app/blog/page";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            userId: 1,
            id: 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          },
          {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          },
        ]),
      ok: true,
    })
  ) as jest.Mock;
});
afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe("Blog Page", () => {
  it("renders the blog page", async () => {
    const PageComponent = Page();

    await act(async () => {
      render(PageComponent);
    });

    const heading = screen.getByRole("heading", { name: /blog/i });
    const subheading = screen.getByRole("heading", { name: /posts/i });
    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });

  it("renders the loading state", async () => {
    // 원래 fetch 구현 저장
    const originalFetch = global.fetch;

    // 지연된 fetch로 교체
    global.fetch = jest.fn(
      () =>
        new Promise((resolve) => {
          // 의도적으로 지연 시켜 Suspense fallback이 표시되도록 함
          setTimeout(() => {
            resolve({
              json: () =>
                Promise.resolve([{ userId: 1, id: 1, title: "Test Post" }]),
              ok: true,
            });
          }, 1000);
        })
    ) as jest.Mock;

    const PageComponent = Page();

    await act(async () => {
      // 첫 렌더링 - 로딩 상태 캡처
      render(PageComponent);
    });

    // 로딩 상태 확인
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // 테스트 후 원래 fetch 복원
    global.fetch = originalFetch;
  });
});
