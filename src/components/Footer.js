export default function Footer(){
    //getting year
    var date = new Date();
    var n = date.getFullYear();
    console.log(n);
    console.log(new Date());
    return(
        <footer>
            <p>&copy; {n} <a id="year"></a> | <a href="https://www.churchofjesuschrist.org/?lang=spa">Barrio West Columbia 2nd</a> |
                South Carolina </p>
        </footer>
    );
}