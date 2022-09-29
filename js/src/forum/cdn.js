import twemoji from 'twemoji';

export const version = /([0-9]+).[0-9]+.[0-9]+/g.exec(twemoji.base)[1];

let baseUrl = window.location.origin;
export default `${baseUrl}/assets/extensions/romanshul-emoji/`;
