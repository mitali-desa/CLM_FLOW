import { LightningElement } from 'lwc';

export default class Opportunity extends LightningElement {
    handleNext(){

        const screenEvent = CustomEvent('nextscreen',{

        detail:'On next Screen'

        })



        this.dispatchEvent(screenEvent)

        }
}