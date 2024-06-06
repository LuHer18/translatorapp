import axios from "axios";

type DataAxio = {
  detected_source_language: string;
  text: string;
}

export const tralateApi = async (text: string, fromLenguage: string | null, toLenguage: string, setResut: (payload: string)=> void) => {
    
    const url = 'https://api-free.deepl.com/v2/translate';
    
    try {
      const {data} = await axios.post(url, null, {
        params: {
          auth_key: '353cad76-7a59-41bd-87da-08485fded393:fx',
          text: text,
          source_lang: fromLenguage,
          target_lang: toLenguage
        }
      });
      console.log(data.translations[0].text)
      setResut(data.translations[0].text);
      
    } catch (error) {
      console.error('Error al traducir el texto:', error);
    }
  };