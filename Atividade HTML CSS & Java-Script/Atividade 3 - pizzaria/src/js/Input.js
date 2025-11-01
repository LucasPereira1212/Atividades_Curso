import { Component } from "./Component.js";

export class Input extends Component {
  constructor(typer = "text", placeholder = "") {
    super("input");
    this.build();
    this.element.typer = typer;
    this.element.placeholder = placeholder;
  }
}
