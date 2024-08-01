import axios from "axios";
import { FromLenguage, Lenguage } from "../hooks/type";


export const tralateApi = async (text: string, fromLenguage: FromLenguage | null, toLenguage: Lenguage, setResut: (payload: string)=> void) => {
    
    const url = import.meta.env.VITE_URL_API;
    const apiKey = import.meta.env.VITE_API_KEY
    
    try {
      const {data} = await axios.post(url, null, {
        params: {
          auth_key:apiKey,
          text: text,
          source_lang: fromLenguage,
          target_lang: toLenguage
        }
      });
      setResut(data.translations[0].text);
      
    } catch (error) {
      console.error('Error al traducir el texto:', error);
    }
  };