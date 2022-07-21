function Movie({id, title, imgUrl, genres, summary}){

  return(
    <div style={{marginRight:"2rem"}}>
      <img src={imgUrl} alt={id}></img>
      <h3>{title}</h3>
      <p>{typeof genres===typeof [] ? genres.join(', '):"no genre"}</p>
      <p>{summary}</p>
      </div>
  )
}

export default Movie