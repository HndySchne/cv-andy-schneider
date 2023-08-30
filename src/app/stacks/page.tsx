"use client";
import React, { useEffect, useState } from "react";
import Stacksarray from "../../components/stacksarray";
import { Stack } from "@/interfaces";
import "./stacks.scss";
import "./stacks_mobile.scss";

function Stacks() {
  const [item, setItem] = useState<Stack>([]);

  useEffect(() => {
    fetch("/api/card")
      .then((response) => response.json())
      .then((res) => {
        console.log("res sans filtre :", res);
        setItem(res);
      });
  }, []);

  console.log(item);
  return (
    <div>
      <h2>{/* <i class="fa-solid fa-computer"></i> TECHNOLOGIES */}</h2>
      <div className="stacks-container">
        {item.map((stack) => (
          <div className="stack-container" key={stack.title}>
            <Stacksarray
              title={stack.title}
              logo={stack.logo}
              stack={stack.stackArray}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
