import React, { useState, useMemo } from "react";

export default function Settings() {
  const [Component, setComponent] = useState(null);

  const loadComponent = async () => {
    const loader = await import("../components/SettingComponent");
    setComponent(() => loader.default);
  };

  useMemo(() => loadComponent(), []);
  return <div>{Component ? <Component /> : <></>}</div>;
}
