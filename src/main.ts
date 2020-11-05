import { Policy } from "./xacml/Policy";
import { Target } from "./xacml/Target";
import { AnyOf  } from "./xacml/AnyOf";
import { Dummy  } from "./xacml/Dummy";

// TESTING STUFF

let policy = new Policy("this is a Policy")
let target = new Target()
let anyOf = new AnyOf()
let dummy = new Dummy()

anyOf.addChild(dummy)
anyOf.addChild(dummy)

target.addChild(anyOf)

policy.addAttribute("xmlns", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17")
policy.addChild(target)

console.log(policy.build())
