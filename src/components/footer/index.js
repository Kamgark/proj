import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-6">
                    <div className="terms">
                        <a href="/">Terms of Service and Privacy Policy</a>
                        <p>Copyright @ somewebsite.tld</p>
                    </div>
                </div>
                <div className="col-sm-6 display-icons">
                        <div className="">
                            <i className="fa fa-comment"></i>
                        </div>
                        <div className="">
                            <i className="fa fa-search"></i>
                        </div>
                        <div className="">
                            <i className="fa fa-share-alt-square"></i>
                        </div>
                        <div className="">
                        <i className="fa fa-shopping-cart"></i>
                        </div>
                </div>
            </div>
        )
    }
}
export default Footer;