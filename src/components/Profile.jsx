import { Close } from '@carbon/icons-react';
import React from 'react';

const Profile = (props) => {
    const { uid, image, name, role, text } = props;
    return (
        <>
        <div className='xui-text-center xui-cursor-pointer' xui-modal-open={text && text.length > 0 ? uid : 'false'}>
            <div className='xui-bg-light xui-w-300 xui-h-300 xui-mx-auto xui-bdr-rad-circle xui-overflow-hidden'>
                <img className='xui-w-fluid-100 xui-h-fluid-100' src={image} alt="" />
            </div>
            <h2 className='xui-font-sz-115 xui-mt-1-half'>{name}</h2>
            <span className='xui-d-inline-block xui-opacity-8 xui-font-sz-90'>{role}</span>
        </div>
        <section className='xui-modal xui-modal-top-right' xui-modal={uid}>
            <div className='xui-modal-content xui-max-w-400'>
                <div className='xui-d-flex xui-flex-jc-space-between'>
                    <div>
                        <h3>{name}</h3>
                        <span className='xui-d-inline-block xui-opacity-5 xui-font-sz-85'>{role}</span>
                    </div>
                    <div className='xui-w-50 xui-h-50 xui-bg-light xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-cursor-pointer' xui-modal-close={uid}>
                        <Close size={24} />
                    </div>
                </div>
                <img className='xui-w-fluid-100 xui-h-300 xui-mt-1' src={image} alt="profile" />
                <div className='xui-d-grid xui-grid-gap-2 xui-grid-col-1 xui-mt-2'>
                    {text && text.map((txt, index) => (
                        <p key={index} className='xui-opacity-8 xui-font-sz-90 xui-line-height-2'>{txt}</p>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default Profile;