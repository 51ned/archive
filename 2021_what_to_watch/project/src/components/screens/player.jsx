import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import minutesToString from '../../utils/minutes-to-string';

function PlayerScreen(props) {
  const {name, videoLink, runTime} = props;
  const history = useHistory();

  const handleExitBtnClick = () => {
    history.goBack();
  };

  return (
    <div className='player'>
      <video src={videoLink} className='player__video' poster='img/player-poster.jpg'></video>
      <button type='button' className='player__exit'
        onClick={handleExitBtnClick}
      >
        Exit
      </button>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value='30' max='100'></progress>
            <div className='player__toggler' style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{minutesToString(runTime)}</div>
        </div>

        <div className='player__controls-row'>
          <button type='button' className='player__play'>
            <svg viewBox='0 0 19 19' width='19' height='19'>
              <use xlinkHref='#play-s'></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">
            {name}
          </div>

          <button type='button' className='player__full-screen'>
            <svg viewBox='0 0 27 27' width='27' height='27'>
              <use xlinkHref='#full-screen'></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

PlayerScreen.propTypes = {
  name: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  runTime: PropTypes.number.isRequired,
};

export default PlayerScreen;
