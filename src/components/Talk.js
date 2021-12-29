export default function Talk(props){
    return(
        <div>
            {/*<div>this: {props.my_date}</div>*/}
            <img className="img" src={props.img}></img>
            <br/>
            <a href={props.link}>{props.title}</a>
            <p>{props.speaker} </p>
            <hr/>
        </div>

    );
}