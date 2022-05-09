import React from "react";
import {schools} from "../../constants/globalConstants"
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: null,
            loading: false,
            name: "Augusta"
         }
         console.log("heyyyy, constructor")
    }

    // Mounting === constructor method

    // Update === 
    // componentWillMount() -- depreciated
    // componentDidMount, 
    // componentDidUpdate, 
    // shouldComponentUpdate,
    // componentWillUnmount,
    // getDerivedStateFromProps, --- *
    // getSnapshowBeforeUpdate --- *

    componentDidUpdate (prevProps) {
      //typically it is good to run a check to compare the props;

      // if(this.props.url !== prevProps.url) {
      //   this.updateUrl(this.props.url);
      // }
    }
    componentWillMount(){
      
    }

    componentWillUnmount (){
      window.removeEventListener("resize",this.handleResize)
    }

    componentDidMount() {
      this.setState({loading: true})
        fetch('https://api.github.com/users/allindeveloper')
        .then(response => response.json())
        .then((data)=>{
            console.log("user details", data)
            this.setState({
              userDetails: data,
              loading: false
            })
        })
        .catch(()=>{
          this.setState({
            userDetails: null,
            loading: false
          })
        })
    }

    // High Overview of React Lifecycle events
    // 1. Mounting === The birth of the component
    // 2. Update === The Growth of the component.. data, state, props changes
    // 3. Unmount == The death of the component
  
    updateName = ()=>{
      this.setState({
        name:"Oluwafisayo"
      })
    }
    render() {

    return (
        <div>
            <h1>Github User </h1>
            {/* Conditional Rendering */}
            <h1>{this.state.loading && "Loading"}</h1>
            <h2>Custom Name: {this.state.name}</h2>
            <div>
              <p>Name: {this.state.userDetails?.name ?? "--"}</p>
              <p>Bio: {this.state.userDetails?.bio ?? "--"}</p>
            </div>

            <button onClick={this.updateName}>Click me</button>

        </div>
    )
  }
}

export default Home;
