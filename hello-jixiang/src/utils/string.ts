export const isExternalURL = (url: string) => new URL(url).origin !== location.origin;
