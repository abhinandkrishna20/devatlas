const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" card bg-black-400 text-white
     border   shadow-lg rounded-xl p-6 w-full max-w-4xl m-4">
      {children}
    </div>
  );
};

export default Card;