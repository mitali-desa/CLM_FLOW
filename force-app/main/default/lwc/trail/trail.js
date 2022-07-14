import { LightningElement,api } from 'lwc';

export default class Trail extends LightningElement {
   isOpportunity = true ;
    isSummary = false
    isSign = false;
    main; 
    prefix;
 
    @api get name() {
        return this.main;
    }
    set name(value) {
        this.setAttribute('name', value);
        this.main = value;
        this.handleValueChange(value);
    }

    renderedCallback(){
        const element = this.template.querySelector("[name=test]");
        this.prefix = String(element.id)
        
        let len = this.prefix.length
        this.prefix = this.prefix.substring(5,len)
        console.log(this.prefix)

    }

    //a method called in setter
    handleValueChange(value) {
        console.log(value);
        let targetId = 'pat-'+this.main+this.prefix;
        console.log(targetId)
        let len = targetId.length;
        let mainTarId = this.main;
        let targatPrefix = targetId.substring(5, len);
        var selectedPath = this.template.querySelector("[id=" +targetId+ "]");

        if(selectedPath){
            this.template.querySelector("[id=" +targetId+ "]").className='slds-is-active slds-path__item';
        }
            for(let i = 0; i < mainTarId; i++){
                let selectedPath = this.template.querySelector("[id=pat-" +i+ targatPrefix+"]");
                if(selectedPath){
                    this.template.querySelector("[id=pat-" +i+ targatPrefix+"]").className='slds-is-complete slds-path__item';
                }
            }
            for(let i = mainTarId; i < 9; i++){
                if(i != mainTarId){
                    let selectedPath = this.template.querySelector("[id=pat-" +i+ targatPrefix+"]");
                    if(selectedPath){
                        this.template.querySelector("[id=pat-" +i+targatPrefix+ "]").className='slds-is-incomplete slds-path__item';
                    }
                }
            }

    }



    
   

    // pathHandler(event)
    // {
    //     let targetId = 'pat-3-42';
    //     console.log(targetId)
    //     let len = targetId.length;
    //     let mainTarId = this.main;
    //     let targatPrefix = targetId.substring(5, len);
    //     var selectedPath = this.template.querySelector("[id=" +targetId+ "]");

    //     if(selectedPath){
    //         this.template.querySelector("[id=" +targetId+ "]").className='slds-is-active slds-path__item';
    //     }
    //         for(let i = 0; i < mainTarId; i++){
    //             let selectedPath = this.template.querySelector("[id=pat-" +i+ targatPrefix+"]");
    //             if(selectedPath){
    //                 this.template.querySelector("[id=pat-" +i+ targatPrefix+"]").className='slds-is-complete slds-path__item';
    //             }
    //         }
    //         for(let i = mainTarId; i < 9; i++){
    //             if(i != mainTarId){
    //                 let selectedPath = this.template.querySelector("[id=pat-" +i+ targatPrefix+"]");
    //                 if(selectedPath){
    //                     this.template.querySelector("[id=pat-" +i+targatPrefix+ "]").className='slds-is-incomplete slds-path__item';
    //                 }
    //             }
    //         }
    // }
}