import React from 'react';
import "./Card.css"
export type Info={
  title?: string,
  logo?: any,
  adress?: string,
  zipcode?: string,
  email?: string,
  hr?: boolean,
  name? : string,
  phone? : string,
  height?: string,
  width?: string,
  footer?: string,
  heightImg?: string,
  widthImg? : string,
}
function Card(props:Info) {
const info = props.name ? ( <p>Name: {props.name} <br/> Email: {props.email} <br/> Phone: {props.phone} <br/> Adress: {props.adress} <br/> Zipcode: {props.zipcode} </p> ) : null;
  return (
    <div>
      {props.footer ? 
        <div className="d-flex mb-4 border border-light flex-column align-items-center rounded cards" style={{height: props.height, width: props.width}}>
          {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg} className="img"/> : null}
          <div className="d-flex w-100 align-items-center justify-content-center bg-danger footer" >
            {props.footer}
          </div>
          {info ? <div>{info}</div> : null}
        </div> : 
        <div className="d-flex mb-4 border border-light rounded cards" style={{height: props.height, width: props.width}}>
        {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg} className="img"/> : null}
        {props.hr ?
          <div className="pt-1 w-100 pr-2" >
            {props.title}
            {props.hr ? <div className="cardLine"></div> : null}
          </div>
          :
          <div className="pt-1">
            {props.title}
          </div>
        }
          {info ? <div className="pt-3 pl-4">{info}</div> : null}
        
          
        </div>
        }
        
      </div>
  );
}

export default Card;
