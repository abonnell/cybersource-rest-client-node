/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Riskv1decisionsClientReferenceInformationPartner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsClientReferenceInformationPartner'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1decisionsClientReferenceInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsClientReferenceInformationPartner);
  }
}(this, function(ApiClient, Riskv1decisionsClientReferenceInformationPartner) {
  'use strict';




  /**
   * The Riskv1decisionsClientReferenceInformation model module.
   * @module model/Riskv1decisionsClientReferenceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1decisionsClientReferenceInformation</code>.
   * @alias module:model/Riskv1decisionsClientReferenceInformation
   * @class
   * @param code {String} Merchant-generated order reference or tracking number. It is recommended that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  #### Used by **Authorization** Required field.  #### PIN Debit Requests for PIN debit reversals need to use the same merchant reference number that was used in the transaction that is being reversed.  Required field for all PIN Debit requests (purchase, credit, and reversal).  #### FDC Nashville Global Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports. 
   */
  var exports = function(code) {
    var _this = this;

    _this['code'] = code;


  };

  /**
   * Constructs a <code>Riskv1decisionsClientReferenceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1decisionsClientReferenceInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1decisionsClientReferenceInformation} The populated <code>Riskv1decisionsClientReferenceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('partner')) {
        obj['partner'] = Riskv1decisionsClientReferenceInformationPartner.constructFromObject(data['partner']);
      }
    }
    return obj;
  }

  /**
   * Merchant-generated order reference or tracking number. It is recommended that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  #### Used by **Authorization** Required field.  #### PIN Debit Requests for PIN debit reversals need to use the same merchant reference number that was used in the transaction that is being reversed.  Required field for all PIN Debit requests (purchase, credit, and reversal).  #### FDC Nashville Global Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Brief description of the order or any comment you wish to add to the order. 
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsClientReferenceInformationPartner} partner
   */
  exports.prototype['partner'] = undefined;



  return exports;
}));


