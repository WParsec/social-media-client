import { login } from "./login";
import { LocalStorageMock } from "../../__mock__/localStorage.mock";

// The login function returns a valid token when provided with valid credentials

const VALID_CREDENTIALS = { email: "test123@noroff.no", password: "password" };
const VALID_TOKEN = { id: "TOKEN", name: "VALID TOKEN" };

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(VALID_TOKEN),
  });
}

global.localStorage = new LocalStorageMock();

describe("Login function", () => {
  it("returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const TOKEN = await login(VALID_CREDENTIALS);
    expect(TOKEN).toEqual(VALID_TOKEN);
  });
});
