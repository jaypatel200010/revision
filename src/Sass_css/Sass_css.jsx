/*
Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processorSass is completely compatible with all 
versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

Why Use Sass?
Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.
Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

If you use the create-react-app in your project, you can easily install and use Sass in your React projects.
Install Sass by running this command in your terminal:
>npm i sass


*/

import React from "react";
import "./sass_css.scss";

function Sass_css() {
  return (
    <div>
      <h1>Sass_css</h1>

      <p>Hi i am sass css with variable</p>
      <hr />

      <nav>
        <ul>
          <li>Nested </li>
          <li>Nested </li>
          <li>Nested </li>
          <li>Nested </li>
        </ul>
      </nav>
      <hr />

      <h1 className="nested1">nested css 1</h1>
      <h1 className="nested2">nested css 2</h1>

      <hr />

      <button className="button-basic">Basic Button</button>
      <button className="btn-red">Basic Red</button>
      <button className="btn-green">Basic green</button>
      <button className="btn-orange">Basic orange</button>
      <button className="btn-yellow">Basic yellow</button>
      <button className="btn-pink">Basic pink</button>
    </div>
  );
}

export default Sass_css;
