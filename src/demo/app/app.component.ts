import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `

      <au-fa-input icon="envelope">
          <input type="email" name="email" placeholder="Email" autocomplete="off"
                 class="some-class" data-stripe="email">
      </au-fa-input>

      <au-fa-input id="password-field" icon="lock" >
          <input placeholder="Password" class="test-class">
      </au-fa-input>

      <au-fa-input  icon="cc-stripe">
          <input placeholder="Stripe">
      </au-fa-input>

      <au-fa-input icon="paypal">
          <input placeholder="Paypal">
      </au-fa-input>

      <au-md-input icon="search">
          <input type="email" name="email" placeholder="E-mail">
      </au-md-input>

      <au-md-input icon="perm_identity">
          <input name="identity" placeholder="Identity Number">
      </au-md-input>

      <au-md-input icon="receipt">
          <input name="receipt" placeholder="Receipt">
      </au-md-input>      
      
  `,
})
export class AppComponent {

  constructor() {


  }

}
