import { LightningElement } from 'lwc';

export default class TrailPage extends LightningElement {
    isOpportunity=true;
    isAgreement;
    isCatalog;
    isProductConfig;
    isCart;
    isSummary;
    isReview;
    isSign;


    main=1;

    handlePlay(){
        if(this.isOpportunity===true){
            this.isOpportunity = false
            this.isAgreement=true
            this.main=2
        }
        else if(this.isAgreement===true){
            this.isAgreement = false
            this.isCatalog=true
            this.main=3
        }
        else if(this.isCatalog===true){
            this.isCatalog = false
            this.isProductConfig=true
            this.main=4
        }
        else if(this.isProductConfig===true){
            this.isProductConfig = false
            this.isCart=true
            this.main=5
        }
        else if(this.isCart===true){
            this.isCart = false
            this.isSummary=true
            this.main=6
        }

        else if(this.isSummary===true){
            this.isSummary = false
            this.isReview=true
            this.main=7
        }
        else if(this.isReview===true){
            this.isReview = false
            this.isSign=true
            this.main=8
        }
        
    }
    handleSkip(){
        if(this.isSummary===true){
            this.isSummary=false
            this.isSign=true
            this.main = 8
        }
    }

    handleBack(){
        if(this.isAgreement ===true){
            this.isAgreement = false
            this.isOpportunity = true
            this.main =1
        }
        else if(this.isCatalog===true){
            this.isCatalog=false
            this.isAgreement = true
            this.main= 2

        }
        else if(this.isProductConfig===true){
           
            this.isProductConfig = false
            this.isCatalog=true
            this.main=3
        }
        else if(this.isCart===true){
            this.isCart = false
            this.isProductConfig=true
            this.main=4
        }

        else if(this.isSummary===true){
            this.isSummary = false
            this.isCart=true
            this.main=5
        }
        else if(this.isReview===true){
            this.isReview = false
            this.isSummary=true
            this.main=6
        }
        else if(this.isSign ===true){
            this.isSign = false
            this.isReview = true
            this.main = 7
        }
    }

}