import { ArrowRight } from '@carbon/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { text, color, others, path } = props;
    return (
        <Link to={path} className={`dap-btn xui-d-inline-flex xui-flex-ai-center xui-text-inherit xui-text-dc-none ${others}`} style={{borderColor: color, color: color}}>
            <span className='xui-d-inline-block xui-font-sz-110 xui-mr-1 dap-btn-text'>{text}</span>
            <div className='dap-btn-icon-holder xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                <ArrowRight size={16} />
            </div>
        </Link>
    );
};

export default Button;