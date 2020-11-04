const { create } = require('xmlbuilder2');
import { XACMLElement } from "./XACMLElement";

export abstract class XACMLTopLevelElement extends XACMLElement {
  constructor(description: string) {
		super()

    this.elementRoot = { [this.constructor.name]: { Description: description } }
  }

  public addChild(childElement: XACMLElement) {
    if (childElement.elementName in this.elementRoot[this.constructor.name]) {
      this.elementRoot[this.constructor.name][childElement.elementName] = [].concat(this.elementRoot[this.constructor.name][childElement.elementName], childElement.elementRoot)
    } else {
      this.elementRoot[this.constructor.name][childElement.elementName] = childElement.elementRoot
    } 
  }

  public build() : string {
    const doc = create(this.elementRoot)
    const xacml = doc.end({ prettyPrint: true });
    return xacml
  }
}
