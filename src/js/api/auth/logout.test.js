import { logout } from "./logout";
import { LocalStorageMock } from "../../__mock__/localStorage.mock";
import { save } from "../../storage";

global.localStorage = new LocalStorageMock();

describe("Logout function", () => {
  it("removes token and profile from local storage", () => {
    save("token", { profile: "profile" });
    expect(localStorage.getItem("token")).toEqual('{"profile":"profile"}');
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
