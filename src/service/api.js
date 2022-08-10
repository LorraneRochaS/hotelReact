import axios from "axios";


const instancia = axios.create({
    baseURL: "https://api-site-hotel.herokuapp.com/"
})


// função assíncrona para receber todos os quartos

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

//funções para pegar dados do usuário e adicionar novo usário na API

export const getUserById = async () => {
    const response = await instancia.get('/hospedes/:id');
      const json = await response.data;
      console.log(json);
      return json;
}

export const postUser = async (guest) => {
    const response = await instancia.post('/hospedes', guest)
    const json = await response.data.hospedes;
    return json
};

//funções para adicionar reservas, editar e deletar na API
export const getBookings = async () => {
    const response = await instancia.get('/reserva')
    const json = await response.data.reserva;
    console.log(json)
    return json

}

//Problemas para pegar reserva por id (resolvido)
//Descobrir como substituir index 0 por parâmetro caso necessário, se vier vários resultados da API ao criar método get por id de hóspede
export const getBookingsById = async (id) => {
    const response = await instancia.get(`/reserva/${id}`)
    const json = await response.data.reserva;
    console.log(json)
    return [json]
}

export const getBookingByBookingId = async (id) => {
    const response = await instancia.get(`/reserva/reserva/${id}`)
    const json = await response.data.reserva;
    console.log(json)
    return [json]
}

export const postBooking = async (booking) => {
    const response = await instancia.post('/reserva', booking)
    const json = await response.data.reserva;
    return json
};

export const deleteBooking = async (id) => {
    const response = await instancia.delete(`/reserva/${id}`)
};

export const editBooking = async (id, body) => {
    const response = await instancia.patch(`/reserva/${id}`, body)
};