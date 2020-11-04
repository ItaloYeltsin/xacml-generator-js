const { create } = require('xmlbuilder2');

export abstract class XACMLElement {
  public elementName: string
  public elementRoot: object

  constructor() {
    this.elementName = this.constructor.name
    this.elementRoot = {}
  }

  public addAttribute(key, value: string) {
    this.elementRoot[this.constructor.name][`@${key}`] = value
  }

  public addChild(childElement: XACMLElement) {
    if (childElement.elementName in this.elementRoot) {
      this.elementRoot[childElement.elementName] = [].concat(this.elementRoot[childElement.elementName], childElement.elementRoot)
    } else {
      this.elementRoot[childElement.elementName] = childElement.elementRoot
    } 
  }
}
