const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default LoadingSpinner;