import React,{Component} from 'react'

const TableHeader = () =>{
    return(
        <>
         <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
        </>
    )
}

const TableBody = (props) =>{

    // const rows = props.charactersData.map((row,index) =>{
    //     return(
    //         <tr key={index}>
    //             <td>{row.name}</td>
    //             <td>{row.job}</td>
    //         </tr>
    //     )
    // })
    console.log(props);
    return <tbody>{
        props.charactersData.map((row,index) =>{
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td><button className="btn btn-danger" onClick={() => props.removeCharacter(index)}>Delete</button></td>
                </tr>
            )
        })}</tbody>
//     return(
        
//         <>
//    <tbody>
// <tr>
//     <td>Charlie</td>
//     <td>Janitor</td>
// </tr>
//                 </tbody>
//         </>
//     )
}

class Table extends Component{
    render(){
const {characters,removeCharacter} = this.props
        return(
            <table>
               <TableHeader />

             <TableBody charactersData ={characters} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table