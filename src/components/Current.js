import moment from "moment";
import speechBox from './SpeechBox';
export default function Current(){

    //empty object xDDDD
    let current = null;
    speechBox.sort((current, next) => {
        return current.my_date - next.my_date;
    });
    for (let i = 0; i < speechBox.length; i++) {
        const my_date = speechBox[i].my_date;
        const link = speechBox[i].link;
        const image = speechBox[i].img;
        const title = speechBox[i].title;
        const speaker = speechBox[i].speaker;
        //printing format
        const format_date = `${moment(my_date).format('MMM')} ${moment(my_date).format('D')}, ${moment(my_date).format('Y')}`;
        //Creating container
        let node = document.getElementById("nodeContainer");
        let list = document.createElement("section");
        list.className = "boxes";
        node.appendChild(list);

        let firstNode = document.createElement("h3");
        list.appendChild(firstNode);
        firstNode.textContent = format_date;
        list.appendChild(firstNode);

        ///----- Image here ------/

        let img = document.createElement("img")
        img.setAttribute('src', image);
        list.appendChild(img);

        let secondNode = document.createElement("a");
        secondNode.setAttribute('href', link);
        secondNode.setAttribute('target', "_blank");
        secondNode.textContent = " | " + title + " | ";
        list.appendChild(secondNode);

        let thirdNode = document.createElement("p");
        thirdNode.textContent = speaker;
        thirdNode.setAttribute('class', 'italic')
        if (current === null && new Date() < my_date) {
            current = speechBox[i];
            current.date = format_date;
            list.style.backgroundColor = '#fff';
        }

        list.appendChild(thirdNode);

    }

    //creating current week
    let currentWeek = document.getElementById("currentWeek");

    let currentDate = document.createElement("h3");
    currentWeek.appendChild(currentDate);
    currentDate.textContent = current.date;

    let currentImg = document.createElement("img")
    currentImg.setAttribute('src', current.img);
    currentWeek.appendChild(currentImg);

    let currentSpeech = document.createElement("a");
    currentSpeech.setAttribute('href', current.link);
    currentSpeech.setAttribute('target', "_blank");
    currentSpeech.textContent = " | " + current.title + "  | ";
    currentWeek.appendChild(currentSpeech);

    let currentSpeaker = document.createElement("p");
    currentSpeaker.textContent = current.speaker;
    currentSpeaker.setAttribute('class', 'italic')
    currentWeek.appendChild(currentSpeaker);



    return(
        <div className="box" id="currentWeek">
            <h2>Esta semana:{}</h2>
        </div>
    );
}