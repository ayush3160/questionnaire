import React, { Component } from 'react'


export default class Instruction extends Component {
    render() {
        return (
            <div>
              <div className="container-fluid my-5">
      <div className="row ">
        <div className="col-sm-9 mx-auto text-black shadow-lg p-3 bg-light">
          <h1 className="text-center">Instructions</h1>
          <div className="row my-5">
            <div className="col-9 mx-auto">
                <label><h4>1.</h4>    </label>  <img src="/Screenshot 2021-12-09 001827.png" width = "300px"/><label>Click on the Test button to start</label>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-9 mx-auto">
                <label><h4>2.</h4>    </label>  <img src="/Screenshot 2021-12-09 003236.png" width = "400px"/><label>First click on the option that you think is right.
                    Then Click on the ok button to confirm the answer and see the solution and to move to next question click on next button. 
                </label>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-9 mx-auto">
                <label><h4>3.</h4> To go to home page reload the page.</label>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-9 mx-auto">
                <p>Thanks for reading the instructions now you can attempt the test.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
        )
    }
}
