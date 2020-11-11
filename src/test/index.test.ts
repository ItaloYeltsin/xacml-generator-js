import {expect, use} from 'chai';
import 'chai-subset'
import { AnyOf } from '../xacml/AnyOf';
import { Policy } from '../xacml/Policy';
import { PolicyIdReference } from '../xacml/PolicyIdReference';
import { PolicySet } from '../xacml/PolicySet';
import { Target } from '../xacml/Target';
import { XACMLElement } from '../xacml/XACMLElement';
import {PolicyIssuer} from '../xacml/PolicyIssuer'
import chaiSubset = require('chai-subset');
import { Description } from '../xacml/Description';
use(chaiSubset)
describe('Element classes suite', function() {
    
    it('XACMLElement instances should have elementName equal class name', function() {
        let policySet = new PolicySet({
            description: new Description("This is a policy set"),
            target: new Target(),
            policyCombiningAlgId: 
            'urn:oasis:names:tc:xacml:1.0:policy-combining-algorithm:deny-overrides',
            version: '1.0',
            policySetId: 'urn:oasis:names:tc:xacml:3.0:example:policysetid:1'
        });
        expect(policySet.elementName).equal('PolicySet');
        expect(new AnyOf().elementName).equal('AnyOf');
        expect(new Target().elementName).equal('Target');
    });
    
    it('XACMLElement should auto add array elements fields as children', function () {
        let policyIdRef = new PolicyIdReference();
        let policySet = new PolicySet({
            description: new Description("This is a policy set"),
            target: new Target(),
            policyCombiningAlgId: 
            'urn:oasis:names:tc:xacml:1.0:policy-combining-algorithm:deny-overrides',
            version: '1.0',
            policySetId: 'urn:oasis:names:tc:xacml:3.0:example:policysetid:1',
            policyIdReferences: [
                new PolicyIdReference(),
                new PolicyIdReference()
            ] 
        })
        expect(policySet.elementRoot.PolicyIdReference.length).to.be.equal(2);    
    });

    it('Expect elements to have the same attributes of their interfaces', function() {
        let policysetOptions: PolicySet.Options = {
            description: new Description("This is a policy set"),
            policyIssuer: new PolicyIssuer(),
            target: new Target(),
            policyCombiningAlgId: 
            'urn:oasis:names:tc:xacml:1.0:policy-combining-algorithm:deny-overrides',
            version: '1.0',
            policySetId: 'urn:oasis:names:tc:xacml:3.0:example:policysetid:1'

        }
        let policySet = new PolicySet(policysetOptions)
        expect(policySet).to.containSubset(policysetOptions)
    });
});