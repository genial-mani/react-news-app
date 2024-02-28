import React from 'react'
import defaultImage from "../assets/default.jpg"
import '../App.css'

const NewsItem = ({title, description, src, url}) => {

  const defaultDesc = (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );

  const handleImageError = (e)=>{
    e.target.src = defaultImage;
  };
  
  const dots = "...";

  return (
    <div className="card bg-transparent text-light mb-3 d-inline-block my-4 mx-4 px-1 py-1" style={{maxWidth:"300px"}}>
      <img src={src?src:defaultImage} onError={handleImageError} style={{height:"200px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,48).trim() + dots}</h5>
        {description ? (
        <p className="card-text">{description.slice(0, 90).trim() + dots}</p>
      ) : (
        <div>{defaultDesc}</div>
      )}
        <a href={url && url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem