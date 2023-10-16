import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const loginHandler = () => {
    window.open(`api/v1/googlelogin`, "_self");
  };

  return (
    <section className="login">
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={loginHandler}
      >
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
