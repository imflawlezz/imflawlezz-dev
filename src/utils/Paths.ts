const assetRoot = '/assets/';

export const assetPaths = {
    icons: `${assetRoot}icons`,
    projects: `${assetRoot}projects`,
    sections: `${assetRoot}sections`,
    hero: `${assetRoot}sections/hero`,
    cta: `${assetRoot}sections/cta`,
    stack: `${assetRoot}stack`,
    tools: `${assetRoot}tools`,
    screenshots: `${assetRoot}screenshots`,
} as const;

export type AssetCategory = keyof typeof assetPaths;