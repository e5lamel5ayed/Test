import React from 'react';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Additional props can be of any type
};

const ActionButton = ({
  children,
  disabled,
  type,
  onClick,
  ...props
}: Props) => (
  <button style={{backgroundColor:'#426AC4', border:'none'}} type={type} onClick={onClick} disabled={disabled} {...props}>
    {!disabled && (
    <div className="d-flex align-items-center ">
      <i className="bi bi-check-lg fs-3 me-2" />
      <span className="indicator-label">{children}</span>
    </div>
      )}

    {disabled && (
    <div className="d-flex align-items-center ">
      <i className="bi bi-check-lg fs-3 me-2" />
      <span className="indicator-label">{children}</span>
    </div>
      )}
  </button>
  );

export default ActionButton;
