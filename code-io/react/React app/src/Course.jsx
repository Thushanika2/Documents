// import propTypes from "prop-types";

function Course(props) {
  // if (props.show == true) {
    return (
     props.name && <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <span>{props.rating}</span>
      </div>
    );
  // } else {
  //   return <div className="card">Course not available</div>;
  // }
}

// Course.defultProps = {
//   name: "Course",
//   price: "10000 rs.",
//   image: Dwarkdhish,
//   rating: "5",
// };

// Course.propTypes = {
//   name: propTypes.string,
//   rating: propTypes.number,
//   show: propTypes.bool,
// };
export default Course;
