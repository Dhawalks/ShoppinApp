import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isopen:boolean = false;
  @HostListener('click') toggleOpen(){
    this.isopen = !this.isopen;
  }
  constructor() { }

}
