const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" card bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-4xl m-4">
      {children}
    </div>
  );
};

export default Card;