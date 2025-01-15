
 

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content />
       
      <Total total = {[exercises1,exercises2,exercises3]} />
    </div>
  )
}


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = () => {
  return (
     <>
        <Part course = 'Fundamentals of React' part = 'part 1' />
        <Part course = 'Using props to pass data' part = 'part 2' />
        <Part course = 'State of a component' part = 'part 3' />
     </>
  )
}

const Total = (props) => {
  var sum1 = 0;
  for(let i = 0 ; i < props.total.length ; i++){
     sum1 += props.total[i];
  }
  return (
    <p>Number of exercises {sum1}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.course} {props.part}</p>
  )
}


export default App;


 



