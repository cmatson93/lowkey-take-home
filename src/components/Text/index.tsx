import { AnimatePresence, motion } from "framer-motion";

import "./styles.css";

const Text = ({ visible, children, text }: any) => (
  <AnimatePresence>
    {visible && (
      <motion.h1
        layoutId="text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.h1>
    )}
  </AnimatePresence>
);

export default Text;
