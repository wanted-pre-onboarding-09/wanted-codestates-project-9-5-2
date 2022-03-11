import { useState } from 'react';
import { LineLayer, ScatterplotLayer, COORDINATE_SYSTEM } from 'deck.gl';

import {
  forceLink,
  forceSimulation,
  forceManyBody,
  forceCenter,
} from 'd3-force';

// import DATASET from './Dataset.js';

// const data = DATASET();
const data = {
  nodes: [
    { id: 'n1', name: 'zeromountain', group: 1 },
    { id: 'n2', name: 'mynameisjisoo', group: 2 },
    { id: 'n3', name: 'JaeYeopHan', group: 3 },
    { id: 'n4', name: 'jojoldu', group: 4 },
  ],
  links: [
    { source: 'n1', target: 'n2', weight: 1 },
    { source: 'n2', target: 'n2', weight: 3 },
  ],
};

const simulation = forceSimulation()
  .force(
    'link',
    forceLink().id(function (d) {
      return d.id;
    }),
  )
  .force('charge', forceManyBody())
  .force('center', forceCenter(0, 0));

simulation.nodes(data.nodes);
simulation.force('link').links(data.links);

export default (props) => {
  const [fnode, setFnode] = useState(data.nodes);
  const [flinks, setFlinks] = useState(data.links);

  const ticked = () => {
    const newData = JSON.parse(JSON.stringify(data));
    setFnode(newData.nodes);
    setFlinks(newData.links);
  };

  simulation.on('tick', ticked);

  const scatterLayer = new ScatterplotLayer({
    id: 'scatterplot-layer',
    coordinateSystem: COORDINATE_SYSTEM.IDENTITY,
    data: fnode,
    pickable: true,
    opacity: 1,
    stroked: true,

    getPosition: (d) => {
      return [d.x, d.y, 0];
    },
    getRadius: (d) => 10,
    getFillColor: (d) => [123, 123, 255],
    getLineColor: [0, 0, 255],
  });

  const lineLayer = new LineLayer({
    id: 'line-layer',
    coordinateSystem: COORDINATE_SYSTEM.IDENTITY,
    data: flinks,
    getWidth: 2,
    getSourcePosition: (d) => [d.source.x, d.source.y, 0],
    getTargetPosition: (d) => [d.target.x, d.target.y, 0],
    getColor: (d) => [123, 123, 123],
  });

  const layers = [lineLayer, scatterLayer];

  return layers;
};
