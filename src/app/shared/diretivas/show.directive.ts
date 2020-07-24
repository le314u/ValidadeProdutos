import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[show]'
})
export class ShowDirective {
  
  show = true;

  @HostListener('click') onClick(){
    alert(this.show)
    this.show = ! this.show;
    this.switchShow()
  }

  @HostBinding('style.display') display: string;

  switchShow(){
    if(this.show){
      this.display=''
    }else{
      this.display='none'
    }
  }
  
  constructor() {
    this.switchShow()
  }
}
