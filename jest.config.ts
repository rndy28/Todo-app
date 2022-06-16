import type { Config } from '@jest/types';
// Or async function

export default async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
        preset: "ts-jest",
        moduleDirectories: [
            "node_modules",
            "src"
        ],
        transform: {
            "^.+\\.svg$": "<rootDir>/svgTransform.ts",
        },
        moduleNameMapper: {
            "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/file.mock.ts",
            "^uuid$": require.resolve("uuid"),
        }
    };
};

