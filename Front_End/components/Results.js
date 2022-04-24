import React from 'react'
// import Thumbnail from "../components/Thumbnail";

function Results({ data }) {
  console.log("income request :", data);
  return (
    <div className="container columns-1 md:columns-3 mx-auto">
      {data.map((result, index) => (
        // <Thumbnail />
        <div key={index} className="p-2">
          <div>
            <img className="w-full aspect-video ..." src={`http://image.tmdb.org/t/p/w500${result.poster_path}`} />
            <div className="p-2">
            <div style={{ fontWeight:'bold' }}>{result.original_title || result.original_name}</div>
            <div>{result.overview}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Results