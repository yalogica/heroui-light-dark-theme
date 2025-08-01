import React from 'react';
import { Allotment, LayoutPriority } from 'allotment';
import 'allotment/dist/style.css';
import { Sidebar } from './sidebar';
import { LeftPanel } from './left-panel';
import { PreviewPanel } from './preview-panel';
import { RightPanel } from './right-panel';

export const Editor = (): React.ReactElement => {
    return (
        <div className="flex-grow relative flex h-full w-full overflow-hidden shadow-lg rounded-lg bg-editor">
            <Sidebar />
            <div className="flex-grow rounded-e-lg border-1 border-s-0 border-editor-b">
                <Allotment className="w-full" separator={false} proportionalLayout={false} defaultSizes={[350, 0, 350]}>
                    <Allotment.Pane minSize={350}>
                        <LeftPanel />
                    </Allotment.Pane>
                    <Allotment.Pane priority={LayoutPriority.High}>
                        <PreviewPanel />
                    </Allotment.Pane>
                    <Allotment.Pane minSize={350}>
                        <RightPanel />
                    </Allotment.Pane>
                </Allotment>
            </div>
        </div>
    );
};