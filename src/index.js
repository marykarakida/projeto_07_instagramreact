import ReactDom from "react-dom";
import Navbar from './componentes/Navbar';
import Corpo from './componentes/Corpo';
import FundoMobile from './componentes/FundoMobile';

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    );
}

const app = App();
ReactDom.render(app, document.querySelector(".root"));