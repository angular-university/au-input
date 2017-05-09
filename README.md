# Angular Icon Inputs 

This module contains a couple of Angular Input box components that allow to add an icon inside a text input, which helps to improve the user experience by better identifying common input fields like for example email, etc.

This small module contains only the minimal HTML and CSS necessary to implement this very common HTML pattern. 

The default theme of the input is designed to look just like a plain HTML input, including the focus blue border (tab and shift-tab are supported).

Any icon available on either the [Font Awesome](http://fontawesome.io) or the [Google Material Design](https://material.io/icons/) Icon libraries can be used.

### Features:

- The components have minimum styling and are themable 
- there is no need to include a component-specific external stylesheet, only the Font Awesome or Material icons stylesheets
- Compatible with AOT
- As the component takes a plain input and projects it, this means that by design the component supports all standard HTML input attributes, including custom attributes (data-), all the accessiblity properties, etc.
- This also means also that these components are Compatible with Angular Forms 

# Demo 
Here is what the icons look like on screen:

![Demo of au-input components](https://raw.githubusercontent.com/angular-university/au-input/master/images/icons-demo.png)


# Installation

This is how to install the components:

    npm install au-input

or 

    yarn add au-input

And on your application module:

    import {AuInputModule} from 'au-input';

    @NgModule({
      declarations: [ ...],
      imports: [
        BrowserModule,
        ....,
         AuInputModule
    ],
    })
    export class AppModule { }


# Using the Font Awesome Inputs

We will need to add first a version of Font Awesome to our page, for example:

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

Then we can use the Font Awesome Input like this:

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

The inputs receive an input property named `icon` that identifies which Font Awesome icon we want to apply. 

The value `envelope` will add the email icon by adding the CSS class `fa-envelope` to the icon, etc.

The input that you pass inside the component is just a plain HTML input that will be projected inside the component, so all the standard HTML properties of an input apply. 

There is no need to add anything special to the input, like a reference with a given name, add it a special CSS class, etc.  - any plain HTML will work.


# Using the Material Design Input

We will need to add first a version of the Google Material Design icons to our page, for example:

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

Then we can use the Material Design Input like this:

    <au-md-input icon="search">
        <input type="email" name="email" placeholder="E-mail">
    </au-md-input>

    <au-md-input icon="perm_identity">
        <input name="identity" placeholder="Identity Number">
    </au-md-input>

    <au-md-input icon="receipt">
        <input name="receipt" placeholder="Receipt">
    </au-md-input>
        

# Running The Sample Application

This module ships with a sample application. To run it, first clone this repo and then install some global dependencies:

    npm install -g @angular/cli yarn

Once the global dependencies are installed, to install the module dependencies go to the folder with the file `package.json` and run:

    yarn

From there to start the application, run the following command:

    npm start

The sample application is now running at port 4200:

[http://localhost:4200](http://localhost:4200)

# Running the Tests 

The tests can be executed with the following command:

    npm test

# License 

[MIT](https://opensource.org/licenses/MIT)





