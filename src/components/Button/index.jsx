import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default function Button({ children, color = "", onClick }) {
  return (
    <button onClick={onClick}
      className={`rounded-md transition duration-300 ease-in-out ${color} text-white dark:bg-gradient-to-r from:bg-azure-radiance-50 dark:to-azure-radiance-300 dark:text-black dark:hover:bg-slate-400 px-4 py-2 shadow-md focus:ring hover:bg-gradient-to-r from-azure-radiance-500 to-azure-radiance-950 active:translate-y-3 font-medium`}
    >
      {children}
    </button>
  );
}
