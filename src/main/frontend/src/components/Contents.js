import '../assets/css/style.scss'
import Header from './Header'
import {Button, Container, Row, Col} from 'react-bootstrap';

function Contents(){

    return(

        <Container className='contentCon'>
            <Row className='contentRow'>
                <iframe className='contentsTop' width="560" height="315" src="https://www.youtube.com/embed/yWn78GW1Btk?si=yIx2tyPomU80IMDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="content">
                    <div className="title"><h1>Lamborghini Revuelto</h1></div>
                    <div className="subTitle"><h2>under a new light</h2></div>
                </div>
                <div className="mainContent">
                    <div className='colContent'>
                        <div className="mainSubCont">
                            <div className='innerContent'>
                                <div className="innerText">
                                    <h1 className='colHone'>Bugatti</h1>
                                    <p className='colP'>feel free to talk about Cars</p>    
                                </div>
                                <div className="imgContent">
                                    <img className='mainImg' src="./img/buga.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mainSubCont">
                            <div className='innerContent'>
                                <div className="imgContent">
                                    <img className='mainImg' src="./img/rolls.png" alt="" />
                                </div>
                                <div className="innerText">
                                    <h1 className='colHone'>Rolls Royce</h1>
                                    <p className='colP'>feel free to talk about Cars</p>    
                                </div>
                            </div>
                        </div>
                        <div className="mainSubCont">
                            <div className='innerContent'>
                                <div className="innerText">
                                    <h1 className='colHone'>Lamborghini</h1>
                                    <p className='colP'>feel free to talk about Cars</p>    
                                </div>
                                <div className="imgContent">
                                    <img className='mainImg' src="./img/lam.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mainSubCont">
                            <div className='innerContent'>
                                <div className="imgContent">
                                    <img className='mainImg' src="./img/ferra2.png" alt="" />
                                </div>
                                <div className="innerText">
                                    <h1 className='colHone'>Ferrari</h1>
                                    <p className='colP'>feel free to talk about Cars</p>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>

    )

}

export default Contents