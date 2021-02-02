import schema from './create.post.request';

export default {
    handler: `${__dirname.split(process.cwd())[1].substring(1)}/create.post.handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'post',
                request: {
                    schema: {
                        'application/json': schema
                    }
                }
            }
        }
    ]
}
