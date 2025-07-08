const assetRoot = '/assets/';

export const assetPaths = {
    icons: `${assetRoot}icons`,
    projects: `${assetRoot}projects`,
    sections: `${assetRoot}sections`,
} as const;

export type AssetCategory = keyof typeof assetPaths;