import React, {useState} from "react";
import Questions from "./Questions.js"



const Test = () => {
    const[ques,setQues] = useState(1);

    const[option,setOption] = useState(0);

    const[solution,setSolution] = useState(<div></div>);

    const[disableok,setDisableok] = useState(true);

    const[disable,setDisable] = useState(true);

    const[filter,setFilter] = useState([{
      "id" : 0,
        "Question" : "A/An __________ assessment is one which measures what it is intended to measure",
        "Option1" : "Valid",
        "Option2" : "Unvalid",
        "Option3" : "Reliable",
        "Option4" : "Unreliable",
        "Answer" : 1
  }]);

    const handleQues = () => {

      setSolution(<div></div>)

      setQues(ques+1);

      console.log(ques)

        const getData = () => {
            fetch("/question.json").then((response) => {
              return response.json();
            }).then((data) => {
                
              setFilter(data.filter((value) => {
                if(value.id === ques){
                  return true;
                }
                return false;
              }))
              
            })
        }

        getData();

        setDisable(true);
    }

    const handleOk = () => {

      if(option == filter[0].Answer){

        setSolution(<div><h4>Solution :-</h4><p>Your Answer is <span className="text-success">Right</span> the correct option is : {filter[0].Answer}</p></div>)
      }

      if(option != filter[0].Answer){

        setSolution(<div><h4>Solution :-</h4><p>Your Answer is <span className="text-danger">Wrong</span> the correct option is : {filter[0].Answer}</p></div>)
      }


      setDisable(false);
    }

    const handleOption = (e) => {
      setOption(e.target.value)
      setDisableok(false)
  }

  return (
    <div className="container-fluid my-5">
      <div className="row ">
        <div className="col-sm-9 mx-auto text-black shadow-lg p-3 bg-light">
          <h1 className="text-center">Test</h1>
          <div className="row my-5">
            <div className="col-9 mx-auto">
                <Questions handleQues={handleQues} ques={ques} arr = {filter} handleOk={handleOk} disable = {disable} handleOption = {handleOption} ok={disableok} solution = {solution}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
