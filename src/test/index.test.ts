import {expect} from 'chai';
import { AnyOf } from '../xacml/AnyOf';
import { Policy } from '../xacml/Policy';
import { PolicyIdReference } from '../xacml/PolicyIdReference';
import { PolicySet } from '../xacml/PolicySet';
import { Target } from '../xacml/Target';
import { XACMLElement } from '../xacml/XACMLElement';


describe('Element classes suite', function() {
    
    it('XACMLElement instances should have elementName equal class name', function() {
        expect(new Policy("description").elementName).equal('Policy');
        expect(new PolicySet("description").elementName).equal('PolicySet');
        expect(new AnyOf().elementName).equal('AnyOf');
        expect(new Target().elementName).equal('Target');
    });
    
    it('XACMLTopLevelElement should auto convert multi-valued fields to array', function () {
        let policyIdRef = new PolicyIdReference();
        let policySet = new PolicySet('desc');
        policySet.addChild(policyIdRef);
        policySet.addChild(policyIdRef)
        expect(policySet.elementRoot.PolicySet.PolicyIdReference.length).to.be.equal(2);    
    });
});