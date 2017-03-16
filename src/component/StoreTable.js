import React, { Component } from 'react'

class StoreTable extends Component {
    render () {
        console.log(this.props);
        var datareceived=this.props.count.map(function(key,index){
            return<tr className="row" key={index}><td>{key.email}</td><td >{key.pass}</td></tr>
        })
        return (
            <div>
                <table className="table">
                    <tr className="row">
                        <td>Email</td>
                        <td>password</td>
                    </tr>
                    <tbody>
                      {datareceived}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StoreTable