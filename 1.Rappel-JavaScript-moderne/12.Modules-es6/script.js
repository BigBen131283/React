import {exactAge as newAge, userName} from "./module.js"
import foo from "./module.js";

foo();
console.log(newAge, userName);

import * as Utils from "./module.js";
console.log(Utils);