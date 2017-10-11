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
        'Card Capture Bin': { state: 'Not configured' },
        'Cash Handler Reject Bin': { state: 'Not configured' },
        'Deposit Bin': { state: 'Not configured' },
        'Receipt Paper': { state: 'Not configured' },
        'Journal Paper': { state: 'Not configured' },
        'Night Safe': { state: 'Not configured' },
        'Cassettes 1': { state: 'Not configured' },
        'Cassettes 2': { state: 'Not configured' },
        'Cassettes 3': { state: 'Not configured' },
        'Cassettes 4': { state: 'Not configured' },
        'Statement Paper': { state: 'Not configured' },
        'Statement Ribbon': { state: 'Not configured'}
      }
      expect(hw.devices).toEqual(devices);
    });
  });  

  describe('getDeviceSupplyStatus()', function(){
    it('should get Card Capture Bin deive status', function(){
      //expect(hw.getDeviceSupplyStatus('Card Capture Bin')).toEqual('Not configured');
    });
  });


  describe('getSuppliesStatus()', function(){
    it('should get supply status string', function(){
      //expect(hw.getSuppliesStatus()).toEqual('00011111001000011130011');
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
