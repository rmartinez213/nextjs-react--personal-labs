import React, {Component} from 'react'

class Prices extends Component{
    state = {
        currency: 'USD'
    }

    usdRate(rate){
        var newString = rate.replace(",", "");
        return parseFloat(newString).toFixed(2)
    }

    render(){
        var list = '';

        if(this.state.currency === 'USD'){
            list = (
            <li className='list-group-item'>
                Currency is in {this.props.bpi.USD.description}:
                <span className='badge badge-primary'>{this.props.bpi.USD.code}</span>
                {this.usdRate(this.props.bpi.USD.rate)}
            </li>);
        }

        else if(this.state.currency === 'GBP'){
            list = (
            <li className='list-group-item'>
                Currency is in {this.props.bpi.GBP.description}:
                <span className='badge badge-primary'>{this.props.bpi.GBP.code}</span>
                {this.usdRate(this.props.bpi.GBP.rate)}
            </li>);
        }

        else if(this.state.currency === 'EUR'){
            list = (
            <li className='list-group-item'>
                Currency is in {this.props.bpi.EUR.description}:
                <span className='badge badge-primary'>{this.props.bpi.EUR.code}</span>
                {this.usdRate(this.props.bpi.EUR.rate)}
            </li>);
        }

        return (
            <div>
                <ul className='list-group'>
                    {list}
                    <select className='form-control' onChange={e => this.setState({currency: e.target.value})}>
                        <option value='USD'>USD</option>
                        <option value='GBP'>GBP</option>
                        <option value='EUR'>EUR</option>
                    </select>
                </ul>
            </div>
        )
    }
}

export default Prices