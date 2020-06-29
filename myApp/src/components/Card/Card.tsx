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
        <div className="d-flex mb-4 border border-light flex-column align-items-center rounded bg-gray" style={{height: props.height, width: props.width, boxShadow: "0 0 4px rgba(0,0,0,0.5)"}}>
          {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg} style={{borderRadius: "inherit", objectFit: "cover"}}/> : null}
          <div className="d-flex w-100 align-items-center justify-content-center bg-danger" style={{color: "white", height: "100%"}}>
            {props.footer}
          </div>
          {info ? <div>{info}</div> : null}
        </div> : 
        <div className="d-flex mb-4 border border-light rounded" style={{height: props.height, width: props.width, backgroundColor: "rgb(230, 230, 230)", boxShadow: "0 0 4px rgba(0,0,0,0.5)"}}>
        {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg} style={{borderRadius: "inherit", objectFit: "cover"}}/> : null}
        {props.hr? <div className="pt-1 w-100" style={{paddingRight: "12px"}}>
            {props.title}
            {props.hr ? <div style={{ borderTop: "2px solid red"}}></div> : null}
          </div>
          :
          <div className="pt-1" style={{paddingRight: ""}}>
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
