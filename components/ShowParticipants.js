import React from "react";
import Image from "next/image";
import cancel from "../public/static/icons/cancel.svg";
import ParticipantsRow from "./ParticipantsRow";
const ShowParticipants = ({ allParticipants, role, setShowParticipants }) => {
  return (
    <div className="border-l-2 w-350 vp-980:w-full border-primary-darkGreen">
      <div className=" mb-22 border-b-2 border-other-disabled p-24  flex justify-between items-center">
        <p className="text-primary-darkGreen">
          Participants ({allParticipants.length})
        </p>
        <div
          className="flex justify-center items-center"
          onClick={() => setShowParticipants(false)}
        >
          <Image
            src={cancel.src}
            alt="cancel"
            layout="fixed"
            width="14"
            height="14"
          />
        </div>
      </div>
      {/* PARTICIPANTS */}
      {allParticipants.length ? (
        allParticipants.map((parti, index) => (
          <ParticipantsRow key={index} participants={parti} role={role} />
        ))
      ) : (
        <div
          className="flex items-center justify-center text-gray-text
                      h-full w-full text-sm"
        >
          No participants
        </div>
      )}
    </div>
  );
};

export default ShowParticipants;
