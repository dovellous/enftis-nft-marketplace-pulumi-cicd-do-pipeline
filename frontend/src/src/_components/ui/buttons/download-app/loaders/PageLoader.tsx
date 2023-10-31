import React, { useEffect } from "react";
import "./pageLoader.scss";
export const PageLoader = () => {

  return (
    <div id="app-overlay" >
      <div id="app-overlay-spinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: "auto",
            background: "rgba(241, 242, 243, 0)",
            display: "block",
            shapeRendering: "auto",
          }}
          width="201px"
          height="201px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx={50}
            cy={50}
            r={0}
            fill="none"
            stroke="#ff8ced"
            strokeWidth={3}
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.9900990099009901s"
              values="0;42"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="0s"
            />
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="0.9900990099009901s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="0s"
            />
          </circle>
          <circle
            cx={50}
            cy={50}
            r={0}
            fill="none"
            stroke="#fc00ff"
            strokeWidth={1}
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.9900990099009901s"
              values="0;42"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="-0.49504950495049505s"
            />
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="0.9900990099009901s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="-0.49504950495049505s"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};
