import { LightningElement } from 'lwc';

export default class Catalog extends LightningElement {
    isStandalone;
    handleType(event){

        console.log(event.target.id)
        let type = String(event.target.id)
        if(type.includes('standalone')){
            this.isStandalone=true

        }
        else{
            this.isStandalone=false
        }

        const testEvent = CustomEvent('test',{
            detail:{
                standalone:this.isStandalone
            }        
         })
    
         this.dispatchEvent(testEvent)

         this.handleNext()
        
    }

    handleNext(){
        const screenEvent = CustomEvent('nextscreen',{
            detail:'On next Screen',
            
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