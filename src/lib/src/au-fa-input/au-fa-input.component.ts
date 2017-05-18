import {Component, Input, ContentChild, AfterContentInit, HostBinding} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";
import {commonCss} from "../common/common.css";
import {defaultThemeCss} from "../common/default-theme.css";

@Component({
    selector: 'au-fa-input',
    template: `

        <i class="icon fa" [ngClass]="classes"></i>
        
        <ng-content select="input"></ng-content>
        
    `,
    styles: [ commonCss, defaultThemeCss ]
})
export class AuFaInputComponent implements AfterContentInit {

    @Input()
    icon: string;

    @ContentChild(InputRefDirective)
    input: InputRefDirective;

    ngAfterContentInit() {
        if (!this.input) {
            console.error('the au-fa-input needs an input inside its content');
        }
    }

    @HostBinding('class.input-focus')
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }


    get classes() {

        const cssClasses = {};

        if (this.icon) {
            cssClasses['fa-' + this.icon] = true;
        }

        return cssClasses;
    }

}
