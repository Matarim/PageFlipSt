import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/TurnThePage.ts',
        output: [{ file: 'dist/js/turn-the-page.browser.js', format: 'umd', name: 'St' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', useTsconfigDeclarationDir: true }),
            terser(),
        ],
    },
    {
        input: 'src/TurnThePage.ts',
        output: [{ file: 'dist/js/turn-the-page.module.js', format: 'es' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', useTsconfigDeclarationDir: true }),
            terser(),
        ],
    },
];
