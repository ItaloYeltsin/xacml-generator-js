// Copyright (C) 2020 Italo Yeltsin Medeiros Bruno
// Copyright (c) 2020 Paulo Jonathas Alves Matos
//
// SPDX-License-Identifier: MIT

import { AdviceExpressions } from "./AdviceExpressions";
import { CombinerParameters } from "./CombinerParameters";
import { ObligationExpressions } from "./ObligationExpressions";
import { Policy } from "./Policy";
import { PolicyCombinerParameters } from "./PolicyCombinerParameters";
import { PolicyDefaults } from "./PolicyDefaults";
import { PolicyIdReference } from "./PolicyIdReference";
import { PolicyIssuer } from "./PolicyIssuer";
import { PolicySetCombinerParameters } from "./PolicySetCombinerParameters";
import { PolicySetIdReference } from "./PolicySetIdReference";
import { Target } from "./Target";
import { XACMLElement } from "./XACMLElement";
import { XACMLTopLevelElement } from "./XACMLTopLevelElement";

export class PolicySet extends XACMLTopLevelElement {
  
  constructor(options: PolicySet.Options){
    super(options)
  }
}

export namespace PolicySet{
  export interface Options extends XACMLTopLevelElement.Options{
    policyIssuer?: PolicyIssuer,
    policyDefaults?: PolicyDefaults,
    target: Target,
    policySets?: PolicySet [],
    policies?: Policy,
    policySetIdReferences?: PolicySetIdReference,
    policyIdReferences?: PolicyIdReference [],
    combinerParameters?: CombinerParameters [],
    policySetCombinerParameters?: PolicySetCombinerParameters [],
    policyCombinerParameters?: PolicyCombinerParameters [],
    obligationExpressions?: ObligationExpressions,
    AdviceExpressions?: AdviceExpressions,
    policySetId: string,
    version: string,
    policyCombiningAlgId: string,
    maxDelegationDepth?: number
  }
}