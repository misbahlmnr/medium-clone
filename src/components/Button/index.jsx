/* eslint-disable react/prop-types */
const Button = ({ buttonText, variant }) => {
  const style = {
    primary:
      "px-4 py-2 text-white transition-colors duration-150 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-700",
    secondary:
      "px-4 py-2 text-blue-500 transition-colors duration-150 ease-in-out border-2 border-blue-500 rounded-lg hover:bg-blue-700 hover:text-white",
  };

  variant = style[variant] || style.primary;
  return <button className={variant}>{buttonText}</button>;
};

export default Button;
