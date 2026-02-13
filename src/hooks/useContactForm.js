import { useState } from "react";

export function useContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function validateAndSubmit() {
    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !topic.trim() || !message.trim()) {
      setError("Wszystkie pola są wymagane.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Podaj poprawny adres e-mail.");
      return;
    }

    setSuccess("Dziękujemy! Twoja wiadomość została zapisana.");

    setName("");
    setEmail("");
    setTopic("");
    setMessage("");
  }

  return {
    name,
    email,
    topic,
    message,
    setName,
    setEmail,
    setTopic,
    setMessage,
    error,
    success,
    validateAndSubmit,
  };
}
