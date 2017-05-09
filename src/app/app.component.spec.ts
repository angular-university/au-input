import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AuFaInputComponent} from "./lib/au-fa-input/au-fa-input.component";
import {InputRefDirective} from "./lib/common/input-ref.directive";
import {DebugElement} from '@angular/core';
import {By}              from '@angular/platform-browser';
import {AuMdInputComponent} from "./lib/au-md-input/au-md-input.component";

describe('AppComponent', () => {

    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        emailFaField: DebugElement,
        identityMdField: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, AuFaInputComponent, InputRefDirective, AuMdInputComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailFaField = el.query(By.css('#email-field'));
        identityMdField = el.query(By.css('#identity-field'));

        fixture.detectChanges();

    });


    it('should create the test application', async(() => {
        expect(component).toBeTruthy();
    }));


    it('should create a font awesome email input', async(() => {
        expect(emailFaField).toBeTruthy();

    }));

    it('should include the correct email icon inside the email input', async(() => {
        expect(emailFaField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should have projected the correct test input inside the email field', async(() => {
        expect(emailFaField.query(By.css('input.test-class'))).toBeTruthy();
    }));


    it('should create a material design identity input', async(() => {
        expect(identityMdField).toBeTruthy();
    }));


    it('should include the correct icon inside the identity input', async(() => {
        expect(identityMdField.query(By.css('i.md-icon')).nativeElement.textContent).toEqual("perm_identity");
    }));

    it('should have projected the correct test input inside the identity field', async(() => {
        expect(identityMdField.query(By.css('input.test-class'))).toBeTruthy();
    }));



});
