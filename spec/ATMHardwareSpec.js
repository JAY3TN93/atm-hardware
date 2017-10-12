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
        'High Order Communication': { supply: 'Not configured', fitness: 'No error' },
        'System Disk': { supply: 'Not configured', fitness: 'No error' },
        'Magnetic Card Reader': { supply: 'Not configured', fitness: 'No error' },
        'Cash Handler': { supply: 'Not configured', fitness: 'No error' },
        'Depository': { supply: 'Not configured', fitness: 'No error' },
        'Encryptor': { supply: 'Not configured', fitness: 'No error' },
        'Security Camera': { supply: 'Not configured', fitness: 'No error' },
        'Door Access': { supply: 'Not configured', fitness: 'No error' },
        'Flex Disk': { supply: 'Not configured', fitness: 'No error' },
        'Statement Printer': { supply: 'Not configured', fitness: 'No error' },
        'Signage Display': { supply: 'Not configured', fitness: 'No error' },
        'System Display': { supply: 'Not configured', fitness: 'No error' },
        'Media Entry Indicators': { supply: 'Not configured', fitness: 'No error' },
        'Coin Dispensing Module Tamper Indication': { supply: 'Not configured', fitness: 'No error' },
        'Voice Guidance System': { supply: 'Not configured', fitness: 'No error' },
        'Bunch Note Acceptor': { supply: 'Not configured', fitness: 'No error' },
        'Cheque Processor': { supply: 'Not configured', fitness: 'No error' },
        'Card Capture Bin': { supply: 'Not configured', fitness: 'No error' },
        'Cash Handler Reject Bin': { supply: 'Not configured', fitness: 'No error' },
        'Deposit Bin': { supply: 'Not configured', fitness: 'No error' },
        'Receipt Printer': { supply: 'Not configured', fitness: 'No error' },
        'Journal Printer': { supply: 'Not configured', fitness: 'No error' },
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

    it('should set device fitness severity value', function(){
      expect(hw.getDeviceFitness('Journal Printer')).toEqual('No error');
      expect(hw.setDeviceFitness('Journal Printer', 'Routine errors have occurred')).toBeTruthy();
      expect(hw.getDeviceFitness('Journal Printer')).toEqual('Routine errors have occurred');
    })
  });

  describe('getHardwareFitness()', function(){
    beforeEach(function() {
      hw.init();
    });

    it('should get hardware fitness string', function(){
      expect(hw.getHardwareFitness().length).toEqual(38);
      expect(hw.getHardwareFitness()).toEqual('00000000000000000000000000000000000000');

      expect(hw.setDeviceFitness('Magnetic Card Reader', 'Fatal error condition exists')).toBeTruthy();
      expect(hw.setDeviceFitness('Journal Printer', 'Routine errors have occurred')).toBeTruthy();
      expect(hw.setDeviceFitness('Cash Handler', 'Warning conditions have occurred')).toBeTruthy();
      expect(hw.setDeviceFitness('Cassette 1', 'Fatal error condition exists')).toBeTruthy();
      expect(hw.setDeviceFitness('Cassette 2', 'Suspend')).toBeTruthy();
      expect(hw.setDeviceFitness('Cassette 3', 'Warning conditions have occurred')).toBeTruthy();
      expect(hw.setDeviceFitness('Cassette 4', 'Routine errors have occurred')).toBeTruthy();
      expect(hw.setDeviceFitness('Bunch Note Acceptor', 'Suspend')).toBeTruthy();
      
      expect(hw.getHardwareFitness()).toEqual('00042001000000043210000000000000003000');
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

  describe('initCassetteCounters()', function(){
    it('should init cassette counters with default values', function(){
      hw.devices = {
        'Cassette 1': {},
        'Cassette 2': {},
        'Cassette 3': {},
        'Cassette 4': {},
      };

      expect(hw.devices['Cassette 1'].counters).toBeUndefined();
      expect(hw.devices['Cassette 2'].counters).toBeUndefined();
      expect(hw.devices['Cassette 3'].counters).toBeUndefined();
      expect(hw.devices['Cassette 4'].counters).toBeUndefined();

      hw.initCassetteCounters();

      var cassette1_counters = hw.devices['Cassette 1'].counters;
      expect(cassette1_counters).toEqual({
        'loaded': 0,
        'dispensed': 0,
        'rejected': 0
      });
    })
  });
});
