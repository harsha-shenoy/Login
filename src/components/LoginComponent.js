import React from 'react'
import '../css/Login.css'
import CompanyDetail from './CompnayDetailComponent'
import InputField from './InputFieldComponent'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="container ">
                    <div className="row">
                        <div className="col-6 box  ">
                            <CompanyDetail />
                        </div>
                        <div className="col-6 box">
                            <div className="container">
                                <InputField />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;