import React from 'react';
import { Button } from '@heroui/react';
import { Input } from '@heroui/react';
import { Icons } from '@/components/ui/icons';

const SettingsHead = (): React.ReactElement => {
    return (
        <div className="h-10 p-1 px-2 shrink-0 flex justify-between gap-1 border-b bg-editor-3 border-editor-b">
            <div className="flex items-center gap-1 text-sm font-semibold text-editor-txt-2 text-nowrap leading-none">
                <Icons.settings size={22} className="text-editor-txt-3" />
                <div>Basic Settings</div>
            </div>
        </div>
    );
};

const SettingsData = (): React.ReactElement => {
    return (
        <div className="p-2 text-sm flex flex-col gap-2">
            <div className="p-2 flex flex-col gap-1 rounded-lg border-2 bg-editor-3 border-editor">
                <div className="flex gap-1 items-center justify-between">
                    <div className="font-medium text-editor-txt">Padding</div>
                    <div className="flex gap-1">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-1 justify-between">
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-1 justify-between">
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-1 justify-between">
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="p-2 flex flex-col gap-1 rounded-lg border-2 bg-editor-3 border-editor">
                <div className="flex gap-1 items-center justify-between">
                    <div className="font-medium text-editor-txt">Padding</div>
                    <div className="flex gap-1">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-1 justify-between">
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-1 justify-between">
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-1 justify-between">
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="flex-grow"><Input classNames={{inputWrapper:"custom-input"}} size="sm" variant="bordered" /></div>
                    <div className="">
                        <Button isIconOnly className="custom-btn" size="sm" variant="bordered">
                            <Icons.box size={16} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const LeftPanel = (): React.ReactElement => {
    return (
        <div className="h-full flex flex-col border-r bg-editor-2 border-editor-b">
            <SettingsHead />
            <SettingsData />
        </div>
    );
};