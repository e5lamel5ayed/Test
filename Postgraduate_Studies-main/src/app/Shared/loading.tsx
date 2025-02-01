/* eslint-disable @typescript-eslint/no-explicit-any */
// AnotherComponent.tsx

import { ProgressBar } from "primereact/progressbar";
import React from "react";
import { useSelector } from "react-redux";

const Loading: React.FC = () => {
  const isLoading = useSelector((state: any) => state.loading.isLoading);
  return (
    <div>
      {isLoading && (
        <ProgressBar
          mode="indeterminate"
          style={{ height: "4px", zIndex: 9999 }}
        ></ProgressBar>
      )}
    </div>
  );
};

export default Loading;
