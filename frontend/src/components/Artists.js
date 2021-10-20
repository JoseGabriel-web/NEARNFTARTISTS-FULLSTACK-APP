import React, { useEffect, useState } from "react";
import { getArtists } from "../utils";
import Artist from "./Artist";
import Loading from "./Loading";


const Artists = ({ wallet }) => {
  const [loading, setLoading] = useState(true);
  const [artistList, setArtistList] = useState();

  const getArtistList = async () => {
    try {
      setArtistList(await getArtists(wallet));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArtistList();
  }, []);

  const format = (input) => {
    const formatedOutput = atob(input).split("\\n");
    return JSON.parse(formatedOutput);
  };

  return (
    <div className="artist-list">
      {artistList?.status?.SuccessValue? format(artistList.status.SuccessValue).map(
          ({ artistID, artist, profesionalBackground, emailContact, hiringCost }) => (
            <Artist
              artistID={artistID}
              artist={artist}
              profesionalBackground={profesionalBackground}
              emailContact={emailContact}
              hiringCost={hiringCost}
            />
          )
        ) : <Loading />}        
    </div>
  );
};

export default Artists;
