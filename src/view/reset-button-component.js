import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createCleanUpButton({active}){
    return active==false?(`
      <button id="clear_button" type="submit" disabled>X Очистить</button>
      `):(`
        <button id="clear_button" type="submit">X Очистить</button>
        `);
}

export default class CleanUpButtonComponent extends AbstractComponent{
    #handleClick=null;
    active=false;
  #clickHandler=(evt)=>{
    evt.preventDefault();
    this.#handleClick();
  }

  constructor({onClick,active}){
    super();
    //("Feels gooood")
    this.#handleClick=onClick;
    this.active=active
    this.element.addEventListener('click', this.#clickHandler);
  }
    get template(){
        return createCleanUpButton({active:this.active});
    }
    
   
    // get element(){
    //     if(!this.element){
    //         this.element=createElement(this.getTemplate());
    //     }
    //     return this.element;
    // }
    removeElement(){
        this.element=null;
    }
}