import React from "react";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

function App() {
  return <Parent />;
}

function Parent() {
  return (
    <>
      <Increase />
      <Decrease />
      <Value />
    </>
  );
}

function Increase() {
  const [, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  const [, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

function Value() {
  const [count] = useAtom(countAtom);
  return <div>Value: {count}</div>;
}

export default App;
