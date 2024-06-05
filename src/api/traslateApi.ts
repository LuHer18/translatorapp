import axios from "axios";

export const tralateApi = async (text:string, fromLenguage: string, toLenguage: string) => {
    
    const url = import.meta.env.VITE_URL_API;
    
    try {
      const response = await axios.post(url, null, {
        params: {
          auth_key: import.meta.env.VITE_API_KEY,
          text: text,
          source_lang: fromLenguage,
          target_lang: toLenguage
        }
      });
      
      const data = response.data.translations[0].text;
      return data
      console.log(response.data)
    } catch (error) {
      console.error('Error al traducir el texto:', error);
    }
  };