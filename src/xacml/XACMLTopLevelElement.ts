// Copyright (C) 2020 Italo Yeltsin Medeiros Bruno
// Copyright (c) 2020 Paulo Jonathas Alves Matos
//
// SPDX-License-Identifier: MIT

const { create } = require('xmlbuilder2');
import { Description } from "./Description";
import { XACMLElement } from "./XACMLElement";

export abstract class XACMLTopLevelElement extends XACMLElement {
  constructor(options: XACMLTopLevelElement.Options) {
		super(options)
  }
  
  public build() : string {
    let obj: any = {}
    obj[this.elementName] = this.elementRoot
    const doc = create(obj)
    const xacml = doc.end({ prettyPrint: true });
    return xacml
  }
}

export namespace XACMLTopLevelElement{
  export interface Options extends XACMLElement.Options{
    description?: Description
  }
}