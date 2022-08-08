import axios from "axios";


const instancia = axios.create({
    baseURL: "https://api-site-hotel.herokuapp.com/"
})

export const getRooms = async () => {
    const response = await instancia.get("/quarto");
      const json = await response.data;
      console.log(json);
      return json;
}