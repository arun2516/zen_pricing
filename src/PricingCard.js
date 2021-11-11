import React from"react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

function PricingCard({plan,price,period,features}){
return(
    
   <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{plan}</h5>
            <h6 class="card-price text-center">{price}<span class="period">{period}</span></h6>
            <hr></hr>
            {features.map((feat)=>{
    return(
        <ul class="fa-ul">
            {feat.acess?<li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>{feat.value1}</li>:<li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></span>{feat.value1}</li>}
        </ul>
    )
})}
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
)    
}


export default PricingCard