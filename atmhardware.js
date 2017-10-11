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
      'Cassettes 1',
      'Cassettes 2',
      'Cassettes 3',
      'Cassettes 4',
      'Statement Paper',
      'Statement Ribbon',
    ].forEach(device => {
      this.devices[device] = {state: 'Not configured'};
    });
  };

  this.getDeviceSupplyStatus = function(name){
    var device = this.devices[name];

    if(device){
      return device.state;
    }
  };

  this.getSuppliesStatus = function(){
    var status = '';

    [
      'Reserved',
      'Reserved',
      'Not used',
      'Card Capture Bin',
    ].forEach(device => {
      switch(device){
        case 'Reserved':
        case 'Not used':
          status += 0;
          break;

        default: 
          status += this.getDeviceSupplyStatus(device);
          break;
      }
    });

    return status;
  };


  this.getReleaseNumber = function(){
    return '030300';
  }

  this.getHarwareID = function(){
    return 'G531‐0283';
  };
}

module.exports = ATMHardwareService;