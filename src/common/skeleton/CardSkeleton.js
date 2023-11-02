import React from 'react'


import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards).fill(0).map((_, index) =>  {
    return (
      <div className="card-item skeleton" key={index}>
        <div
          style={{ position: "relative", width: "100%", paddingTop: "150%" }}
        >
          <Skeleton
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "98%",
            }}
          />
        </div>
        <div className="card-bottom skeleton">
          <div className="card-info skeleton">
            <h4>
              <Skeleton />
            </h4>
            <p>
              <Skeleton />
            </p>
          </div>
        </div>
      </div>
    );
}) 
}

export default CardSkeleton