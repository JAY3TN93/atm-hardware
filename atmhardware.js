function ATMHardwareService(){
  
  this.devices = {};

  this.init = function(){
    [
      'High Order Communication',
      'System Disk',
      'Magnetic Card Reader',
      'Cash Handler',
      'Depository',
      'Encryptor',
      'Security Camera',
      'Door Access',
      'Flex Disk',
      'Statement Printer',
      'Signage Display',
      'System Display',
      'Media Entry Indicators',
      'Coin Dispensing Module Tamper Indication',
      'Voice Guidance System',
      'Bunch Note Acceptor',
      'Cheque Processor',
      'Card Capture Bin',
      'Cash Handler Reject Bin',
      'Deposit Bin',
      'Receipt Printer',
      'Journal Printer',
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

  this.initCassetteCounters = function(loaded, dispensed, rejected){
    if(loaded === undefined)
      loaded = 0;

    if(dispensed === undefined)
      dispensed = 0;

    if(rejected === undefined)
      rejected = 0;

    [
      'Cassette 1',
      'Cassette 2',
      'Cassette 3',
      'Cassette 4'
    ].forEach(cassette => {
      this.devices[cassette].counters = {
        'loaded': loaded,
        'dispensed': dispensed,
        'rejected': rejected
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
   * [setDeviceFitness description]
   * @param {[type]} device_name [description]
   * @param {[type]} fitness     [description]
   */
  this.setDeviceFitness = function(device_name, fitness){
    var device = this.devices[device_name];
    if(device){
      switch(fitness){
        case 'No error':
        case 'Routine errors have occurred':
        case 'Warning conditions have occurred':
        case 'Suspend':
        case 'Fatal error condition exists':
          device.fitness = fitness;
          break;
        default:
          console.log('Unsupported fitnes severity value: ' + fitness);
          break;
      }

      return true;
    }

    return false;
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

  /**
   * [getSuppliesStatus description]
   * @return {[type]} [description]
   */
  this.getSuppliesStatus = function(){
    var status = '';

    [
      'Reserved',
      'Reserved',
      'Not used',
      'Card Capture Bin',
      'Cash Handler Reject Bin',
      'Deposit Bin',
      'Receipt Printer',
      'Journal Printer',
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

  this.getHardwareFitness = function(){
    var hw_fitness = '';
    [
      'Time‐of‐Day Clock',
      'High Order Communication',
      'System Disk',
      'Magnetic Card Reader',
      'Cash Handler',
      'Depository',
      'Receipt Printer',
      'Journal Printer',
      'Reserved',
      'Reserved',
      'Night Safe',
      'Encryptor',
      'Security Camera',
      'Door Access',
      'Flex Disk',
      'Cassette 1',
      'Cassette 2',
      'Cassette 3',
      'Cassette 4',
      'Reserved',
      'Reserved',
      'Statement Printer',
      'Signage Display',
      'Reserved',
      'Reserved',
      'System Display',
      'Media Entry Indicators',
      'Envelope Dispenser',
      'Not supported',
      'Coin Dispensing Module Tamper Indication',
      'Not supported',
      'Reserved',
      'Voice Guidance System',
      'Reserved',
      'Bunch Note Acceptor',
      'Cheque Processor',
      'Not supported',
      'Reserved',
    ].forEach(device => {
      var fitness = this.getDeviceFitness(device);
      switch(fitness){
        case 'No error':
          hw_fitness += '0';
          break;

        case 'Routine errors have occurred':
          hw_fitness += '1';
          break;

        case 'Warning conditions have occurred':
          hw_fitness += '2';
          break;

        case 'Suspend':
          hw_fitness += '3';
          break;

        case 'Fatal error condition exists':
          hw_fitness += '4';
          break;
          
        default:
          hw_fitness += '0';
          break;
      }
    });

    return hw_fitness;
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