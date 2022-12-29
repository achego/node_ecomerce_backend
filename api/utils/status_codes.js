const StatusCodes = {

    // Successfull requests
    ok: 200,
    created: 201,

    // Redirect Requests
    temporaryRedirect: 307,

    // Client Errors
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,

    // Server Error
    internalServerError: 500
};

module.exports = StatusCodes;