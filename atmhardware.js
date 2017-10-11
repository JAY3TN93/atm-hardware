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
      'Envelope Dispenser'
    ].forEach(device => {
      this.devices[device] = {
        supply: 'Not configured',
      };
    });
  };

  this.getDeviceSupplyValue = function(name){
    var device = this.devices[name];

    if(device){
      return device.supply;
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
      'Cassettes 1',
      'Cassettes 2',
      'Cassettes 3',
      'Cassettes 4',
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
          switch(this.getDeviceSupplyValue(device)){
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


  this.getReleaseNumber = function(){
    return '030300';
  }

  this.getHarwareID = function(){
    return 'G531‐0283';
  };
}

module.exports = ATMHardwareService;