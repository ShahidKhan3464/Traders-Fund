function Notification({ message, type }) {
  const bgColor = type === 'success' ? 'bg-green-400' : 'bg-red-500';

  return (
    <div
      className={`fixed z-[1000] bottom-0 left-0 mb-4 ml-4 p-4 rounded shadow-lg text-white transform transition-transform duration-500 slide-in ${bgColor}`}
    >
      <span>{message}</span>
    </div>
  );
}

export default Notification;
