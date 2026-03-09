import { useRef, useState } from "react";
import "./ChatbotWidget.css";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const getComposedMessage = (
    inputName = name,
    inputEmail = email,
    inputMessage = message
  ) => {
    const safeName = inputName.trim() || "Visitor";
    const safeEmail = inputEmail.trim();
    const safeMessage = inputMessage.trim();

    return [
      `Hi StayAura, this is ${safeName}.`,
      safeEmail ? `My email is ${safeEmail}.` : "",
      safeMessage ? `Message: ${safeMessage}` : "I would like to enquire about your services.",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const getLatestComposedMessage = () =>
    getComposedMessage(
      nameRef.current?.value ?? name,
      emailRef.current?.value ?? email,
      messageRef.current?.value ?? message
    );

  const addFreshnessMarker = (baseMessage) =>
    `${baseMessage}\n${"\u200B".repeat((Date.now() % 97) + 1)}`;

  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  };

  const copyMessage = async (textToCopy = getLatestComposedMessage()) => {
    try {
      let success = false;
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        success = true;
      } else {
        success = fallbackCopy(textToCopy);
      }

      if (!success) throw new Error("Clipboard copy failed");

      setCopyFailed(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      const success = fallbackCopy(textToCopy);
      if (success) {
        setCopyFailed(false);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return true;
      }
      console.error(err);
      setCopyFailed(true);
      setTimeout(() => setCopyFailed(false), 2400);
      return false;
    }
  };

  const openChannel = async (url, shouldCopy = false) => {
    if (shouldCopy) {
      await copyMessage();
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openWhatsApp = async () => {
    const latestMessage = getLatestComposedMessage();
    const freshMessage = addFreshnessMarker(latestMessage);
    const whatsappLink = `https://api.whatsapp.com/send?phone=447576420200&text=${encodeURIComponent(
      freshMessage
    )}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    copyMessage(latestMessage);
  };

  const openEmail = () => {
    const latestMessage = getLatestComposedMessage();
    const freshMessage = addFreshnessMarker(latestMessage);
    const emailLink = `mailto:info@stayaura.com?subject=${encodeURIComponent(
      "StayAura Chatbot Enquiry"
    )}&body=${encodeURIComponent(freshMessage)}`;
    window.open(emailLink, "_blank", "noopener,noreferrer");
    copyMessage(latestMessage);
  };

  return (
    <div className={`chatbot-widget ${open ? "open" : ""}`}>
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-head">
            <h4>Chat With StayAura</h4>
            <button
              className="chatbot-close"
              type="button"
              aria-label="Close chat widget"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <p className="chatbot-subtext">
            Add your message, then choose where you want to send it.
          </p>

          <div className="chatbot-form">
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              ref={messageRef}
              rows={3}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="chatbot-actions">
            <button
              type="button"
              className="chatbot-btn whatsapp"
              onClick={openWhatsApp}
            >
              <i className="fa-brands fa-whatsapp" />
              WhatsApp
            </button>
            <button
              type="button"
              className="chatbot-btn email"
              onClick={openEmail}
            >
              <i className="fa-solid fa-envelope" />
              Email
            </button>
            <button
              type="button"
              className="chatbot-btn facebook"
              onClick={() =>
                openChannel(
                  "https://www.facebook.com/share/1GYZq8xG1n/?mibextid=wwXIfr"
                  ,
                  true
                )
              }
            >
              <i className="fa-brands fa-facebook-f" />
              Facebook
            </button>
            <button
              type="button"
              className="chatbot-btn instagram"
              onClick={() =>
                openChannel(
                  "https://www.instagram.com/stay.aura.ltd?igsh=MTR4cjVzcmVjYjBqcQ%3D%3D&utm_source=qr",
                  true
                )
              }
            >
              <i className="fa-brands fa-instagram" />
              Instagram
            </button>
          </div>

          {copied && (
            <p className="chatbot-copy-hint">
              Message copied. Paste it into your social chat.
            </p>
          )}
          {copyFailed && (
            <p className="chatbot-copy-hint error">
              Could not auto-copy. Please copy your message manually.
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        className="chatbot-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat widget"
      >
        <i className="fa-solid fa-comment-dots" />
      </button>
    </div>
  );
};

export default ChatbotWidget;
