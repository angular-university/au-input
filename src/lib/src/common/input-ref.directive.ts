import {Directive, HostListener} from '@angular/core';

@Directive({
    selector: '[auInput]'
})
export class InputRefDirective {

    focus = false;

    @HostListener('focus')
    onFocus() {
        this.focus = true;
    }

    @HostListener('blur')
    onBlur() {
        this.focus = false;
    }

}
