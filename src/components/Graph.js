import React, { useState } from 'react';
import DeckGL, { OrthographicView } from 'deck.gl';

import renderLayers from '../lib/Layers';

const view = new OrthographicView({ fov: 50 });

const Graph = () => {
  const [viewport] = useState({
    positon: [0, 0, 0],
    width: window.innerWidth,
    height: window.innerHeight,
    target: [0, 0],
    zoom: 1,
  });

  return (
    <DeckGL
      views={view}
      initialViewState={viewport}
      controller={true}
      layers={renderLayers()}
    />
  );
};

export default Graph;
