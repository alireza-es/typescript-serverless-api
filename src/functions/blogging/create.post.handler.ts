import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import 'source-map-support/register';
import createPost from './create.post.req';


const createPostFunction: ValidatedEventAPIGatewayProxyEvent<typeof createPost> = async (event) => {
    if (!event.body.content) {
        return apiResponses._400('Invalid post content');
    }

    return apiResponses._200({ id: 100 });
}

export const main = middyfy(createPostFunction);
