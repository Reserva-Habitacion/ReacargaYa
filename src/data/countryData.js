import rdFlag from '../assets/rd.png';
import haitiFlag from '../assets/haiti.png';
import venezuelaFlag from '../assets/venezuela.png';
import digicel from '../assets/digicel.jpg';
import natcom from '../assets/natcom.png';
import movilnet from '../assets/movilnet.png';
import digitelNuevo from '../assets/digitelNuevo.jpg';
import cantvLogo from '../assets/cantv_logo.png';

const countryData = {
  "República Dominicana": {
    flag: rdFlag,
    cards: [
     
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png", nombre: "Altice" },
      { imagen: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png", nombre: "Orange" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg", nombre: "Claro" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png", nombre: "Altice" },
      { imagen: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png", nombre: "Orange" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg", nombre: "Claro" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png", nombre: "Altice" },
      { imagen: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png", nombre: "Orange" },
      { imagen: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png", nombre: "Orange" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg", nombre: "Claro" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png", nombre: "Altice" },
      { imagen: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png", nombre: "Orange" },
      { imagen: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png", nombre: "Orange" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg", nombre: "Claro" },
      { imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png", nombre: "Altice" },
      { imagen: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png", nombre: "Orange" },
    ]
  },
  "Haití": {
    flag: haitiFlag,
    cards: [
      { imagen: digicel, nombre: "digicel" },
      { imagen: natcom, nombre: "Natcom" }
    ]
  },
  "Venezuela": {
    flag: venezuelaFlag,
    cards: [
      { imagen: movilnet, nombre: "Movilnet" },
      { imagen: digitelNuevo, nombre: "Digitel" },
      { imagen: cantvLogo, nombre: "CANTV" }
    ]
  }
};

export default countryData;
