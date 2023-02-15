import React, { useState, useMemo } from "react";

export default function Profile() {
  const [Component, setComponent] = useState(null);

  const loadComponent = async () => {
    const loader = await import("../components/ProfileComponent");
    setComponent(() => loader.default);
  };

  useMemo(() => loadComponent(), []);
  return <div>{Component ? <Component /> : <></>}</div>;
}
