const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </>
  );
};

const Total = (props) => {
  const totalExercises = props.parts.reduce((total, part) => {
    total += part.exercises;
    return total;
  }, 0);

  return (
    <p>
      <strong>total of {totalExercises} exercises</strong>
    </p>
  );
};

const Course = (props) => {
  const course = props.course;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;