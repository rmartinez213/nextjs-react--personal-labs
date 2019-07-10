import NavBar from './NavBar'
import Head from 'next/head'
import '../css/style.css'

function MyImage() {
    return <img src="../static/TransparentLogo.png" alt="my image" />;
}

const props = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <NavBar/>

        <div className='Container'>
            {props.children}
            
            {/* <img src="../static/TransparentLogo.png" alt="my image" /> */}
        </div>
    </div>
);

export default props;