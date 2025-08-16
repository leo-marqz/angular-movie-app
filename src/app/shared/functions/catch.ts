
export function extractErrors(obj: any): string[] {
    const errors = obj.error.errors;
    let errorMessages: string[] = [];

    for(let key in errors) {
        let field = key;
        let messages = errors[key].map((message: string) => `${field}: ${message}`);
        errorMessages = errorMessages.concat(messages);
    }

    return errorMessages;
}
