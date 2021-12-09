import React,{Component}  from "react";

export default class Questions extends Component{
    
    render(){

        if(this.props.ques == 11){
            return <div className="my-auto">
                <h2>Thanks for giving the test</h2>
                <br/>
                <br/>
                <h3>Your Test is Over Kindly Reload the page to go onto home page</h3>
            </div>
        }

    return(
        <div>
            <h5>{this.props.arr[0].Question}</h5>
            <div className="row my-3">
                <div className="col-9 ml-3">
                <input type="radio" value = {1} name = "option" onChange = {this.props.handleOption}/><label>{this.props.arr[0].Option1}</label>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-9 ml-3">
                <input type="radio" value = {2} name = "option" onChange = {this.props.handleOption}/><label>{this.props.arr[0].Option2}</label>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-9 ml-3">
                <input type="radio" value = {3} name = "option" onChange = {this.props.handleOption}/><label>{this.props.arr[0].Option3}</label>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-9 ml-3">
                <input type="radio" value = {4} name = "option" onChange = {this.props.handleOption}/><label>{this.props.arr[0].Option4}</label>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-9 ml-3">
                {this.props.solution}
                </div>
            </div>
            
            
            <div className="row my-2">
                <div className="col-3 mx-auto">
                <button className="btn btn-danger" onClick = {this.props.handleOk} disabled = {this.props.ok}>Ok</button>
                </div>
                <div className="col-3 mx-auto">
                <button className="btn btn-danger" onClick={this.props.handleQues} disabled = {this.props.disable}>Next</button>
                </div>
            </div>
            
            
        </div>
        
    )
    }
}
