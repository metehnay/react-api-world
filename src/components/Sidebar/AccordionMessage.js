import React from "react";
import Accordion from "react-bootstrap/Accordion";

const AccordionMessage = () => {
  return (
    <div>
      <Accordion className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Premium API?</Accordion.Header>
          <Accordion.Body>
            Premium API's are free just like regular API's but they're more than
            just random pictures. You can actually build serious projects with
            it.{" "}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="mt-0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Star Icon?</Accordion.Header>
          <Accordion.Body>
            They're not different than any other Premium API's. But we worked a
            little bit more while building demo versions. :)
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionMessage;
