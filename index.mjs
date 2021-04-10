import * as $ from "./lib/index.mjs";

// chunk
const chunk1 = $.chunk(["a", "b", "c", "d"], 2);
const chunk2 = $.chunk(["a", "b", "c", "d"], 3);
console.log("// chunk //\n", { chunk1, chunk2 });

// compact
const compact1 = $.compact([0, null, 1, false, 2, "", 3, 0, 4]);
console.log("// compact //\n", compact1);

// drop
const drop1 = $.drop([1, 2, 3]);
const drop2 = $.drop([1, 2, 3], 2);
const drop3 = $.drop([1, 2, 3], 5);
const drop4 = $.drop([1, 2, 3], 0);
console.log("// drop //\n", { drop1, drop2, drop3, drop4 });
