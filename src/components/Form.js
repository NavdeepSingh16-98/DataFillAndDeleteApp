import React,{Component} from 'react'

class Form extends Component{
    initialState = {
        name:'',
        job:''
    }
    state = this.initialState

    handleChange = (event) =>{
        const {name,value} = event.target

        this.setState({
            [name]:value,
          //  job:job
        })
        console.log(this.state);
    }
    submitForm = (e) =>{
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }
    render(){
        const {name,job} = this.state
        return(
            <div>
                <form>
                    <label htmlFor="name">Name

                    </label>
                    <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                    <label htmlFor="job">Job

                    </label>
                    <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />

                    <button type="submit" onClick={this.submitForm} value="Submit" >Submit </button>
                </form>
            </div>

        )
    }
}

export default Form