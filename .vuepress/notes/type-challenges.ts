import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  link: '/type-challenges/',
  dir: 'type-challenges',
  sidebar: [
    '',
    {
      dir: '热身',
      text: '热身(1)',
      collapsed: false,
      items: [
        'HelloWorld',
      ],
    },
    {
      dir: '简单',
      text: '简单(13)',
      collapsed: false,
      items: [
        'pick',
        'readonly',
        'tupleToObject',
        'firstOfArray',
        'lengthOfTuple',
        'exclude',
        'awaited',
        'if',
        'concat',
        'includes',
        'push',
        'unshift',
        'parameters',
      ],
    },
    {
      dir: '中等',
      text: '中等(75)',
      collapsed: false,
      items: [
        'getReturnType',
        'omit',
        'readonly2',
        'deepReadonly',
        'tupleToUnion',
        'chainableOptions',
        'lastOfArray',
        'pop',
        'promiseAll',
        'typeLookup',
        'trimLeft',
        'trim',
        'capitalize',
        'replace',
        'replaceAll',
        'appendArgument',
        'permutation',
        'lengthOfString',
        'flatten',
        'appendToObject',
        'absolute',
        'stringToUnion',
        'merge',
        'kebabCase',
        'diff',
        'anyOf',
        'isNever',
        'isUnion',
        'replaceKeys',
        'removeIndexSignature',
        'percentageParser',
        'dropChar',
        'minusOne',
        'pickByType',
        'startsWith',
        'endsWith',
        'mutable',
        'omitByType',
        'objectEntries',
        'shift',
        'tupleToNestedObject',
        'reverse',
        'flipArguments',
        'flattenDepth',
        'bemStyleString',
        'inorderTraversal',
        'flip',
        'fibonacciSequence',
        'allCombinations',
        'greaterThan',
        'zip',
        'isTuple',
        'chunk',
        'fill',
        'trimRight',
        'without',
        'trunc',
        'indexOf',
        'join',
        'lastIndexOf',
        'unique',
        'mapTypes',
        'constructTuple',
        'numberRange',
        'combination',
        'subsequence',
        'firstUniqueCharIndex',
        'getMiddleElement',
        'integer',
        'toPrimitive',
        'deepMutable',
        'all',
        'filter',
      ],
    },
    {
      dir: '困难',
      text: '困难(43)',
      collapsed: true,
      items: [
        'simpleVue',
        'currying1',
        'unionToIntersection',
        'getRequired',
        'getOptional',
        'requiredKeys',
        'optionalKeys',
        'capitalizeWords',
        'camelCase',
        'cPrintfParser',
        'vueBasicProps',
        'isAny',
        'typedGet',
        'stringToNumber',
        'tupleFilter',
        'tupleToEnumObject',
        'printf',
        'deepObjectToUnique',
        'lengthOfString2',
        'unionToTuple',
        'stringJoin',
        'deepPick',
        'pinia',
        'camelize',
        'dropString',
        'split',
        'classPublicKeys',
        'isRequiredKey',
        'objectFromEntries',
        'isPalindrome',
        'mutableKeys',
        'intersection',
        'binaryToDecimal',
        'objectKeyPaths',
        'twoSum',
        'validDate',
        'assign',
        'maximum',
        'capitalizeNestObjectKeys',
        'replaceUnion',
        'fizzBuzz',
        'runLengthEncoding',
        'treePathArray',
      ],
    },
    {
      dir: '地狱',
      text: '地狱(14)',
      collapsed: true,
      items: [
        'getReadonlyKeys',
        'queryStringParser',
        'slice',
        'integersComparator',
        'currying2',
        'sum',
        'multiply',
        'tag',
        'inclusiveRange',
        'sort',
        'distributeUnions',
        'assertArrayIndex',
        'jsonParser',
        'subtract',
      ],
    },
  ],
})
