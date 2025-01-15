
 

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
      <Content content = {exercises1} part = {part1} />
      <Content content = {exercises2} part = {part2} />
      <Content content = {exercises3} part = {part3} />
      <Total total = {[exercises1,exercises2,exercises3]} />
    </div>
  )
}


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.part} {props.content}</p>
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
export default App;


 



