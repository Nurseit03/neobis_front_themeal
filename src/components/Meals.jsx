import { Link } from "react-router-dom"

const Meals = ({ id, img, title, area, category }) => {

  return (
    <Link to={id}>
      <div className="meal">
        <img src={img} alt={title} />
        <div>
          <h3 className="h3">{title}</h3>
          <p className="meal__info">{category} | {area}</p>
        </div>
      </div>
    </Link>
  )
}

export default Meals;