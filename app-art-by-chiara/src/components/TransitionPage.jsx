// import { motion } from "framer-motion";

const TransitionPage = ({ children }) => {
  return (
    /*
    <motion.div
      initial={{
        opacity: 0,
        x: "10vw",
      }}
      animate={{
        opacity: 1,
        x: "0vw",
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
        x: "-10vw",
        transition: {
          duration: 0.3,
        },
      }}
      transition={{
        duration: 0.3,
      }}
    >*/
    <>{children}</>
    // </motion.div>
  );
};

export default TransitionPage;
