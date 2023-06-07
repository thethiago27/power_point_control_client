import type {FC, ReactFragment} from "react";
import styles from "./styles.module.css"

interface ControlButtonProps {
  children: ReactFragment;
  onClick?: () => void;
}

const ControlButton: FC<ControlButtonProps> = ({children, onClick}) => {

  return (
    <button
        onClick={onClick}
        className={styles.control}
    >
      {children}
    </button>

  )
}

export default ControlButton