import Neuron from './neuron.js';

export default class Network {
  idCounter = 0;
  allNeurons = {};

  constructor (neuronsNumbers) {
    computeNetwork(neuronsNumbers)
  }

  computeNetwork = (neuronsNumbers) => {
    
  }

  fillLayer = (layerLength, layerNumber, layerInputs) => {
    const layer = [];
    for(let inLayerIndex = 0; inLayerIndex < layerLength; inLayerIndex++) {
      const newNeuronId = this.getNewId();
      const newNeuron = new Neuron(
        newNeuronId,
        inLayerIndex,
        layerNumber,
      );
      layerInputs?.forEach((inputValue, index) => {
        newNeuron.push({value: inputValue});
      });
      layer.push(newNeuron);
      this.allNeurons[newNeuronId] = newNeuron;
    }
  }

  appendParents = (childrenLayer, parentLayer) => {
    childrenLayer.forEach((child) => parentLayer.forEach((parent) => {
      child.outputs.push(child.id);
      parent.inputs.push({id: parentId, weight: 0, value: 0});
    }))
  };

  getNewId = () => ++idCounter;
}
