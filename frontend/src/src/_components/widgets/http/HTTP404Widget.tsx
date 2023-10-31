import React, { useEffect } from "react";

import { HTTPWidgetRFCProps } from ".";

import "./httpWidget.scss";

const HTTP404Widget: React.FC<HTTPWidgetRFCProps> = ({
  children,
  ...props
}): any | null => {

  const { theme } = props;

  useEffect(() => {
    
    //
    console.log(theme);

  }, []);

  return (
    <>
      <h1 className="text-center">404 - Not Found</h1>
    </>
  );
};

export { HTTP404Widget };
