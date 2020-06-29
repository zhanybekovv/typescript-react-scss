import React from 'react';
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
        
        <div className="d-flex mb-4 border border-dark flex-column align-items-center" style={{height: props.height, width: props.width}}>
          {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg}/> : null}
          <div className="d-flex w-100 align-items-center justify-content-center bg-danger" style={{color: "white", height: "100%"}}>
            {props.footer}
          </div>
          {info ? <div>{info}</div> : null}
        </div> : 
        <div className="d-flex mb-4 border border-dark" style={{height: props.height, width: props.width}}>
        {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg}/> : null}
          <div className="pt-1">
            <div className="">{props.title}</div>
            {props.hr ? <div style={{ borderTop: "2px solid red"}}></div> : null}
          </div>
          {info ? <div className="pt-3 pl-4">{info}</div> : null}
        </div>
        }
        
      </div>
  );
}

export default Card;
