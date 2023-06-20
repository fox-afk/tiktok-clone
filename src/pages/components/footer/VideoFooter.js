import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name,description,music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h1 >@{name}</h1>
        <p>{description}</p>
        <div className="videoFooter__music">
            <MusicNoteIcon className="videoFooter__icon"/>
            <div className="videoFooterMusic_text">
            <p>{music}</p>
            </div>
      
      
        </div>
       
      </div>
      <img
      className="videoFooter__record"
      alt="imagem,vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"

      
      />
    </div>
  );
}

export default VideoFooter;
