import Footer from "./Footer";
import speechBox from './SpeechBox';
import Talk from "./Talk";


export default function Container(){
    const speechElement = speechBox.map(speech => {
        return <Talk title={speech.title} speaker={speech.speaker}  img={speech.img} my_date={speech.my_date} link={speech.link}/>
    })

    return(
        <div className="container">
            {speechElement}
            <div id="nodeContainer">
            </div>
            <Footer/>
        </div>
    );
}