// components/CodeBlock.js
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as editor from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value }: { language: string, value: string }) => {
    return (
        <SyntaxHighlighter language={language} style={editor.atomDark}>
            {value}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;