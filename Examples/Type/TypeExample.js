import {Type} from "./type.js"
let oneOnly = new Type("one", value => value == 1)
let myOne = oneOnly.create("1")
let otherOne = oneOnly.create(1)
