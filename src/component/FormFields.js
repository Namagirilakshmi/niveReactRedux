import React, { Component } from 'react'

class FormFields extends Component {
    getValues(){
        var email=this.refs.email.value;
        var pass=this.refs.password.value;
        var repass=this.refs.password.value;
        this.props.actions.updatingValue(email,pass,repass); 
    }
    render () {
        return (
            <div>
                <form>
                   <div className="form-group row">
                     <label className="col-sm-2 form-control-label">Email</label>
                         <div className="col-sm-10">
                            <input type="email" className="form-control" placeholder="Email" ref="email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 form-control-label">Password</label>
                         <div className="col-sm-10">
                             <input type="password" className="form-control" placeholder="Password" ref="password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 form-control-label">Confirm Password</label>
                         <div className="col-sm-10">
                             <input type="password" className="form-control" placeholder="Re-enter Password" ref="confirm-password"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success" onClick={()=>{this.getValues()}}>submit</button>
                </form>    
            </div>
        )
    }
}

export default FormFields