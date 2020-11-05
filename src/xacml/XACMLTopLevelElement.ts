// Copyright (C) 2020 Italo Yeltsin Medeiros Bruno
// Copyright (c) 2020 Paulo Jonathas Alves Matos
//
// SPDX-License-Identifier: MIT

const { create } = require('xmlbuilder2');
import { XACMLElement } from "./XACMLElement";

export abstract class XACMLTopLevelElement extends XACMLElement {
  constructor(description: string) {
		super()

    this.elementRoot = { [String(this.constructor.name)]: { Description: description } }
  }

  public addChild(childElement: XACMLElement) {
    let name : string = String(this.constructor.name)
    if (childElement.elementName in this.elementRoot[name]) {
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