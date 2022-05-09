import React from "react";
import {schools} from "../../constants/globalConstants"
class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schools : schools ,
            counter: 78
         }
         console.log("heyyyy, constructor")
    }

    showSchools = () =>{
        let domElems = []
        for(let i in schools){
            domElems.push(<li key={i}>{schools[i].name}</li>)
        }
        return domElems;
    }
        render() {

    return (
        <div>
            <h1>List of Schools</h1>
            <h1>Area Count {this.state.counter}</h1>

            {/* <ul>
                {showSchools()}
            </ul> */}
            <ul>
                {
                    schools.map((item,index)=>(
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>

        </div>
    )
  }
}

export default Settings;
