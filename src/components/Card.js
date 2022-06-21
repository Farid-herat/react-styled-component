import { StyledCard } from "./styles/Card.style"





function Card({item:{id,title,image,body}}) {
  return (
    <StyledCard layout={id% 2 === 0 && 'row-reverse'}>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  )
}

export default Card
