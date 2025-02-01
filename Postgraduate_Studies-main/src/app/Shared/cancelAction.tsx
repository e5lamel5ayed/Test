import React from "react";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Additional props can be of any type
};

const CancelAction = ({ children, props, onClick }: Props) => {
  return (
    <button
      type="button"
      className="btn btn-lg ms-2 btn-sm pe-6"
      style={{ backgroundColor: "#fff " , border:"1px solid #0F1016" }}
      onClick={onClick}
      {...props}
    >
      {
        <div className="d-flex align-items-center ">
          <i className="bi bi-x-lg fs-3 me-2 text-dark"></i>
          <span className="indicator-label">{children}</span>
        </div>
      }
    </button>
  );
};

export default CancelAction;
