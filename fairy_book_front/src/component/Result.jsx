import React from "react";
import { useRecoilState } from "recoil";
import { nameAtom } from "../App";

export default function Result() {
  const [name, setName] = useRecoilState(nameAtom);

  return <div>{name}</div>;
}
