import router from "./router/index.js";
import ui from "./ui/index.js";

ui();
router();

export function test() {
  console.log("Works");
}
