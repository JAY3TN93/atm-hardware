describe('ATMHardwareService', function(){
  const ATMHardwareService = require('../atmhardware.js');
  var hw;

  beforeEach(function() {
    hw = new ATMHardwareService();
  });

  describe('init()', function(){
    it('should get init devices', function(){
      expect(hw.devices).toEqual({});
      hw.init();
      var devices = {
        'Card Capture Bin': { supply: 'Not configured' },
        'Cash Handler Reject Bin': { supply: 'Not configured' },
        'Deposit Bin': { supply: 'Not configured' },
        'Receipt Paper': { supply: 'Not configured' },
        'Journal Paper': { supply: 'Not configured' },
        'Night Safe': { supply: 'Not configured' },
        'Cassettes 1': { supply: 'Not configured' },
        'Cassettes 2': { supply: 'Not configured' },
        'Cassettes 3': { supply: 'Not configured' },
        'Cassettes 4': { supply: 'Not configured' },
        'Statement Paper': { supply: 'Not configured' },
        'Statement Ribbon': { supply: 'Not configured'},
        'Envelope Dispenser': { supply: 'Not configured'}
      }
      expect(hw.devices).toEqual(devices);
    });
  });

  describe('getDeviceSupplyValue()', function(){
    beforeEach(function() {
      hw.init();
    });

    it('should get Card Capture Bin deive status', function(){
      expect(hw.getDeviceSupplyValue('Card Capture Bin')).toEqual('Not configured');
    });
  });


  describe('getSuppliesStatus()', function(){
    it('should get supply status string', function(){
      expect(hw.getSuppliesStatus().length).toEqual(26);
      expect(hw.getSuppliesStatus()).toEqual('00000000000000000000000000');
    });
  });

  describe('getReleaseNumber()', function(){
    it('should get release number', function(){
      expect(hw.getReleaseNumber()).toEqual('030300');
    })
  });

  describe('getHarwareID()', function(){
    it('should get NDC hardware ID', function(){
      expect(hw.getHarwareID()).toEqual('G531‐0283');
    })
  });
});
