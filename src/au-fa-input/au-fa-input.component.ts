import {Component, Input, ContentChild, AfterContentInit, HostBinding, ViewEncapsulation} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
    selector: 'au-fa-input',
    template: `

        <i class="icon fa" [ngClass]="classes"></i>
        
        <ng-content></ng-content>
        
    `,
    styleUrls: [
        "../common/common.css","../common/_default-theme.scss","_au-fa-input-red-theme.scss"
    ]
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
