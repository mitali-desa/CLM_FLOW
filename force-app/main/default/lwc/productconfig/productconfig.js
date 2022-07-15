import { LightningElement,api } from 'lwc';

export default class Productconfig extends LightningElement {
    @api product;
    renderedCallback(){
        console.log('12213321313'+this.product)
    }
    handleNext(){
        const screenEvent = CustomEvent('nextscreen',{
            detail:'On next Screen'
            
         })
    
         this.dispatchEvent(screenEvent)
      }
      handleBack(){
        const screenEvent = CustomEvent('backscreen',{
            detail:'On back Screen'
            
         })
    
         this.dispatchEvent(screenEvent)
      }
}