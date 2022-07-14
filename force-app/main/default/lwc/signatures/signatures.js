import { LightningElement } from 'lwc';

export default class Signatures extends LightningElement {
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