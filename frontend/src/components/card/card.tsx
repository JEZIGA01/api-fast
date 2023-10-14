import './card.css'

interface CardProps{
  id: number,
  name: string,
  email: string,
  img: string
}

export function Card({id,name,email,img} : CardProps){
  return(
    <div className="card"> 
    <h1>{id}</h1>
    <img src={img}/>
      <h2>{name}</h2>
      <p><b>{email}</b></p>
    </div>
  )
}