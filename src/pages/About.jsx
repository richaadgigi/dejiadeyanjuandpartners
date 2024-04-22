import React from 'react';
import Partners from '../components/Partners';
import Profile from '../components/Profile';
import { Partnership } from '@carbon/icons-react';
import AreasPractice from '../components/AreasPractice';

const About = () => {
    return (
        <>
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2 xui-flex-ai-center'>
                <div>
                    <span className='xui-d-inline-block xui-font-w-700 dap-text-secondary'>The DAP Law</span>
                    <h1 className='xui-font-sz-250 xui-lg-font-sz-300 xui-line-height-5'>We bring to bear long-standing in-depth knowledge of our jurisdiction</h1>
                </div>
                <div>
                    <img className='xui-img-500 xui-mx-auto' src="https://img.freepik.com/free-photo/view-3d-scales-justice-lawyer-s-day_23-2151023415.jpg?t=st=1713741421~exp=1713745021~hmac=fcbc566f47ac7a5d651675bba59a599392fedc62108c70a7d5c19dd7bae93e4a&w=740" alt="" />
                </div>
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                <div>
                    <img src="https://images.pexels.com/photos/5668484/pexels-photo-5668484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='xui-w-fluid-100 xui-lg-mt-2 xui-bdr-rad-1' alt="the law" />
                </div>
                <div>
                    <h1 className='xui-font-sz-200 xui-lg-font-sz-350 xui-line-height-5'>The story</h1>
                    <p className='xui-line-height-2 xui-opacity-8'>DEJI ADEYANJU & PARTNERS (DAP) is a full service law firm manned by very experienced legal practitioners with diverse areas of practice. The firm adopts a partner/senior associate led approach to solving client's issues, wherein associates are paired with a more experienced partner or senior associate. While the Partner or senior associate brings his or her experience to bear in meeting the client's need, the associate also takes it as an opportunity to learn, and at the same time, rendering support to the Partner or senior associate.</p>
                    <p className='xui-line-height-2 xui-opacity-8 xui-mt-2'>The firm is led by its two lead partners, Deji Adeyanju, Esq and Marvin Omorogbe, Esq, who have demonstrated proven capacity in their area of expertise cutting across human rights, criminal law, arbitration, corporate and commercial law, oil and gas, tech and entertainment law, election petition law, banking and finance, etc. The firm prides itself on its professionalism, quick response time, confidentiality, and excellent service delivery to its array of clients.</p>
                    <p className='xui-line-height-2 xui-opacity-8 xui-mt-2'>Recognising the importance of collaboration, the firm may, where necessary, collaborate with other firms in reaching the client's goal. The firm's associates are encouraged to develop interests in specific areas of law, affording them, the firm and our clients the benefit of a degree of specialization which modern law firms are increasingly being tailored towards. </p>
                </div>
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                <div>
                    <span className='xui-d-inline-block xui-font-w-700 dap-text-secondary'>The Vision</span>
                    <h1 className='xui-font-sz-200 xui-lg-font-sz-300 xui-line-height-5'>...to be among the top four best law firms in Nigeria within the next 4 years.</h1>
                </div>
                <div></div>
            </div>
        </section>
        <Partners />
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <h1 className='xui-font-sz-200 xui-lg-font-sz-250 xui-line-height-4'>The people behind the case</h1>
            <p className='xui-line-height-2 xui-opacity-8 xui-lg-w-fluid-75'>The firm runs a partnership led practice, with its co-founders Deji Adeyanju, Esq and Marvin Omorogbe, Esq leading a team of other partners and senior associates, who in turn, lead a team of associates. Our partners, senior associates and associates represent some of the most experienced and diligent legal practitioners in their respective areas of specialization.</p>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-4 xui-grid-gap-5 xui-mt-3'>
                <Profile uid={"DAE"} image={"https://images.pexels.com/photos/7665705/pexels-photo-7665705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} name={"Deji Adeyanju, Esq"} role={"Co-founding Partner"} text={["Deji Adeyanju has been a human rights advocate for almost three decades, and in that time, he has been involved in several landmark human rights cases either as a party or as a promoter. In recognition of the important place of law as a tool for social engineering, he went back to school to study law at Baze University where he graduated with a first class. He subsequently went to law school and on completion of the program, he was admitted into the Nigerian bar as a Barrister and Solicitor of the Supreme Court of Nigeria.", "Upon his admission to the Nigerian bar, he co-founded Deji Adeyanju & Partners, a full service law firm manned by experienced legal practitioners. Deji has used his knowledge of the law to fight for the oppressed and also facilitated the release of those who have been unjustly incarcerated by security agencies or otherwise suffer from other form of subjugation from the state. He also continuously takes a lot of pro bono cases across all sectors to help indigent citizens get justice. He is the chair of Centre for liberty and electoral reform advocacy and also the convener of Concerned Nigerians for the protection of human rights and the rule of law initiative Deji's human rights activism also extends across Africa where he served as the co-chair of African Rising, a Pan-African movement of people and organistions, working for unity, justice, peace and dignity.", "Despite his bias for human rights law, Deji is very knowledgeable in other areas of law and has provided advisory services to several clients. Deji believes the client is king, and brings his knowledge of law to bear in solving knotty legal issues for the client. Deji's area of specialisation includes human rights law, criminal law, arbitration, etc. He is an active member of the Nigerian Bar Association, Bwari branch."]} />
                <Profile uid={"MOE"} image={"https://images.pexels.com/photos/7665705/pexels-photo-7665705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} name={"Marvin Omorogbe, Esq"} role={"Senior Associate"} text={["Marvin Omorogbe was admitted to the Nigerian bar over a decade ago and he has extensive practice across all Nigerian courts. He has two undergraduate degrees, Bachelor of Laws, as well as BA(Hons) English and Literature, from reputable Nigerian universities, and just recently, successfully defended his masters thesis on the widening gap between directors and shareholders and its implications on corporate governance under the Companies and Allied Matters Act. Prior to co-founding Deji-Adeyanju & Partners, he worked with notable law firms like S.S Ameh (SAN) & Co, J.B Majiyagbe and Co, established by the late J.B Majiyagbe, SAN, the first Nigerian lawyer practising in Northern Nigeria to be elevated to the prestigious rank of Senior Advocate, and also established and managed the law firm of Omorogbe-Osagie & Co.", "Marvin's area of specialisation includes corporate governance, commercial law, compliance, electoral law, litigation and general advisory services. Marvin is also an experienced court room advocate and he has deployed his knowledge of legal principles to represent different clients. He has represented notable government and private clients, including subsidiaries of Nigeria's foremost oil corporation and other transnational clients seeking to establish business in Nigeria. He has served as a member of the team of legal practitioners engaged in several pre and post election disputes, with the latest being a member of the team of legal practitioners that represented the governor of Delta State in the pre-election litigation leading to the 2023 governorship election in Delta State, Nigeria.", "He also renders advisory services to several local and international non-governmental organisations. He is an active member of the Nigerian Bar Association and carries out his practice from Abuja, Nigeria. Marvin's hobby includes reading and teaching."]} />
                <Profile uid={"ZMO"} image={"https://images.pexels.com/photos/7665705/pexels-photo-7665705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} name={"Mrs. Zainab Mohammed Otega, Esq"} role={"Co Founding Partner/Managing Partner"} text={[]} />
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='dap-bg-accent xui-text-white xui-p-1 xui-lg-p-2 xui-bdr-rad-1'>
                <div className='xui-text-center'>
                    <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-180 xui-lg-font-sz-180 xui-lg-w-fluid-90 xui-line-height-3 xui-mx-auto'>Our values</h2>
                </div>
                <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-2 xui-mt-2'>
                    <AreasPractice icon={<Partnership size={20} />} heading={"Rule of law"} text={"Our entire practice revolves around the rule of law. It is at the core of what we do and who we are. We believe in the supremacy of the law and we ensure that our services are rendered in line with the law. We do not compromise the law, but finds solutions for our esteemed clients within the ambit of the law."} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Professionalism"} text={"At DAP, we prioritise professionalism in handling the client's instruction. From the moment the instruction is taken up to when we complete the brief, our colleagues handle the instruction with a seen of professionalism and the highest possible care. We recognize the client as king as treat every instruction as one deserving of such status."} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Confidentiality"} text={"In addition to the strict rule of confidentiality provided in the Rules of Professional Conduct for Legal Practitioners, we have adopted measures to keep the client's information confidential while also ensuring that the client's information are handled in line with the privacy provisions in the Data Protection Act. Considering the sensitive nature of instructions we receive from client, which may cut across client's personal and business life, we ensure that the client's information and personal details are adequately promoted."} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Integrity"} text={"We employ a very honest and transparent approach in handling the client's affairs. We understand that we stand in the place of fiduciary relationship with the client and we must guide the client right in taking necessary decisions. We do not insist on litigation when it appears our client's case may be better resolved true mediation or arbitration. We advise the client transparently on the strength and weaknesses of his case and suggest the best possible approach towards dealing with the client's instruction. We adopt the highest possible ethical standards in our relationship with our clients, and commit to providing our services with integrity at all times."} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Excellence"} text={"We recognize the fact that all other values without result will leave our clients unsatisfied. We have, therefore, adopted the mantra of excellence in our firm. To achieve this, we engage in continuous training and retraining of our team in order to ensure that we understand the client’s needs and provided the best possible solutions. We also expose our team to international best practice in order to continuously update their knowledge.  We aim to give our client the very best in all situations."} />
                </div>
            </div>
        </section>
        </>
    );
};

export default About;