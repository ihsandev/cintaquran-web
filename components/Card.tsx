import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
}

export default function Card({ children }: ICard) {
  return (
    <div className="bg-white px-7 py-9 rounded-md relative flex justify-center items-center">
      {children}
    </div>
  );
}
