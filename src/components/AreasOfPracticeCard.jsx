import React from 'react';

const AreasOfPracticeCard = (props) => {
    const { image, text } = props;
    return (
        <div className='xui-w-300 xui-h-fluid-100 xui-pos-relative xui-overflow-hidden dap-aop-card'>
            <img className='xui-w-fluid-100 xui-h-500 xui-lg-h-350' src={image} alt="tax" />
            <div className='dap-bg-secondary xui-px-1 xui-py-half dap-aop-text-container'>
                <h3 className='bebas-neue-regular xui-font-sz-120 xui-lg-font-sz-200 dap-text-primary'>{text}</h3>
            </div>
        </div>
    );
};

export default AreasOfPracticeCard;