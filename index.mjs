import * as $ from "./lib/index.mjs";

// chunk
const chunk1 = $.chunk(["a", "b", "c", "d"], 2);
const chunk2 = $.chunk(["a", "b", "c", "d"], 3);

console.log("// chunk //\t", { chunk1, chunk2 });
