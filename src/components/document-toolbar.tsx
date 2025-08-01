import React from 'react';
import { Button } from '@heroui/react';
import { Icons } from '@/components/ui/icons';

export const DocumentToolbar = (): React.ReactElement => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex-grow flex items-center gap-2">
                <Icons.logo size={40} />
                <p className="font-bold text-2xl">HeroUI Light & Dark Theme Boilerplate</p>
            </div>
            <div className="flex items-center gap-2">
                <Button className="min-w-24" color="primary" variant="flat" size="sm">Switch to Draft</Button>
                <Button className="min-w-24" color="primary" size="sm">Save</Button>
                <Button className="min-w-24" color="secondary" size="sm">Publish</Button>
            </div>
        </div>
    );
};