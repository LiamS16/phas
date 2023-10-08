import React from "react";

interface IProps extends React.HtmlHTMLAttributes<typeof HTMLButtonElement> {
  title: string;
  icon?: JSX.Element;
}

const MenuCheckbox = (props: IProps): JSX.Element => {
  const handleClick = () => {
    //
  };

  return (
    <button
      className={`flex items-center gap-2 rounded border px-3 py-2 text-base ${props.className}`}
      onClick={handleClick}
    >
      {props.icon}
      {props.title}
    </button>
  );
};

export default MenuCheckbox;
