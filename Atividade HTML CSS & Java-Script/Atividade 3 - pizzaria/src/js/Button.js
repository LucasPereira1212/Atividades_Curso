import { Component } from "./Component.js";

export class Button extends Component {
  constructor(text) {
    super("button");
    this.build();
    this.element.typer = "Submit";
    this.element.textContent = text;
  }
}
