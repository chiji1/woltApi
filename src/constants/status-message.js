// eslint-disable-next-line import/prefer-default-export
const STATUS_MSG = {
    ERROR: {
        ALREADY_EXISTS: {
            statusCode: 400,
            customMessage: "record with this name already exists",
            type: "ALREADY_EXISTS",
        },
        NULL_INVALID: {
            statusCode: 400,
            customMessage: "Null is not a valid value",
            type: "NULL_INVALID",
        },
        DB_ERROR: {
            statusCode: 400,
            customMessage: "DB Error : ",
            type: "DB_ERROR",
        },
        NO_UPDATE: {
            statusCode: 400,
            customMessage: "Entries not updated in DB",
            type: "NO_UPDATE",
        },
        CUSTOMER_ID: {
            statusCode: 400,
            customMessage: "Incorrect USER ID",
            type: "UNAUTHORIZED",
        },
        INVALID_IMAGE_PROVIDED: {
            statusCode: 500,
            customMessage: "Image provided is not valid !",
            type: "INVALID_IMAGE_PROVIDED",
        },
        DEFAULT: {
            statusCode: 400,
            customMessage: "Error in execution",
            type: "DEFAULT",
        },
        DUPLICATE: {
            statusCode: 400,
            customMessage: "Duplicate Entry",
            type: "DUPLICATE",
        },
        NOTHING_TO_UPDATE: {
            statusCode: 400,
            customMessage: "Nothing to update",
            type: "NOTHING_TO_UPDATE",
        },
        EMPTY_VALUE: {
            statusCode: 400,
            customMessage: "Empty String Not Allowed",
            type: "EMPTY_VALUE",
        },
        UNAUTHORIZED: {
            statusCode: 401,
            customMessage: "You are not authorized to perform this action",
            type: "UNAUTHORIZED",
        },
    },
    SUCCESS: {
        UPLOADED: {
            statusCode: 201,
            customMessage: "Uploaded Successfully",
            type: "UPLOADED",
        },
        CREATED: {
            statusCode: 201,
            customMessage: "Created Successfully",
            type: "CREATED",
        },
        DEFAULT: {
            statusCode: 200,
            customMessage: "Success",
            type: "DEFAULT",
        },
        QUERY_SUBMITTED: {
            statusCode: 200,
            customMessage: "Query submitted successfully ",
            type: "QUERY_SUBMITTED",
        },
        UPDATED: {
            statusCode: 200,
            customMessage: "Updated Successfully",
            type: "UPDATED",
        },
        LOGOUT: {
            statusCode: 200,
            customMessage: "Logged Out Successfully",
            type: "LOGOUT",
        },
        DELETED: {
            statusCode: 200,
            customMessage: "Deleted Successfully",
            type: "DELETED",
        },
        VERIFIED: {
            statusCode: 200,
            customMessage: "Phone number verified successfully",
            type: "VERIFIED",
        },
        NO_RESULT_FOUND: {
            statusCode: 200,
            customMessage: "No result found in database",
            type: "NO_RESULT_FOUND",
        },

    },
};

module.exports = STATUS_MSG;
