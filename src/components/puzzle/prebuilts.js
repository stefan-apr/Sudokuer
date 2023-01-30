/*
Every prebuilt will have one solution array, and one preset array
I think it makes the most sense to have an object of those two arrays
And our prebuilts collection will be an array of such objects

The first array defines the board solution (matrix of values)
The second array defines the board's initial values (matrix of values)
*/

const Prebuilts = [
  {
    type: 'original',
    prebuilts: [
      //Prebuilt #1
      {
        solution: [
          [3, 2, 1, 7, 8, 9, 6, 5, 4],
          [4, 6, 9, 2, 5, 1, 7, 8, 3],
          [5, 7, 8, 6, 4, 3, 9, 1, 2],
          [8, 4, 6, 3, 2, 7, 1, 9, 5],
          [2, 9, 7, 5, 1, 4, 8, 3, 6],
          [1, 3, 5, 9, 6, 8, 4, 2, 7],
          [9, 5, 2, 8, 7, 6, 3, 4, 1],
          [7, 8, 4, 1, 3, 5, 2, 6, 9],
          [6, 1, 3, 4, 9, 2, 5, 7, 8]
        ],
        initialValues: [
          [{type: 'preset', value: 3}, {type: 'preset', value: 2}, {type: 'preset', value: 1}, null, null, null, {type: 'preset', value: 6}, {type: 'preset', value: 5}, {type: 'preset', value: 4}],
          [{type: 'preset', value: 4}, null, null, null, null, null, null, null, {type: 'preset', value: 3}],
          [{type: 'preset', value: 5}, null, null, null, null, null, null, null, {type: 'preset', value: 2}],
          [null, null, {type: 'preset', value: 6}, {type: 'preset', value: 3}, null, {type: 'preset', value: 7}, {type: 'preset', value: 1}, null, null],
          [null, null, {type: 'preset', value: 7}, null, {type: 'preset', value: 1}, null, {type: 'preset', value: 8}, null, null],
          [null, null, null, null, {type: 'preset', value: 6}, null, null, null, null],
          [null, {type: 'preset', value: 5}, null, null, {type: 'preset', value: 7}, null, null, {type: 'preset', value: 4}, null],
          [null, {type: 'preset', value: 8}, null, {type: 'preset', value: 1}, {type: 'preset', value: 3}, {type: 'preset', value: 5}, null, {type: 'preset', value: 6}, null],
          [null, null, null, null, {type: 'preset', value: 9}, null, null, null, null]
        ]
      },
    ]
  },
  {
    type: 'killer',
    prebuilts: [
      {
        
      }
    ]
  }
];

export default Prebuilts;