import React from 'react';
import { Card,  CardText, CardTitle } from 'reactstrap';
import image from '../images/images.png'


const CompanyDetail = (props) => {
    return (
        <div>
            <Card style={{borderRadius:'15%',borderColor:'rgb(255, 255, 255)',backgroundColor:'rgb(255, 255, 255)'}}>
                <CardText style={{fontSize:'50px',color:'#35a653',fontWeight:'bold'}}>MoneyView</CardText>
                    <CardText style={{fontSize:'30px',textAlign:'center',margin:'auto',paddingLeft:'10px',color:'black',display:'flex', justifyContent:'center', alignContent:'center'}}>
                        We believe that access to financial services is a basic right of all individuals.
                    </CardText>
            </Card>
        </div>
    );
};

export default CompanyDetail;