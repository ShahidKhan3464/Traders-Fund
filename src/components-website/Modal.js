export default function Modal({ isOpen, onClose, children, forgot, setForgot, classes = '' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 mx-auto bg-white rounded-lg md:max-w-md">
        <button
          className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
          onClick={() => {
            onClose();
            setForgot(false);
          }}
        >
          Close
        </button>
        <div className={`py-4 text-left px-6 ${classes}`}>{children}</div>
      </div>
    </div>
  );
}
