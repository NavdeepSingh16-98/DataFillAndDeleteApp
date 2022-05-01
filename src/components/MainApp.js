import React,{Component} from 'react'
import Table from './Table'
import Form from './Form.js'
import Api from './Api'

class MainApp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            characters : [
                {name: 'Charlie',
              job:'Janitor'},
              {
                name: 'Charlie',
                job: 'Janitor',
              },
              {
                name: 'Mac',
                job: 'Bouncer',
              },
              {
                name: 'Dee',
                job: 'Aspring actress',
              },
              {
                name: 'Dennis',
                job: 'Bartender',
              },
              ]
             
        }
    }

    removeCharacter = (index) =>{
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character,i) =>{
                return i != index
            })
        })
    }

    handleSubmit = (character) =>{
        this.setState({
            characters:[...this.state.characters, character]
        })
    }
    
    render(){
const {characters} = this.state
    return(
        <div>
            <Table characters={characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit}/>
            {/* <Api /> */}
        </div>
    )}
}
export default MainApp