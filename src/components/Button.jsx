function Button({ children, ...props }) {
    return (
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-white 
                   hover:bg-stone-600 hover:text-stone-200 
                   focus:outline-none focus:ring focus:ring-stone-500"
        {...props}
      >
        {children}
      </button>
    );
  }
  
  export default Button;
  