import qr from './Images/sample_QR.png'
const MomoPayment= () => {
    
    return (
        <div class="tab-pane fade show active" >
            <div className="row">
                <div className="center-cropped col-12 form-group">
                    <p style={{'textAlign': 'center', 'marginTop':'10px'}}> Please Scan this QR Code</p>
                    <img src={qr} width="250px" height="250px" alt="..."  />    
                </div>
            </div>
        </div>
        
    );
}

export default MomoPayment;