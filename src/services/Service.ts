import axios from "axios";


//configurando o axios para preparar o front para fazer as requisições
const api = axios.create({
  baseURL: 'https://blogdothiagofaccipieri.onrender.com/'
})


//método post para cadastrar o usuário
//recebe 3 parametros, o primeiro é o caminho, que vai ser adicionado após o ....com/ da baseURL
//o segundo é os dados que vão ser enviados para o back
//o terceiro é uma função
export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const buscar = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}