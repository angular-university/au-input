import {browser, element, by} from 'protractor';

describe('QuickStart Lib E2E Tests', function () {

    beforeEach(() => browser.get(''));

    afterEach(() => {
        browser.manage().logs().get('browser').then((browserLog: any[]) => {
            expect(browserLog).toEqual([]);
        });
    });

    it('should display lib', () => {
        expect(element(by.css('h2')).getText()).toEqual('Hello Angular Library');
    });

    it('should include the correct email icon inside the email input', () => {
        expect(element(by.css('#email-field i.icon.fa.fa-envelope'))).toBeTruthy();
    });

    it('should include the correct email icon inside the email input', () => {
        expect(element(by.css('#email-field i.icon.fa.fa-envelope'))).toBeTruthy();
    });

    it('should have the test input inside the email field', () => {
        expect(element(by.css('#email-field input.test-class'))).toBeTruthy();
    });

    it('should create a material design identity input', () => {
        expect(element(by.css('#email-field'))).toBeTruthy();
    });

    it('should include the correct icon inside the identity input', () => {
        expect(element(by.css('#email-field i.md-icon'))).toBeTruthy();
    });

    it('should have the test input inside the identity field', () => {
        expect(element(by.css('#email-field input.test-class'))).toBeTruthy();
    });


});
