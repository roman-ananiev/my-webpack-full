import  ReactDOM from 'react-dom'
import './styles/styles.css'
import './styles/sass.sass'
import Person from "@models/Person";


const u = new Person("Bill");
ReactDOM.render(
        u.sayName(),
    document.getElementById('root')
);
