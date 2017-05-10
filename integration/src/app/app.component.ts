import { Component } from '@angular/core';


@Component({
  selector: 'integration-app',
  template: `

      <h2>Hello Angular Library</h2>

      <au-fa-input icon="envelope" id="email-field">
          <input type="email" name="email" placeholder="Email" autocomplete="off"
                 class="some-class" data-stripe="email">
      </au-fa-input>
      
      <au-md-input icon="perm_identity">
          <input name="identity" placeholder="Identity Number">
      </au-md-input>


  `,
})
export class AppComponent {

  constructor() {

  }
}
