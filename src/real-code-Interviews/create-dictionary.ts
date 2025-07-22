//////////////////////////////////////////////////
// 1. Choose a data structure for your dictionary
//////////////////////////////////////////////////

type Dictionary = Record<string, string>;

type GroupedDictionary = Record<string, string[]>;

const dictionary: Dictionary = {};

//////////////////////////////////////////////////
// 2. Implement the addEntry function to store
//    items in the dictionary.
//////////////////////////////////////////////////

const addEntry = (entry: string, value: string) => {
  if (!entry || !value) {
    return;
  }

  dictionary[entry] = value;
};

addEntry('boat', 'goes on the sea');
addEntry('cat', 'cute animal');
addEntry('Bruno', 'person name');
addEntry('pen', 'thing to write');
addEntry('bike', 'two-wheel vehicle');
addEntry('car', 'four-wheel vehicle');

console.log(dictionary);

//////////////////////////////////////////////////
// 3. Implement a new function getEntry to return
//    and entry given the word
//    It should return both the word and
//    definition.
//////////////////////////////////////////////////

const getEntry = (entry: string) => {
  if (!entry) {
    return;
  }
  if (!dictionary[entry]) {
    console.error(`Entry "${entry}" not found in the dictionary.`);
    return;
  }

  return [entry, dictionary[entry]];
};

console.log(getEntry('boat'));

//////////////////////////////////////////////////
// 4. Implement a new function startsWith to
//    return a new dictionary containing all the
//    entries with the word starting with that
//    string. It must be case insensitive.
//////////////////////////////////////////////////

const startsWith = (str: string) => {
  if (!str) {
    return {};
  }

  const dictionaryEntriesStartsWithStr: Dictionary = {};
  const entries = Object.keys(dictionary);

  for (let e = 0; e < entries.length; e++) {
    const entry = entries[e];
    const entryStartWithStr = entry.toLowerCase().startsWith(str.toLowerCase());

    if (entryStartWithStr) {
      dictionaryEntriesStartsWithStr[entry] = dictionary[entry];
    }
  }

  return dictionaryEntriesStartsWithStr;
};

console.log(startsWith('b'));

//////////////////////////////////////////////////
// 5. Implement a new function groupByLength
//    to return the words of the dictionary
//    grouped by the length.
//
//    i.e.:
//
//    {
//       "3": ["cat", "pen", "car"],
//       "4": ["boat", "bike"],
//       "5": ["Bruno"],
//    }
//////////////////////////////////////////////////

const groupByLength = () => {
  const groupedDictionaryByLength: GroupedDictionary = {};

  for (const entry in dictionary) {
    const length = entry.length;

    if (!groupedDictionaryByLength[length]) {
      groupedDictionaryByLength[length] = [entry];
      continue;
    }

    groupedDictionaryByLength[length].push(entry);
  }

  return groupedDictionaryByLength;
};

console.log(groupByLength());
