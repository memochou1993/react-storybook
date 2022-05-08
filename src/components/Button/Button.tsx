import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

const StyledButton = styled(Button)`
  cursor: pointer;
  background: linear-gradient(120deg, #79DCC9 6%, #619ED5 92%);
  border: 0;
  box-shadow: 0px 0px 24px #8A8FE1;
  border-radius: 12px;
  color: #FFFFFF;
  display: inline-block;
  font-size: 16px;
  height: 40px;
  text-align: center;
  text-shadow: 0px 0px 8px #345471;
  width: 160px;
`;

export default StyledButton;
