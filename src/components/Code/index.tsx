// components/CodeBlock.js
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as editor from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value, ...props }: { language: string, value: string, wrapLines?: boolean }) => {
    return (
        <SyntaxHighlighter language={language} {...props} style={editor.atomDark}>
            {value}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;