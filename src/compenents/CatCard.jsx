import React, { useEffect, useState } from 'react';
import { increment } from "../store/counter/counterSlice";
import { useDispatch,  } from 'react-redux';

export default function CatCard({ imgSrc, name, description, origin,id}) {
  const dispatch = useDispatch();
  const  [likes, setLikes] = useState(0);


   useEffect(() => {
    const savedLikes = localStorage.getItem(`likes_${id}`);
    if (savedLikes) {
      setLikes(Number(savedLikes)); 
    }
  }, [id]);

  const handleLike = () => {
    dispatch(increment()); 
    const newLikes = likes + 1;
    setLikes(newLikes); 
    localStorage.setItem(`likes_${id}`, newLikes);
  };

  return (
    <div className="col-sm mb-3 ">
      <div className="card" style={{ width: '100%', height: 'auto' }}>
        <img src={imgSrc} className="card-img-top img-fluid rounded " style={{ width: '100%', height: '350px' }} alt="..." />
        <div className="card-body">
          <h5 className="card-title" >{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{origin}</p>
          <button onClick={handleLike} className="btn btn-primary">Beğen</button>
          <span className="ms-2 float-end">Beğeni Sayısı: {likes}</span>
        </div>
      </div>
    </div>
  );
}