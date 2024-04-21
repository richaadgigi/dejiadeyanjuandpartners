import React from 'react';

const AreasPractice = (props) => {
    const { icon, heading, text } = props;
    return (
        <div className='dap-bg-gray xui-bdr-rad-1 xui-p-1'>
            <div className='xui-w-50 xui-h-50 dap-bg-accent xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                {icon}
            </div>
            <h3 className='xui-mt-2 xui-font-sz-105 xui-font-w-normal'>{heading}</h3>
            <p className='xui-opacity-6 xui-font-sz-80 xui-mt-half xui-line-height-1-half'>{text}</p>
        </div>
    );
};

export default AreasPractice;