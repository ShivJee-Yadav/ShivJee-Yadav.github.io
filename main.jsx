import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import "./css/styles.css";

const name = "Shiv Jee Yadav";

function App() {
  return (
    <div className="page">
      <h1 id="NameAnimation">
       { name.split("").map((letter, i) => (
  <motion.span
    key={i}
    data-char={letter}
    className="char"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.08, duration: 1.2 }}
  >
    {letter === " " ? "\u00A0" : letter}
  </motion.span>
))}

      </h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("NameAnimation")).render(<App />);
