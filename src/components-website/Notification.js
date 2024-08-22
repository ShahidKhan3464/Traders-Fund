function Notification({ message, type }) {
  const bgColor = type === 'success' ? 'bg-green-400' : 'bg-red-500';

  return (
    <div
      className={`fixed top-5 right-5 mb-4 ml-4 p-4 text-center rounded shadow-lg text-white transform transition-transform duration-500 slide-in ${bgColor} z-[1000]`}
    >
      {Array.isArray(message) && message.length > 0 ? (
        <ol>
          {message.map((m, i) => (
            <li>
              <span>
                {i + 1}. {m}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <span>{message}</span>
      )}
    </div>
  );
}

export default Notification;
