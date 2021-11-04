import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import './App.css'
import { Link } from 'react-router-dom';
const VisaPayment = (props) => {

    const inputStyle = {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #fff !important',
        borderRadius: '0',
        outline: '0',
        color: '#fff',
        
    }
    return (
        <div className="tab-pane fade show active" > 
            <div className="tab-single"> 
                <form className="form-card">
                    <div className="row">
                        <div className="col-12" >
                            <div className="form-group"  >   
                                <input type="text"  className="form-control p-0" style={inputStyle} id="number" required />  
                                <label className="form-control-placeholder p-0"  htmlFor="number">CardNumber</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group"> 
                                <input type="text" className="form-control p-0" style={inputStyle}  id="name" required />
                                <label className="form-control-placeholder p-0" htmlFor="name">Cardholder'sName</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-12">
                            <div className="form-group"> 
                                <input type="text" className="form-control p-0" style={inputStyle} id="sdate" required /> 
                                <label className="form-control-placeholder p-0" htmlFor="sdate">StartDate</label>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="form-group"> 
                                <input type="text" className="form-control p-0" style={inputStyle} id="expdate" required />
                                <label className="form-control-placeholder p-0" htmlFor="expdate">ExpirationDate</label> 
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="form-group"> 
                                <input type="password" className="form-control p-0" style={inputStyle} id="passw" required />
                                <label className="form-control-placeholder p-0" htmlFor="passw">CVV</label>
                            </div>
                        </div>
                    </div>
                    <div className="row lrow mt-4 mb-3">
                        <div className="col-sm-8 col-12">
                            <h4>Grand Total:</h4>
                        </div>
                        <div id="price" className="col-sm-4 col-12">
                            <h4>$ {props.price}</h4>
                        </div>
                    </div>
                    <div className=" row mb-2">        
                        <button type="button" className="btn btn-sm btn-danger rounded-pill"  >
                        <Link to={{
                                    pathname:'/Thankyou'
                        }} style={{color: 'inherit', textDecoration: 'none'}}>Pay</Link> 
                        </button>   
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VisaPayment;