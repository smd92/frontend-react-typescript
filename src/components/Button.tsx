import { ButtonProps } from "../types";

const Button = (props: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    props.px || "px-7"
  } text-n-1 ${props.className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={props.onClick}>
      <span className={spanClasses}>{props.children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={props.href} className={classes}>
      <span className={spanClasses}>{props.children}</span>
    </a>
  );

  return props.href ? renderLink() : renderButton();
};

export default Button;
