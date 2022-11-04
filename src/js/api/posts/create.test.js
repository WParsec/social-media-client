import { createPost } from "./create";

// The createPost function creates an item on the API

const VALID_INPUTS = {
  title: "test",
  body: "test",
  media: "test",
  tags: "test",
};

function createSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(VALID_INPUTS),
  });
}

describe("create function", () => {
  it("creates an item on the API", async () => {
    global.fetch = jest.fn(() => createSuccess());
    const item = await createPost(VALID_INPUTS);
    expect(item).toEqual(VALID_INPUTS);
  });
});
