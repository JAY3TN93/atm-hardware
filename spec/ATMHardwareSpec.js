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
        'Card Capture Bin': { supply: 'Not configured', fitness: 'No error' },
        'Cash Handler Reject Bin': { supply: 'Not configured', fitness: 'No error' },
        'Deposit Bin': { supply: 'Not configured', fitness: 'No error' },
        'Receipt Paper': { supply: 'Not configured', fitness: 'No error' },
        'Journal Paper': { supply: 'Not configured', fitness: 'No error' },
        'Night Safe': { supply: 'Not configured', fitness: 'No error' },
        'Cassette 1': { supply: 'Not configured', fitness: 'No error' },
        'Cassette 2': { supply: 'Not configured', fitness: 'No error' },
        'Cassette 3': { supply: 'Not configured', fitness: 'No error' },
        'Cassette 4': { supply: 'Not configured', fitness: 'No error' },
        'Statement Paper': { supply: 'Not configured', fitness: 'No error' },
        'Statement Ribbon': { supply: 'Not configured', fitness: 'No error'},
        'Envelope Dispenser': { supply: 'Not configured', fitness: 'No error'}
      }
      expect(hw.devices).toEqual(devices);
    });
  });

  describe('getDeviceSupply()', function(){
    beforeEach(function() {
      hw.init();
    });

    it('should get Card Capture Bin deive status', function(){
      expect(hw.getDeviceSupply('Card Capture Bin')).toEqual('Not configured');
    });
  });


  describe('setDeviceSupply()', function(){
    beforeEach(function() {
      hw.init();
    });

    it('should set supply status string', function(){
      expect(hw.getDeviceSupply('Cassette 1')).toEqual('Not configured');
      expect(hw.setDeviceSupply('Cassette 1', 'Good state')).toBeTruthy();
      expect(hw.getDeviceSupply('Cassette 1')).toEqual('Good state');
    });
  });


  describe('getSuppliesStatus()', function(){
    beforeEach(function() {
      hw.init();
    });

    it('should get supply status string', function(){
      expect(hw.getSuppliesStatus().length).toEqual(26);
      expect(hw.getSuppliesStatus()).toEqual('00000000000000000000000000');

      expect(hw.setDeviceSupply('Cassette 1', 'Good state')).toBeTruthy();
      expect(hw.setDeviceSupply('Cassette 2', 'Media low')).toBeTruthy();
      expect(hw.setDeviceSupply('Cassette 3', 'Media out')).toBeTruthy();
      expect(hw.setDeviceSupply('Cassette 4', 'Overfill')).toBeTruthy();
      expect(hw.getSuppliesStatus()).toEqual('00000000000000012340000000');
    });
  });

  describe('setDeviceFitness()', function(){
    beforeEach(function() {
      hw.init();
    });

    it('should get device fitness severity value', function(){
      expect(hw.getDeviceFitness('Journal Paper')).toEqual('No error');
    })
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
