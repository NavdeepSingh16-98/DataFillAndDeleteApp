import React,{Component} from 'react'
import axios from 'axios'


class Api extends Component{
    state = {
        data:[],
    }
    componentDidMount(){
       // const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        axios.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*').then(result =>{
            console.log(result);
            this.setState({
                data: result.data
            })
        })



        
    }
    render(){
        return(
<>
{
    this.state.data.map((data1,index) =>{
        
      return  <h1 key={index}>{data1}</h1>
    })
}
</>
        )
    }

}
export default Api