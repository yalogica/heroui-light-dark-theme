import React from 'react';
import { Input } from '@heroui/react';

export const DocumentTitle = (): React.ReactElement => {
    return (
        <Input classNames={{inputWrapper:"custom-input"}} placeholder="Document Title" variant="bordered" />
    );
};