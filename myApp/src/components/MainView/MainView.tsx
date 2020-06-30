import React, {useState} from 'react';
import Card from '../Card/Card'
import logo from "../../static/bookmarkl.png";
import './MainView.css';



const MainView:React.FC = () => {
    const [cards, setCards] = useState([{title:"Мои счета"},{title:"Шаблоны операций"},{title:"Мои счета"},{title:"Шаблоны операций"},{title:"Мои счета"},{title:"Шаблоны операций"}]);
    return (
          <div className="mt-4 row">
              {cards.map( (card, i) => 
                <div className="cardLoc" key={i}>
                  <Card 
                    logo={logo} 
                    title={card.title} 
                    hr={true} 
                    height="27rem" 
                    width="100%" 
                    heightImg="50px" 
                    widthImg="50px"
                  />
                </div> )}
          </div>
          )
}

export default MainView;
