import React, { Component } from 'react';

class ListaCadastroComponente extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cadastros: []
        }
    }

    /*componentDidMount(){
        CadastroService.getCadastros().then((res) => {
            this.setState({cadastros: res.data});
        });
    } */

    render() {
        return (
            <div>
                <h2 className="text-center"> Usuários cadastrados </h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>E-mail</th>
                                <th>Idade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cadastros.map(
                                    cadastro =>
                                    <tr key = {cadastro.id}>
                                        <td> {cadastro.pNome} </td>
                                        <td> {cadastro.sNome} </td>
                                        <td> {cadastro.email} </td>
                                        <td> {cadastro.idade} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        );
    }
}

export default ListaCadastroComponente;