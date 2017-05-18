import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `

      <au-fa-input icon="envelope">
          <input auInput type="email" name="email" placeholder="Email" autocomplete="off"
                 class="some-class" data-stripe="email">
      </au-fa-input>

      <au-fa-input id="password-field" icon="lock" >
          <input auInput placeholder="Password" class="test-class">
      </au-fa-input>

      <au-fa-input  icon="cc-stripe">
          <input auInput placeholder="Stripe">
      </au-fa-input>

      <au-fa-input icon="paypal">
          <input auInput placeholder="Paypal">
      </au-fa-input>

      <au-md-input icon="search">
          <input auInput type="email" name="email" placeholder="E-mail">
      </au-md-input>

      <au-md-input icon="perm_identity">
          <input auInput name="identity" placeholder="Identity Number">
      </au-md-input>

      <au-md-input icon="receipt">
          <input auInput name="receipt" placeholder="Receipt">
      </au-md-input>      
      
  `,
})
export class AppComponent {

  constructor() {


  }

}
