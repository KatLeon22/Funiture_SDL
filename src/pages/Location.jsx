import React from "react";
import "../styles/location.css"; // Asegúrate de crear este CSS

const content = {
  es: {
    title: "Ubicación",
    intro: "Encuéntranos en nuestra ubicación en San Francisco, California",
    address: "Dirección: San Francisco, California, Estados Unidos",
    phone: "Teléfono: +1 (415) 555-0123",
    email: "Email: contacto@muebleria.com",
  },
  en: {
    title: "Location",
    intro: "Find us at our location in San Francisco, California",
    address: "Address: San Francisco, California, United States",
    phone: "Phone: +1 (415) 555-0123",
    email: "Email: contacto@muebleria.com",
  },
};

const Location = ({ userLang }) => {
  const text = content[userLang];

  return (
    <section className="location-section">
      <h2>{text.title}</h2>
      <p className="location-intro">{text.intro}</p>

      <div className="location-container">
        {/* Mapa de Google - San Francisco, California */}
        <iframe
          title="Furniture Store Location in San Francisco, California"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509038!2d-122.41941548468145!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0x10c86afec437c8c0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Información resumida */}
        <div className="location-info">
          <p>{text.address}</p>
          <p>{text.phone}</p>
          <p>{text.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
