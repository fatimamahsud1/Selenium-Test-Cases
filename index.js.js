const { TestCase_1 } = require('./test1');
const { TestCase_2 } = require('./test2');
const { TestCase_3 } = require('./test3');
const { TestCase_4 } = require('./test4');
const { TestCase_5 } = require('./test5');

const main = async () => {
	await TestCase_1();
	await TestCase_2();
	await TestCase_3();
	await TestCase_4();
	await TestCase_5();
};

main();