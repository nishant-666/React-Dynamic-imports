import React, { useState, useMemo } from "react";

export default function Home() {
  const [Component, setComponent] = useState(null);

  const loadComponent = async () => {
    const loader = await import("../components/HomeComponent");
    setComponent(() => loader.default);
  };

  useMemo(() => loadComponent(), []);
  return <div>{Component ? <Component /> : <></>}</div>;
}
