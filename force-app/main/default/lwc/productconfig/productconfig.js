import { LightningElement } from 'lwc';

export default class Productconfig extends LightningElement {
   
      handleBack(){
        const screenEvent = CustomEvent('backscreen',{
            detail:'On back Screen'
            
         })
        
         this.dispatchEvent(screenEvent)
      }

     /* showBundle(){
            var divblock = this.template.querySelector('[data-id="bundleListItem"]');
            if(divblock){
                this.template.querySelector('[data-id="bundleListItem"]').className='slds-show';
                this.template.querySelector('[data-id="bundleList"]').className='slds-p-top_xx-large slds-hide';
            }     
      } */

     /*  handleBackBundle(){
        var divblock = this.template.querySelector('[data-id="bundleListItem"]');
        if(divblock){
            this.template.querySelector('[data-id="bundleList"]').className='slds-p-top_xx-large slds-show';
            this.template.querySelector('[data-id="bundleListItem"]').className='slds-hide';
        }   
      }*/
}