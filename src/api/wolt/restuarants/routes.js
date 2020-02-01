const express = require("express");
const controller = require('./controller');

const router = express.Router();

/**
 * @api {get} /api/restaurants?id={recordId} Retrieve one or all records
 * @apiName RetrieveBank
 * @apiGroup Bank
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/restaurants?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of Corporate commercial banks operating Groups bank account(s)
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/restaurants", [], controller.fetchRecords);

/**
 * @api {post} /api/banks Create banks
 * @apiName CreateBank
 * @apiGroup Bank
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Bank full name (required)
 * @apiParam {String} sort_code Bank sort_code (required)
 * @apiParam {String} bank_code Bank bank_code (required)
 * @apiParam {String} country_iso2 Bank country_iso2 (optional)
 * @apiParam {String} contact_person Bank contact_person (optional)
 * @apiParam {String} website Bank website (optional)
 * @apiSuccess {Object} Bank Bank's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
// router.post("/restaurants", createRecord);

/**
 * @api {put} /api/banks/{recordId} Update banks
 * @apiName UpdateBank
 * @apiGroup Bank
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Bank full name (required)
 * @apiParam {String} sort_code Bank sort_code (required)
 * @apiParam {String} bank_code Bank bank_code (required)
 * @apiParam {String} country_iso2 Bank country_iso2 (optional)
 * @apiParam {String} contact_person Bank contact_person (optional)
 * @apiParam {String} website Bank website (optional)
 * @apiSuccess {Object} Bank Bank's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
// router.put("/restaurants/:recordId", updateRecord);

/**
 * @api {patch} /api/banks/{recordId} Patch banks
 * @apiName PatchBank
 * @apiGroup Bank
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
// router.patch("/restaurants/:recordId", patchRecord);

/**
 * @api {delete} /api/banks/{recordId} Delete banks
 * @apiName DeleteBank
 * @apiGroup Bank
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Bank not found.
 * @apiError 401 master access only.
 */
// router.delete("/restaurants/:recordId", deleteRecord);

module.exports = router;
