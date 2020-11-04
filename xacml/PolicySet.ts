// Copyright (C) 2020 Italo Yeltsin Medeiros Bruno
// Copyright (c) 2020 Paulo Jonathas Alves Matos
//
// SPDX-License-Identifier: MIT

import { XACMLTopLevelElement } from "./XACMLTopLevelElement";

export class PolicySet extends XACMLTopLevelElement {
  constructor(description: string){
    super(description)
  }
}
