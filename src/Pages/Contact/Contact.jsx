import "./Contact.css";

import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const currentTime = new Date().toLocaleString();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      title: formData.title,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: currentTime,
    };

    emailjs
      .send(
        "service_x6dcmlf",
        "template_9hho7fp",
        templateParams,
        "-d33nIVXt5rqbUoFr"
      )
      .then(
        () => {
          setStatus(
            "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto."
          );
          setFormData({ title: "", name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
          console.log(error);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="contact-us-container">
        <h2>Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
