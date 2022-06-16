import React from 'react'
import telecargas from '../helpers/telecargas'
import { TelecargasList } from './TelecargasList'

class BlackListDetail extends React.Component{
    state = {
        listRecords: [],
        loading: false
    };

    reloadList = async() => {
        const response = await telecargas.get('/banking/find-all-black-list-versions?pagenum=1&resultsperpage=10&idcompany=1', {});
        this.setState({listRecords: response.data.versions});
    }

    componentDidMount() {
        this.reloadList();
    }

    render(){
        return (
            <div>
                <h2>Ultimas 10 versiones de la Lista Negra</h2>
                <TelecargasList registros={this.state.listRecords} />
            </div>
        )
    }
}

export default BlackListDetail;