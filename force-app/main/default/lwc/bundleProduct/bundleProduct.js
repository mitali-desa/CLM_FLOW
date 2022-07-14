import { LightningElement } from 'lwc';

export default class BundleProduct extends LightningElement {
   
      onAttr(){
        var divblock = this.template.querySelector('[data-id="tab1"]');
        if(divblock){
            this.template.querySelector('[data-id="tab1"]').className='slds-tabs_default__item slds-is-active';
            this.template.querySelector('[data-id="tab2"]').className='slds-tabs_default__item';
            this.template.querySelector('[data-id="tab-default-1"]').className='slds-tabs_default__content slds-show';
            this.template.querySelector('[data-id="tab-default-2"]').className='slds-tabs_default__content slds-hide';
        }     
      }

      onOpt(event){
        var divblock = this.template.querySelector('[data-id="tab2"]');
        if(divblock){
            this.template.querySelector('[data-id="tab2"]').className='slds-tabs_default__item slds-is-active';
            this.template.querySelector('[data-id="tab1"]').className='slds-tabs_default__item';
            this.template.querySelector('[data-id="tab-default-2"]').className='slds-tabs_default__content slds-show';
            this.template.querySelector('[data-id="tab-default-1"]').className='slds-tabs_default__content slds-hide';
        }     
    }
}