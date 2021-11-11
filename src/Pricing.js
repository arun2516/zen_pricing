import React from "react";
import PricingCard from "./PricingCard";
import './App.css';

class Pricing extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datas:[
                {
                  plan:"free",
                  price:"$0",
                  period:"/month",
                  features:[
                      {
                          acess:true,
                          value1:"Single User",
                        
                      }, {
                        acess:true,
                        value1:"5GB Storage",
                      
                    }, {
                        acess:true,
                        value1:"Unlimited Public Projects",
                      
                    }, {
                        acess:true,
                        value1:"Community Access",
                      
                    }, {
                        acess:false,
                        value1:"Unlimited Private Projects",
                      
                    }, {
                        acess:false,
                        value1:"Dedicated Phone Supported",
                      
                    }, {
                        acess:false,
                        value1:"Free Subdomain",
                      
                    }, {
                        acess:false,
                        value1:"Monthly Status Report",
                      
                    },
                      
                  ]
                },{
                    plan:"PLUS",
                    price:"$9",
                    period:"/month",
                    features:[
                        {
                            acess:true,
                            value1:"5 Users",
                          
                        }, {
                          acess:true,
                          value1:"50GB Storage",
                        
                      }, {
                          acess:true,
                          value1:"Unlimited Public Projects",
                        
                      }, {
                          acess:true,
                          value1:"Community Access",
                        
                      }, {
                          acess:true,
                          value1:"Unlimited Private Projects",
                        
                      }, {
                          acess:true,
                          value1:"Dedicated Phone Supported",
                        
                      }, {
                          acess:true,
                          value1:"Free Subdomain",
                        
                      }, {
                          acess:false,
                          value1:"Monthly Status Report",
                        
                      },
                        
                    ]
                  },{
                    plan:"PRO",
                    price:"$49",
                    period:"/month",
                    features:[
                        {
                            acess:true,
                            value1:"Unlimited Users",
                          
                        }, {
                          acess:true,
                          value1:"150GB Storage",
                        
                      }, {
                          acess:true,
                          value1:"Unlimited Public Projects",
                        
                      }, {
                          acess:true,
                          value1:"Community Access",
                        
                      }, {
                          acess:true,
                          value1:"Unlimited Private Projects",
                        
                      }, {
                          acess:true,
                          value1:"Dedicated Phone Supported",
                        
                      }, {
                          acess:true,
                          value1:"Unlimited Free Subdomain",
                        
                      }, {
                          acess:true,
                          value1:"Monthly Status Report",
                        
                      },
                        
                    ]
                  }
            ]
        }
    }

    render(){
        return(
            <section class="pricing py-5">
            <div class="container">
           <div class="row">
            {this.state.datas.map((data)=>{return <PricingCard {...data}/>})}
            </div>
            </div>
            </section>
            
        )
    }
}


export default Pricing