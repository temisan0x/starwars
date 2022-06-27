export function getUrldId(url: string) {
    const splitUrl = url.split('/');
    const characterId = splitUrl[splitUrl.length - 2];

    return characterId;
}