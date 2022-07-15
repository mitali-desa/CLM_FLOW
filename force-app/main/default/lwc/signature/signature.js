import { LightningElement } from 'lwc';

export default class Signature extends LightningElement {
    handleBack(){
        console.log('Testing in sign function')
        const screenEvent = CustomEvent('backscreen',{
            detail:'On back Screen'
            
         })
        
         this.dispatchEvent(screenEvent)
      }
}