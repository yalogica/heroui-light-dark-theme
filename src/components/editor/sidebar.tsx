import React from 'react';
import { useTheme } from '@heroui/use-theme';
import { Button } from '@heroui/react';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/utils';

interface SidebarBtnProps {
    children?: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
};

const SidebarBtn = ({ children, selected, onClick }: SidebarBtnProps): React.ReactElement => {
    return (
        <Button className={cn('custom-btn-sidebar', selected && 'custom-btn-sidebar-selected')} isIconOnly onPress={onClick}>
            {children}
        </Button>
    );
};

export const Sidebar = (): React.ReactElement => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="p-2 flex flex-col bg-sidebar">
            <div className="flex-grow flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <SidebarBtn>
                        <Icons.settings size={24} />
                    </SidebarBtn>
                    <SidebarBtn>
                        <Icons.scenes size={24} />
                    </SidebarBtn>
                    <SidebarBtn selected={true}>
                        <Icons.controls size={24} />
                    </SidebarBtn>
                    <SidebarBtn>
                        <Icons.music size={24} />
                    </SidebarBtn>
                </div>
                <SidebarBtn onClick={toggleTheme}>
                    {
                        theme === 'light' ?
                        <Icons.light size={24} /> :
                        <Icons.dark size={24} />
                    }
                </SidebarBtn>
            </div>
        </div>
    );
};