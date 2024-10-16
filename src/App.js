//Chat Gpt corrected 



import './App.css';
import React, { useState } from "react";

function App() {
  // Making state of our application
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic
  const calBmi = (e) => {
    e.preventDefault();
    if (weight === '' || height === '') {
      alert('Please enter a valid Weight and Height');
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));
      if (bmiValue < 25) {
        setMessage('you are underweight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('you are a healthy weight person');
      } else {
        setMessage('you are overweight');
      }
    }
  };

  // Reload
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={calBmi}>
        <div>
          <label>Weight(ibs)</label>
          <input
            type="text"
            placeholder="Enter the weight value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height(in)</label>
          <input
            type="text"
            placeholder="Enter the Height value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn1" type="submit">Submit</button>
          <button className="btn2" type="button" onClick={reload}>Reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;






//Orginal Code



// // import './App.css';
// import React,{useState} from "react";


// function App() {
//   // Making state of  our application

//   const [weight,setWeight]  = useState(0);
//   const [height,setHeight]  = useState(0);
//   const [bmi,setBmi]  = useState('');
//   const [message,setMessage]  = useState('');

//   //Logic
//   let calBmi = (e) =>{
//     event.preventDefault();
//     if(weight===0|| height===0){
//       alert('Please enter a valid Weight and Height')
//     }
//     else{
//       let bmi = (weight/(height*height)*703)
//       setBmi(bmi.toFixed(1))
//       //

//       if(bmi<25){
//         setMessage('you are underweight')
//       } 
//       else if(bmi>=25 && bmi <30){
//         setMessage('you are a helthy weight person')
//       }
//       else{
//         setMessage('you are over weight')
//       }
//     }

//   }

//   //reload

//   let reload = () =>{
//     window.location.reload()
//   }




//   return (
//     <div className="coontainer">
//       <h1>BMI Calculator</h1>
//       <form onSubmit={calBmi}>
//         <div>
//           <label>Weight(ibs)</label>
//           <input type="text" placeholder="Enter the weight value" value={weight} onChange={(e) => setWeight(e.target.value)}/>
//         </div>
//         <div>
//           <label>Height(in)</label>
//           <input type="text" placeholder="Enter the Height value" value={height} onChange={(e) => setHeight(e.target.value)}/>
//         </div>
//         <div>
//           <button className="btn1" type="submit">Submit</button>
//           <button className="btn2" type="submit" onClick={reload}>Reload</button>
//         </div>
//         <div className="center">
//           <h3>Your BMI is :{bmi}</h3>
//           <p>{message}</p>

//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;