const apiResponses = {
    _200: (data: { [key: string]: any }) => {
        return {
            statusCode: 200,
            body: JSON.stringify(data, null, 2)
        }
    },
    _400: (message: string, data?: { [key: string]: any }) => {
        var response: any = { message: message };
        if (data) response.data = data;
        return {
            statusCode: 400,
            body: JSON.stringify(response, null, 2)
        }
    }
}