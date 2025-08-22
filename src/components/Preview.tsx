import React from 'react';
import { useStore } from '../store';

export const Preview: React.FC = () => {
  const { htmlCode, cssCode, jsCode } = useStore();

  const srcDoc = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>
          try {
            ${jsCode}
          } catch (err) {
            console.error(err);
          }
        </script>
      </body>
    </html>
  `;

  return (
    <div className="h-full w-full bg-white" data-testid="preview-container">
      <iframe
        srcDoc={srcDoc}
        title="preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
};
