import ResizeHook from '@/hooks/ResizeHook';
import Image from 'next/image';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const BoxAccordion = (props) => {
    const { width, boxone, boxtwo, boxthree, listsboxes, boxesone, boxesonesec, boxestwo, boxestwosec, boxesthree } = props;

    return (
        <Accordion>
            <div>
                {
                    boxone.map((libox, index) => (
                        <Accordion.Item eventKey={libox.heading} key={libox.heading} className="borderbox">
                            <Accordion.Header>
                                <div className="d-flex align-items-center gap20 flex-grow-1">
                                    <Image src={width < 767 ? listsboxes[index].boximg : width < 1199 ? boxesonesec[index].boximg : boxesone[index].boximg} alt={libox.heading} className="img-fluid borderboximg" />
                                    <p className="paracontent fw500 borderboxhead">{libox.heading}</p>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className="paracontent borderboxdesc mt-3">{libox.description}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </div>
            {
                width > 767 && <div>
                    {
                        boxtwo && boxtwo.map((libox, index) => (
                            <Accordion.Item eventKey={libox.heading} key={libox.heading} className="borderbox">
                                <Accordion.Header>
                                    <div className="d-flex align-items-center gap20 flex-grow-1">
                                        <Image src={width < 1199 ? boxestwosec[index].boximg : boxestwo[index].boximg} alt={libox.heading} className="img-fluid borderboximg" />
                                        <p className="paracontent fw500 borderboxhead">{libox.heading}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="paracontent borderboxdesc mt-3">{libox.description}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </div>
            }

            {
                boxthree && <div>
                    {
                        boxthree && boxthree.map((libox, index) => (
                            <Accordion.Item eventKey={libox.heading} key={libox.heading} className="borderbox">
                                <Accordion.Header>
                                    <div className="d-flex align-items-center gap20 flex-grow-1">
                                        <Image src={boxesthree[index].boximg} alt={libox.heading} className="img-fluid borderboximg" />
                                        <p className="paracontent fw500 borderboxhead">{libox.heading}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="paracontent borderboxdesc mt-3">{libox.description}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </div>
            }
        </Accordion>
    )
}

export default BoxAccordion;