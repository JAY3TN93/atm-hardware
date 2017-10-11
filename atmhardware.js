function ATMHardwareService(){
  
  this.devices = {};

  this.init = function(){
    [
      'Card Capture Bin',
      'Cash Handler Reject Bin',
      'Deposit Bin',
      'Receipt Paper',
      'Journal Paper',
      'Night Safe',
      'Cassette 1',
      'Cassette 2',
      'Cassette 3',
      'Cassette 4',
      'Statement Paper',
      'Statement Ribbon',
      'Envelope Dispenser'
    ].forEach(device => {
      this.devices[device] = {
        supply: 'Not configured',
        fitness: 'No error'
      };
    });
  };

  /**
   * [setDeviceSupply description]
   * @param {[type]} device_name [description]
   * @param {[type]} supply      [description]
   */
  this.setDeviceSupply = function(device_name, supply){
    var device = this.devices[device_name];
    if(device){
      switch(supply){
        case 'Not configured':
        case 'Good state':
        case 'Media low':
        case 'Media out':
        case 'Overfill':
          device.supply = supply;
          break;
        default:
          console.log('Unsupported supply status value: ' + supply);
          break;
      }

      return true;
    }

    return false;
  };

  /**
   * [getDeviceSupply description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  this.getDeviceSupply = function(name){
    var device = this.devices[name];

    if(device){
      return device.supply;
    }
  };


  /**
   * [getDeviceFitness description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  this.getDeviceFitness = function(name){
    var device = this.devices[name];

    if(device){
      return device.fitness;
    }
  };

  this.getSuppliesStatus = function(){
    var status = '';

    [
      'Reserved',
      'Reserved',
      'Not used',
      'Card Capture Bin',
      'Cash Handler Reject Bin',
      'Deposit Bin',
      'Receipt Paper',
      'Journal Paper',
      'Not used',
      'Not used',
      'Night Safe',
      'Not used',
      'Not used',
      'Not used',
      'Not used',
      'Cassette 1',
      'Cassette 2',
      'Cassette 3',
      'Cassette 4',
      'Not used',
      'Not used',
      'Statement Paper',
      'Statement Ribbon',
      'Reserved',
      'Reserved',
      'Envelope Dispenser'
    ].forEach(device => {
      switch(device){
        case 'Reserved':
        case 'Not used':
          status += '0';
          break;

        default: 
          switch(this.getDeviceSupply(device)){
            case 'Not configured':
              status += '0';
              break;

            case 'Good state':
              status += '1';
              break;

            case 'Media low':
              status += '2';
              break;

            case 'Media out':
              status += '3';
              break;

            case 'Overfill':
              status += '4';
              break;

            default:
              status += '0';
              break;
          }
          break;
      }
    });

    return status;
  };

  this.getSuppliesDescription = function(){
    var description = {};
  };


  this.getReleaseNumber = function(){
    return '030300';
  }

  this.getHarwareID = function(){
    return 'G531‐0283';
  };
}

module.exports = ATMHardwareService;