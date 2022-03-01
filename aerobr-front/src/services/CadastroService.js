import axios from 'axios'; 

const CADASTRO_API_BASE_URL = "http://localhost:3000/";

class CadastroService {

    getCadastros(){
        return axios.get(CADASTRO_API_BASE_URL);
    }
}

export default new CadastroService()