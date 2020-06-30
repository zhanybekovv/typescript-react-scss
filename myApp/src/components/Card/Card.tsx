import React from "react";
import "./Card.css";

export type Info = {
  title?: string;
  logo?: any;
  adress?: string;
  zipcode?: string;
  email?: string;
  hr?: boolean;
  name?: string;
  phone?: string;
  height?: string;
  width?: string;
  footer?: string;
  heightImg?: string;
  widthImg?: string;
};
const Card: React.FC<Info> = (props) => {
  const info = (
    <p>
      {props.name} <br />
      {props.email} <br /> {props.phone} <br /> {props.adress} <br />{" "}
      {props.zipcode}{" "}
    </p>
  );

  return (
    <div>
      {props.footer ? (
        <div
          className="d-flex mb-4 border border-light flex-column align-items-center rounded cards"
          style={{ height: props.height, width: props.width }}
        >
          {props.logo && (
            <img
              src={props.logo}
              width={props.widthImg}
              height={props.heightImg}
              className="img"
            />
          )}
          <div className="d-flex w-100 align-items-center justify-content-center bg-danger footer">
            {props.footer}
          </div>
          {info && <div>{info}</div>}
        </div>
      ) : (
        <div
          className="d-flex mb-4 border border-light rounded cards"
          style={{ height: props.height, width: props.width }}
        >
          {props.logo && (
            <img
              src={props.logo}
              width={props.widthImg}
              height={props.heightImg}
              className="img"
            />
          )}
          {props.hr ? (
            <div className="pt-2 w-100 pr-2 text-danger">
              {props.title}
              <div className="cardLine"></div>
            </div>
          ) : (
            <div className="pt-1">{props.title}</div>
          )}
          {info && <div className="pt-3 pl-1">{info}</div>}
        </div>
      )}
    </div>
  );
};

export default Card;
