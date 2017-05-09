# Angular Icon Inputs 

This module contains a couple of Angular Input box components that allow to add an icon inside a text input, which helps to improve user experience and better identify common input fields like for example email, etc.

Any icon available on either the [Font Awesome](http://fontawesome.io) or the [Google Material Design](https://material.io/icons/) Icon libraries can be used.

Here is what the icons look like on screen:

![Demo of au-input components](https://raw.githubusercontent.com/angular-university/au-input/master/images/icons-demo.png)

# Features

The components have minimum styling and are themable, the styles are isolated and won't interfere in the page where they are deployed. The components are compatible with AOT.

The HTML input is not hidden inside the component, so it supports all standard HTML input attributes, including custom attributes (data-), all the accessiblity properties, etc.


# Installation

This is how to install the components:

    npm install au-input

or 

    yarn add au-input

And on your application module:

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

Then we use the Font Awesome Input like this:

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

The inputs receive an input property named `icon` that identifies which Font Awesome icon we want to apply. The value envelope will add the email icon by adding the CSS class "fa-envelope" to the icon, etc.



# Running The Sample Application


# Running the Tests 


# License 

[MIT](https://opensource.org/licenses/MIT)





