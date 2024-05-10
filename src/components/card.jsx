import { BiLogoDocker, BiLogoFigma } from "react-icons/bi";
const course = [
  {
    title: "CBCS paper code-204",
    total: "100",
    practical: "30",
    theory: "70",
    icon: <BiLogoDocker />,
  },
  {
    title: "CBCS paper code-304",
    total: "150",
    practical: "50",
    theory: "100",
    icon: <BiLogoFigma />,
  },
];
const Card = () => {
  return (
    <div className="card--container">
      {course.map((course, idx) =>{
        return (
          <div className="card" key={idx}>
            <div className="card--cover">{course.icon}</div>
            <div className="card--title">
              <h2>{course.title}</h2>
            </div>
          </div>
        );
      })
    }
    </div>
  );
};
export default Card;
