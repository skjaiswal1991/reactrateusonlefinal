import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Seo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            seo:props.property,
         }

         
    }
    render() { 
        const { seo } = this.state;
        console.log(seo);
        return ( 

                    <Helmet>    
                        
                                <title>Free Business Directory, Review Site, Local Listing Sites | RateUsOnline</title>
                                <meta name="description" content="shdfjsafvjh fsj fsagfjgaskjfgskafjsgfs gafgsfgsjhf js gfjsagfsagjf"/>
                                <meta name="robots" content="index,follow"/>
                                <meta property="og:locale" content="en_US" />
                                <meta property="og:type" content="website" />
                                <meta property="og:title" content="Free Business Directory, Review Site, Local Listing Sites | RateUsOnline" />
                                <meta property="og:description" content="We are free local business listing sites in UK that is dedicated to endorse quality businesses, products or services of various niches. Sign up today." />
                                <meta property="og:url" content="https://www.rateusonline.com/" />
                                <meta property="og:image" content="https://www.rateusonline.com/wp-content/uploads/2020/07/logo_.png" />
                                <meta property="og:image:secure_url" content="https://www.rateusonline.com/wp-content/uploads/2020/07/logo_.png" />
                                <meta property="og:image:width" content="697" />
                                <meta property="og:image:height" content="631" />
                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:description" content="We are free local business listing sites in UK that is dedicated to endorse quality businesses, products or services of various niches. Sign up today." />
                                <meta name="twitter:title" content="Free Business Directory, Review Site, Local Listing Sites | RateUsOnline" />
                                <meta name="twitter:image" content="https://www.rateusonline.com/wp-content/uploads/2020/07/logo_.png" />

                                   
                        
                    </Helmet>
         );
    }
}
 
export default Seo;