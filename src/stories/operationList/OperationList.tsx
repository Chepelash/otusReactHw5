import {
  OperationFull,
  OperationFullType,
} from "../operationFull/OperationFull";
import { v4 as uuidv4 } from "uuid";
import "./operationList.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { createRandomFullOperation } from "../operationFull/operationFullFunctions";

type OperationWithId = {
  id: string;
  operation: OperationFullType;
};

function requestOperations() {
  const entries: OperationWithId[] = [];
  for (let i = 0; i < 5; i++) {
    const entry: OperationWithId = {
      id: uuidv4(),
      operation: createRandomFullOperation(),
    };
    entries.push(entry);
  }
  return entries;
}

export const OperationList = () => {
  const [operations, setOperations] = useState<OperationWithId[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback((node: HTMLLIElement) => {
    if (!node) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observerRef.current?.disconnect();
          setOperations((prev) => {
            return [...prev, ...requestOperations()];
          });
        }
      },
      { threshold: 0.5 },
    );
    observerRef.current.observe(node);
  }, []);

  useEffect(() => {
    setOperations(requestOperations());
  }, []);

  return (
    <ul className="smallBox">
      {operations.length &&
        operations.map((operation: OperationWithId, index: number) => (
          <>
            <li
              key={operation.id}
              ref={index === operations.length - 1 ? lastElementRef : null}
              className="liEntry"
            >
              <OperationFull operation={operation.operation} />
            </li>
          </>
        ))}
    </ul>
  );
};
