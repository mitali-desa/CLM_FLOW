import { LightningElement } from 'lwc';

export default class Catalog extends LightningElement {
    isStandalone;
    
    handleNext(){
      //  alert(type);
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
      getProductType(event){
        this.isStandalone = true
        console.log('this is standalone' + this.isStandalone)
        const screenEvent = CustomEvent('standalone',{
            standalone : this.isStandalone 
            
         })
    
         this.dispatchEvent(screenEvent)
         this.handleNext()

    }
}