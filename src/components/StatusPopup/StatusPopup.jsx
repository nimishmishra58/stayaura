import "./StatusPopup.css";

const StatusPopup = ({
  open,
  type = "success",
  title,
  message,
  onClose,
}) => {
  if (!open) return null;

  const isError = type === "error";

  return (
    <div className="status-popup-overlay" onClick={onClose}>
      <div
        className={`status-popup-card ${isError ? "error" : "success"}`}
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="status-popup-head">
          <span className="status-popup-icon">
            <i className={`fa-solid ${isError ? "fa-circle-xmark" : "fa-circle-check"}`} />
          </span>
          <h4>{title}</h4>
        </div>
        <p>{message}</p>
        <button type="button" className="status-popup-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default StatusPopup;
