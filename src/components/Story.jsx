import React from 'react';

const Story = (props) => {
    const { image, date, category, heading } = props;
    return (
        <div className='xui-bdr-w-1 xui-bdr-fade xui-bdr-s-solid xui-overflow-hidden xui-bdr-rad-1'>
            <div className='xui-p-1 xui-lg-p-1-half'>
                <div className='xui-d-flex xui-flex-jc-space-between'>
                    <span className='xui-font-w-700 xui-font-sz-85 dap-text-secondary xui-text-uppercase'>{category}</span>
                    <span className='xui-font-sz-75 xui-opacity-7'>{date}</span>
                </div>
                <h2 className='xui-font-sz-150 xui-line-height-2-half xui-my-2'>{heading}</h2>
            </div>
            <div className='xui-h-250 xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={image}></div>
        </div>
    );
};

export default Story;