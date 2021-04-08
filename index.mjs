import * as $ from "./lib/index.mjs";

// chunk
const chunk1 = $.chunk(["a", "b", "c", "d"], 2);
const chunk2 = $.chunk(["a", "b", "c", "d"], 3);
console.log("// chunk //\n", { chunk1, chunk2 });

// compact
const compact1 = $.compact([0, null, 1, false, 2, "", 3, 0, 4]);
console.log("// compact //\n", compact1);
