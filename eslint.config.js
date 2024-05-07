import eslintPluginSvelte from 'eslint-plugin-svelte';
export default [

  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    rules: {
      "svelte/valid-compile": ["error", { ignoreWarnings: true }]
    }
  },
  {
    ignores: [
      "node_modules",
      "*.d.ts",
      "*.html",
      "*.css",
      ".vscode/*",
      "*.log"
    ]
  }
];