import { assetPaths, AssetCategory } from './Paths';

export const resolveAsset = (
    category: AssetCategory,
    filename: string
): string => {
    return `${assetPaths[category]}/${filename}`.replace(/\/+/g, '/');
};