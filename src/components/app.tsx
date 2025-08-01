import React from 'react';
import { DocumentToolbar } from '@/components/document-toolbar';
import { DocumentTitle } from '@/components/document-title';
import { Editor } from '@/components/editor';

export const App = (): React.ReactElement => {
    return (
        <div className="relative flex flex-col gap-2 h-screen p-4 overflow-hidden">
            <DocumentToolbar />
            <DocumentTitle />
            <Editor />
        </div>
    );
};