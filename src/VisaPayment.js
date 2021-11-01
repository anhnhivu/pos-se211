import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import style from './App.css'

const VisaPayment = (props) => {

    console.log(props.price.TotalPrice);

    return (
        <div className="tab-pane fade show active"> 
            <div className="tab-single"> 
                <form className="form-card">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group" > 
                                <label className="form-control-placeholder p-0" htmlFor="number">CardNumber</label>
                                <input type="text" className="form-control p-0" id="number" required />  
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group"> 
                                <label className="form-control-placeholder p-0" htmlFor="name">Cardholder'sName</label>
                                <input type="text" className="form-control p-0" id="name" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-12">
                            <div className="form-group">
                                <label className="form-control-placeholder p-0" htmlFor="sdate">StartDate</label>
                                <input type="text" className="form-control p-0" id="sdate" required /> 
                    
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="form-group"> 
                                <label className="form-control-placeholder p-0" htmlFor="expdate">ExpirationDate</label> 
                                <input type="text" className="form-control p-0" id="expdate" required />
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="form-group">     
                                <label className="form-control-placeholder p-0" htmlFor="passw">CVV</label> 
                                <input type="password" className="form-control p-0" id="passw" required />
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
                    <div className="row mb-2">
                        <div className="col-sm-12"> 
                            <button type="button" className="btn btn-primary btn-block" >
                                Pay 
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VisaPayment;