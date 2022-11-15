export function replaceString(input) {
  const stringifiedInput = JSON.stringify(input);
  console.log(stringifiedInput);

  const slice1 = stringifiedInput.slice(0, 17);

  const slice2 = stringifiedInput.slice(17, 23);
  const slice3 = stringifiedInput.slice(23, 39);
  const slice4 = stringifiedInput.slice(39, 57);
  const slice6 = stringifiedInput.slice(57, 73);
  const slice7 = stringifiedInput.slice(73, 89);
  const slice8 = stringifiedInput.slice(89, 105);
  const slice9 = stringifiedInput.slice(105, 117);

  const newslice1 = slice1.replace('-', '_');
  const newslice3 = slice3.replace('-', '_');
  const newslice6 = slice6.replace('-', '_');
  const newslice8 = slice8.replace('-', '_');

  const newString = newslice1.concat(
    slice2,
    newslice3,
    slice4,
    newslice6,
    slice7,
    newslice8,
    slice9
  );

  const newInput = JSON.parse(newString);

  return input;
}
