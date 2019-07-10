import Layout from '../Components/Layout'
import Prices from '../Components/Prices'

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
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    };
}

export default Index