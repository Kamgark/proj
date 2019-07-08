import React, {Component} from 'react'

class Rumination extends Component{
    render(){
        return(
            <div className="content-1">
                <div className="inner-content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic It has survived not only five centuries, but also the </p>
                    <button type="button" className="btn">Show more...</button>
                </div>
                <div className="mid-content">
                    <div className="values">
                        <p>$100</p>
                        <p>$200</p>
                        <p>$300</p>
                        <p>$400</p>
                        <p>$500</p>
                        <p>$600</p>
                        <p>$700</p>
                        <p>$800</p>
                        <p>$900</p>
                        <p>$1000</p>
                    </div>
                    <input type="range"  min="1" max="10" className="slider"/>
                    
                    <div className="bottom-val">
                    <hr/>
                        <p>100 users</p>
                        <p>1000 users</p>
                        <p>10 000 users</p>
                        <p>100 000 users</p>
                    </div>
                </div>
                <button type="button" className="btn">ADD Order to Cart<br/><span>(Display cost from slider)</span></button>
            </div>
        )
    }
}
export default Rumination;