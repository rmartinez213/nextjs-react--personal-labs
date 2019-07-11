import Layout from '../Components/Layout'
import Prices from '../Components/Prices'
import fetch from 'node-fetch'
import apiEndpoint from '../api/api'

const Index = (props) => (
    <Layout>
        <div className='container'>
            <h1>Menu</h1>
        </div>

        <div style={{textAlign: 'center'}}>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async function(){
    const res = await fetch
    (apiEndpoint);
    const data = await res.json();

    return {
        bpi: data.bpi
    };
}

export default Index