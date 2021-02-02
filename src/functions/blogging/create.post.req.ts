export default {
    type: "object",
    properties: {
        title: { type: 'string' },
        content: {type: 'string'}
    },
    required: ['title']
} as const;
