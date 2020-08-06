const { assert } = require('chai');
const sinon = require('sinon');

describe('testes unitario logger.js', () => {
  it('Registra chamada e testa se result.stream.write foi chamado', () => {
    const loggerResult = require('../../lib/utils/logger');
    const loggerWinstonSpy = sinon.spy(loggerResult, 'info');

    loggerResult.stream.write('unit test');

    assert.isNotNull(loggerResult);
    assert.isTrue(loggerWinstonSpy.calledOnce, 'Deve ser chamado apenas uma vez');
  });
  it.skip('Deve imprimir dados formatados para stdout (integer value)', () => {
    const loggerResult = require('../../lib/utils/logger');
    loggerResult.on('data', (data) => {
      assert.strictEqual(data.level, 'info');
      assert.strictEqual(data.message, 'unit test 123456');
    });
    loggerResult.info('unit test %s', 123456);
  });  
});