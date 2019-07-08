import React, {Component} from 'react'

class Collaboration extends Component{
    render(){
        return(
            <div className="content">
                <div className="form">
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="Password"/>
                    <button className="btn" type="button">sign in google</button>
                    <button className="btn" type="button">sign in facebook</button>
                </div>
            </div>
        )
    }
}
export default Collaboration;