import Course from "./Course";
import Dwarkdhish from "./assets/Dwarkdhish.jpg";

function CourseList() {
  const courses = [
    {
      id: 1,
      name: "HTML",
      price: 2000,
      image: Dwarkdhish,
      rating: 5,
    },
    {
      id: 2,
      name: "CSS",
      price: 5000,
      image: Dwarkdhish,
      rating: 5,
    },
    {
      id: 3,
      name: "JS",
      price: 10000,
      image: Dwarkdhish,
      rating: 5,
    },
  ];

courses.sort((x,y) => y.price -x.price)
const vfmCourses = courses.filter((course) => course.price<5000)
  const coursesList = vfmCourses.map((course, index) => (
    <Course
    // key={course.id}
      key={index}
      name={course.name}
      image={course.image}
      price={course.price}
      rating={course.rating}
    />
  ));
  return <>{coursesList}</>;
}

export default CourseList;
