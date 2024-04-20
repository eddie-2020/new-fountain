import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsApp = () => {
  return (
    <React.Fragment>
      <div>
        <div className="relative mb-[100px]">
          <a
            href="https://api.whatsapp.com/send?phone=9078902838"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-12 right-10 text-green-500 hover:text-green-600"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="text-green-500 hover:text-green-600"
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhatsApp;
