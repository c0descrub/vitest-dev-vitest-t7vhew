import { expect, test } from 'vitest';
import { replaceString } from './main';

const input = {
  label: 'test-a',
  a: {
    label: 'test-b',
    b: 'a-b-c',
    c: {
      label: 'test-c',
      d: 'def',
      e: {
        label: 'test-d',
        f: 'g',
      },
    },
  },
};

const expected = {
  label: 'test_a',
  a: {
    label: 'test_b',
    b: 'a-b-c',
    c: {
      label: 'test_c',
      d: 'def',
      e: {
        label: 'test_d',
        f: 'g',
      },
    },
  },
};

test('should replace the 1st property label', function () {
  expect(replaceString(input, 'label', '-', '_').label).to.equal('test_a');
});

test('should replace the 2nd property label', function () {
  expect(replaceString(input, 'label', '-', '_').a.label).to.equal('test_b');
});

test('should ignore the 2nd property `b`', function () {
  expect(replaceString(input, 'label', '-', '_').a.b).to.equal('a-b-c');
});

test('should replace the 3rd property label', function () {
  expect(replaceString(input, 'label', '-', '_').a.c.label).to.equal('test_c');
});

test('should ignore the 2nd property `d`', function () {
  expect(replaceString(input, 'label', '-', '_').a.c.d).to.equal('def');
});

test('should replace the 4th property label', function () {
  expect(replaceString(input, 'label', '-', '_').a.c.e.label).to.equal(
    'test_d'
  );
});

test('should ignore the 4th property `f`', function () {
  expect(replaceString(input, 'label', '-', '_').a.c.e.f).to.equal('g');
});

test('should not mutate the input object', function () {
  const inputCopy = { ...input };
  replaceString(input, 'label', '-', '_');
  expect(JSON.stringify(input), JSON.stringify(inputCopy));
});
