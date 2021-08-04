import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

import Icon from "../../icons";

import "./styles.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected: Boolean;
  value: string;
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const Button = ({ icon, onClick, selected, value }: ButtonProps) => (
  <button onClick={onClick} value={value}>
    {selected && (
      <motion.div
        className="selected"
        layoutId="selected"
        initial={false}
        animate={{
          background:
            "linear-gradient(225deg, #ef9383 0%, #ff4785 48.96%, #8c40d9 100%)",
        }}
        transition={spring}
      />
    )}
    {icon ? (
      <span>
        <Icon bold={selected} name={icon} />
      </span>
    ) : null}
    {value}
  </button>
);

export default Button;
