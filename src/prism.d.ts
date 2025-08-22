// src/prism.d.ts

declare module 'prismjs/components/prism-core' {
    export const highlight: (text: string, grammar: any, language: string) => string;
    export const languages: {
        [key: string]: any;
    };
}

declare module 'prismjs/components/prism-clike';
declare module 'prismjs/components/prism-javascript';
declare module 'prismjs/components/prism-markup';
declare module 'prismjs/components/prism-css';  