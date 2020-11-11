// Copyright (C) 2020 Italo Yeltsin Medeiros Bruno
// Copyright (c) 2020 Paulo Jonathas Alves Matos
//
// SPDX-License-Identifier: MIT

const { create } = require('xmlbuilder2');

export abstract class XACMLElement {
  public elementName: string
  public elementRoot: any
  public excludedFields: Array<String>
  constructor(options: XACMLElement.Options) {
    this.elementName = this.constructor.name
    this.elementRoot = {}
    this.excludedFields = ['elementRoot', 'elementName']
    this.elementRoot[this.elementName] = {}
    Object.assign(this, options);
    Object.entries(this).forEach(([key, value]) => {
      if(this.excludedFields.includes(key)) {
        return;
      }
      if(value instanceof Array) {
        this.addChildren(value)
      }
      else if(value instanceof XACMLElement) {
        this.addChild(value)
      }
      else {
        this.addAttribute(key, value)
      }
    })
  }

  public addAttribute(key: string, value: string) {
    let aux: string = key.charAt(0).toUpperCase() + key.slice(1)
    this.elementRoot[`@${aux}`] = value
  }

  public addChild(childElement: XACMLElement) {
   if (childElement.elementName in this.elementRoot) {
      this.elementRoot[childElement.elementName] = [].concat(this.elementRoot[childElement.elementName], childElement.elementRoot)
    } else {
      this.elementRoot[childElement.elementName] = childElement.elementRoot
    } 
  }
  public addChildren(childElements: Array<XACMLElement>) {
    childElements.forEach(element => {
      this.addChild(element)
    })
  }
}

export namespace XACMLElement{
  export interface Options {

  }
}
