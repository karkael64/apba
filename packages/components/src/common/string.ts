export const camelToKebab = (field: string) => field.replace(/[A-Z]/g, (sub) => `-${sub.toLowerCase()}`);
