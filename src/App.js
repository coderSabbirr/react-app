import logo from './logo.svg';
import './App.css';
const singer ={
  name:'Atik Aslam',
  job:'singer'
}
const singer2 ={
  name:'oysea',
  job:'singer'
}
const singerStle = {
  backgroundColor:'red',
  color:'white'
}

function App() {
  return (
    <div className="App">
       {/* <Person name="Rubel" job='Singer'></Person>
       <Person name="Oysee" job="female Singer"></Person>
       <Person name="Mustafizur" job="cricketer"></Person>
       <Friend></Friend> */}
       <Address  phone="01452777452" address="cumilla"></Address>
       <Address phone="018628777" address="Dhaka"></Address>
       <Address phone="01457877465" address="Rangpur"></Address>
       <Address phone="0147856877" address="Rajsahi"></Address>
     </div>

  );
}

// function Person (props) {
//   console.log(props);
//   const person = {
//     backgroundColor:'skyblue',
//     border:'2px solid blue',
//     borderRadius:'20px',
//     padding:'10px',
//     margin:'10px'
//   }
//   return (
// <div style={person}>
//     <h1>Name: {props.name}</h1>
//     <h4>Profation: {props.job}</h4>
//   </div>
//   );
// }

function Address(contect) {
  return (
    <div className="person ">
      <h3>Phone:{contect.phone}</h3>
      <h3> Address: {contect.address}</h3>
    </div>
  );
}

// function Friend () {
//   return(
// <div style={{backgroundColor:'blueviolet', color:'white',padding:'10px',border:'2px solid red',margin:'20px',borderRadius:'10px'}}>
//   <h3>Phone: {pepole.phone}</h3>
//   <h3>address: {pepole.address}</h3>
// </div>
//   );
// }


export default App;
