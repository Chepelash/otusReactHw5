import {
  createRandomCategory,
  createRandomPrice,
  createRandomString,
  isLucky,
} from "./commonFunctions";
import { OperationFullType } from "./OperationFull";

export const createRandomFullOperation = (): OperationFullType => {
  return {
    type: isLucky() ? "Profit" : "Cost",
    name: "operationName_" + createRandomString(6),
    desc: "operationDesc_" + createRandomString(6),
    amount: createRandomPrice(),
    category: createRandomCategory(),
    createdAt: new Date(Date.now()).toUTCString(),
  };
};
