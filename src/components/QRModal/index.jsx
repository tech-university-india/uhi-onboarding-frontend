import React from "react";
const QRModal = ({ visible, onClose }) => {
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  const qrCode = '64base-imageformat'
  return (
    <div
      id="container"
      onClick={handleClose}
      data-testid="container"
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center p-4"
    >
      <div className="bg-white w-96 h-96 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <div className="w-80 h-80 bg-primary rounded-lg flex justify-center items-center">
          <img src={`data:image/jpeg;base64,${qrCode}`} alt="qr-code" className="w-64 h-64" />
        </div>
      </div>
    </div>
  );
};

export default QRModal;
