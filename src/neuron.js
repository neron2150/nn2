import Network from "./network.js";

class Neuron {
  id;
  positionInLayer = 0;
  inputSum = 0;
  result = 0;
  inputs = []; //{value, id, weight}
  outputs = [];
  layerNumber = 0;

  constructor (id, position, layerNumber) {
    this.positionInLayer = position;
    this.id = id;
    this.layerNumber = layerNumber;
  }

  run = () => {
    this.inputSum = inputs.reduce((actualSum, {value, weihgt}) => {
      return actualSum + (value * weihgt);
    }, 0);
    this.result = this.sigmoid(this.inputSum)
    this.outputs.forEach((outputId) => {
      Network
        .allNeurons
        [outputId]
        .inputs
        [positionInLayer]
        .value
         = result;
    });
  }

  sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
  }
 
}
export default Neuron;