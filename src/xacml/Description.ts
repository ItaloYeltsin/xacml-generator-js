// Copyright (C) 2020 Italo Yeltsin Medeiros Bruno
// Copyright (c) 2020 Paulo Jonathas Alves Matos
//
// SPDX-License-Identifier: MIT

import { XACMLStringElement } from "./XACMLStringElement";

export class Description extends XACMLStringElement {
  constructor(value: string){
    super(value)
  }
}
