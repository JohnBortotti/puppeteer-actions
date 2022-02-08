export type PuppeteerConfig = {
    headless: boolean,
    slowMotion: number,
    ignoreHttpErrors: boolean,
    viewPort: {
        width: number,
        height: number
    }
};