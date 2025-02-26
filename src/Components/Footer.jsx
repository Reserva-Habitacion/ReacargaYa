import { useTranslation } from "react-i18next";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";

function Footer() {
  const { t } = useTranslation(); 

  return (
    <div className="footer">
      <div className="Contacts">
        <h2>{t("contacts")}</h2> 
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
        <h3>{t("recarga_ya")}</h3>
        <div className="social-icon">
          <img className="social-media-icon" src={instagram} alt="Instagram" />
          <img className="social-media-icon" src={facebook} alt="Facebook" />
          <img className="social-media-icon" src={youtube} alt="YouTube" />
          <img className="social-media-icon" src={tiktok} alt="TikTok" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
