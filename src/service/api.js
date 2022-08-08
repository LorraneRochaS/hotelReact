import axios from "axios";


const instancia = axios.create({
    baseURL: "https://api-site-hotel.herokuapp.com/"
})


// função asíncrona para receber todos os quartos

export const getRooms = async () => {
    const response = await instancia.get('/quarto');
      const json = await response.data;
      console.log(json);
      return json;
}

// função assíncrona para receber quartos por quantidade de hóspedes (precisa adicionar método get na API por categoria)

export const getRoomsByCapacity = async (capacity) => {
    const response = await instancia.get(`/quarto/${capacity}`)
    const json = await response.data;
    return json;
}