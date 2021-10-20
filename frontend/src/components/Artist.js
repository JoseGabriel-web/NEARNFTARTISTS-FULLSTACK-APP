import React from "react";

const Artist = ({
  artistID,
  artist,
  profesionalBackground,
  emailContact,
  hiringCost,
}) => {
  const emailaddress = `malito:${emailContact}`;
  return (
    <div class="artist">
      <h4>
        <b>Artist name:</b> {artist}
      </h4>
      <p>
        <b>Profesional Background: </b> {profesionalBackground}
      </p>
      <div>
        <b>Email: </b>
        <a href={emailaddress}>{emailContact}</a>
      </div>
      <div>
        <b>Hiring cost: </b>
        {hiringCost}
      </div>
    </div>
  );
};

export default Artist;
