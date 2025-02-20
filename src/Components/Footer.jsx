function Footer() {
  return (
    <div className="footer">
      <div className="Contacts">
        <h2>Contactos</h2>
        <div className="telefonos">
          <p>809-000-9988</p>
          <p>809-000-9988</p>
        </div>
        <div className="mails-web">
          <p>debra.holt@example.com</p>
          <p>www.RecargaYa.com.do</p>
        </div>
      </div>
      <div className="Social-media">
        <h3>Recarga-Ya</h3>
        <div className="social-icon">
          <img className="social-media-icon" src="src/assets/instagram.png" alt="facebook" />
          <img className="social-media-icon" src="src/assets/facebook.png" alt="facebook" />
          <img className="social-media-icon" src="src/assets/youtube.png" alt="facebook" />
          <img className="social-media-icon" src="src/assets/tiktok.png" alt="facebook" />
          <div className="social-icons">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer