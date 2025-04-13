import { Category } from "./commonFunctions";

export type OperationFullType = CostFull | ProfitFull;
type OperationFullData = {
  name: string;
  desc?: string;
  amount: number;
  category: Category;
  createdAt: string;
};
type CostFull = {
  type: "Cost";
} & OperationFullData;
type ProfitFull = {
  type: "Profit";
} & OperationFullData;

export interface OperationFullProps {
  operation: OperationFullType;
}
export const OperationFull = ({ operation }: OperationFullProps) => {
  return (
    <div className="fullOperation">
      <p className="operationText">
        {operation.type} {operation.amount.toPrecision(4)} $$
        <br />
        {operation.category.name}
        <br />
        {operation.name}
        <br />
        {operation.desc}
        <br />
        Creation date: {operation.createdAt}
      </p>
    </div>
  );
};
