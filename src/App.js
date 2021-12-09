import React,{useState,useEffect} from "react";
import Test from "./Test.js";
import Instruction from "./Instruction"

const App = () => {
    const [count,setCount] = useState(0);

    const handleClick1 = () => {
      setCount(1)
    }
    const handleClick2 = () => {
      setCount(2)
    }

    if(count == 1){
      return <Test />
    }

    else if(count == 2){
      return <Instruction />
    }

    else { return (
      <div className="container-fluid my-5">
        <div className="row ">
          <div className="col-sm-9 mx-auto text-black shadow-lg p-3 bg-light">
            <h1 className="text-center">Questionnaire</h1>
            <div className="row my-5">
              <div className="col-4 mx-auto">
              <div class="card width">
                <div class="card-body">
                  <h5 class="card-title">Test</h5>
                  <p class="card-text">
                    Some really simple questions to test your General Knowledge.
                    If you are apperaring for the first time please see Instructions. 
                  </p>
                  <button class="btn btn-primary" onClick={handleClick1}>Test</button>
                </div>
              </div>
              </div>
              <div className="col-4 mx-auto">
              <div class="card width">
                <div class="card-body">
                  <h5 class="card-title">Instructions For Test</h5>
                  <p class="card-text">
                    Some quick instructions for appearing the test.
                    Please go through the instructions very carefully so that you don't make any mistake in test.
                  </p>
                  <button class="btn btn-primary" onClick={handleClick2}>
                    Instructions
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      
    );
  }
}



export default App;