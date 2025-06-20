import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            welcome: "Welcome to our application",
            select_country: "Choose your country!",
            selected_card: "You selected:",
            language: "Language",
            contacts: "Contacts",
            recarga_ya: "Recarga-Ya",
            "phone_number": "Phone Number",
            "enter_phone": "Enter your phone number",
            "delete": "Delete",
            "delete_all": "Delete All",
            "data plans": "Data plans",
            "minute recharges": "Minute recharges",
            "make_payment": "Make Payment",
            "ServiciosClaro": "Claro Services",
            "introduce_bill": "Insert the bill",
            "insert_more": "(You can insert more than one bill)",
            "recharge": "Recharge",
            "amount": "Amount",
            "thank_you": "Thank you for using",
            "wait_receipt": "Wait for your receipt",
            "Número telefónico": "Phone Number",
            "Ingrese su número telefónico": "Enter your phone number",
        },
    },
    es: {
        translation: {
            welcome: "Bienvenido a nuestra aplicación",
            select_country: "¡Elige tu país!",
            selected_card: "Seleccionaste:",
            language: "Idioma",
            contacts: "Contactos",
            recarga_ya: "Recarga-Ya",
            contacts: "Contactos",
            "phone_number": "Número telefónico",
            "enter_phone": "Ingrese su número telefónico",
            "delete": "Borrar",
            "delete_all": "Borrar Todo",
            "data plans": "Planes de datos",
            "minute recharges": "Recargas de minutos",
            "make_payment": "Realizar pago",
            "ServiciosClaro": "Servicios Claro",
            "introduce_bill": "Introduzca el billete",
            "insert_more": "(Puede introducir más de un billete)",
            "recharge": "Recarga",
            "amount": "Monto",
            "thank_you": "Gracias por utilizar",
            "wait_receipt": "Espere su recibo",
            "Número telefónico": "Número telefónico",
            "Ingrese su número telefónico": "Ingrese su número telefónico",
        },
    },
    ht: {
        translation: {
            welcome: "Byenvini nan aplikasyon nou an",
            select_country: "Chwazi peyi ou!",
            selected_card: "Ou chwazi:",
            language: "Lang",
            contacts: "Kontak",
            recarga_ya: "Rechaje-Kounya",
            "phone_number": "Nimewo telefòn",
            "enter_phone": "Antre nimewo telefòn ou",
            "delete": "Efase",
            "delete_all": "Efase tout",
            "data plans": "Plan yo",
            "minute recharges": "Rachaj minit",
            "make_payment": "Fè peman",
            "ServiciosClaro": "Sèvis Claro",
            "introduce_bill": "Mete bilèt la",
            "insert_more": "(Ou ka mete plis pase yon bilèt)",
            "recharge": "Rachaj",
            "amount": "Montan",
            "thank_you": "Mèsi paske ou itilize",
            "wait_receipt": "Tann resi ou",
            "Número telefónico": "Nimewo telefòn",
            "Ingrese su número telefónico": "Antre nimewo telefòn ou",
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "es",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
