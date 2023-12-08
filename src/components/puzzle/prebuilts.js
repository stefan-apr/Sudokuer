const Prebuilts = [
  {
    type: 'original',
    description: 'The classic puzzle, with no extra wrinkles!',
    rulesText: [
    'Normal sudoku rules apply.', 
    '(All cells must be filled. Each row, column, and 3x3 box must contain the numbers 1-9 exactly once each.)'
    ],
    prebuilts: [
      // Prebuilt #1
      {
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
      // Prebuilt #2
      {
        initialValues: [
          [null, null, null, {type: 'preset', value: 2}, null, {type: 'preset', value: 1}, null, null, null],
          [null, null, {type: 'preset', value: 3}, null, null, null, {type: 'preset', value: 2}, null, null],
          [null, {type: 'preset', value: 4}, null, null, {type: 'preset', value: 6}, null, null, {type: 'preset', value: 3}, null],
          [{type: 'preset', value: 5}, null, null, {type: 'preset', value: 3}, null, {type: 'preset', value: 7}, null, null, {type: 'preset', value: 4}],
          [null, null, {type: 'preset', value: 2}, null, null, null, {type: 'preset', value: 8}, null, null],
          [{type: 'preset', value: 6}, null, null, {type: 'preset', value: 1}, null, {type: 'preset', value: 9}, null, null, {type: 'preset', value: 5}],
          [null, {type: 'preset', value: 7}, null, null, {type: 'preset', value: 4}, null, null, {type: 'preset', value: 6}, null],
          [null, null, {type: 'preset', value: 8}, null, null, null, {type: 'preset', value: 7}, null, null],
          [null, null, null, {type: 'preset', value: 9}, null, {type: 'preset', value: 8}, null, null, null]
        ]
      },
      // Prebuilt #3
      {
        initialValues: [
          [{ type: 'preset', value: 7 }, null, null, null, { type: 'preset', value: 5 }, null, null, null, { type: 'preset', value: 4 }],
          [null, null, null, { type: 'preset', value: 6 }, { type: 'preset', value: 7 }, { type: 'preset', value: 3 }, null, null, null],
          [null, null, { type: 'preset', value: 1 }, null, null, null, { type: 'preset', value: 2 }, null, null],
          [null, { type: 'preset', value: 2 }, null, null, null, null, null, { type: 'preset', value: 7 }, null],
          [{ type: 'preset', value: 5 }, { type: 'preset', value: 3 }, null, null, null, null, null, { type: 'preset', value: 8 }, { type: 'preset', value: 9 }],
          [null, { type: 'preset', value: 6 }, null, null, null, null, null, { type: 'preset', value: 4 }, null],
          [null, null, { type: 'preset', value: 4 }, null, null, null, { type: 'preset', value: 3 }, null, null],
          [null, null, null, { type: 'preset', value: 1 }, { type: 'preset', value: 2 }, { type: 'preset', value: 9 }, null, null, null],
          [{ type: 'preset', value: 6 }, null, null, null, { type: 'preset', value: 8 }, null, null, null, { type: 'preset', value: 1 }],
        ]
      },
      // Prebuilt #4
      {
        initialValues: [
          [{ type: 'preset', value: 3 }, null, { type: 'preset', value: 4 }, null, null, null, null, null, null],
          [null, null, null, null, { type: 'preset', value: 9 }, null, null, { type: 'preset', value: 7 }, null],
          [{ type: 'preset', value: 5 }, null, { type: 'preset', value: 6 }, { type: 'preset', value: 7 }, null, null, null, null, null],
          [null, null, null, { type: 'preset', value: 6 }, null, { type: 'preset', value: 8 }, { type: 'preset', value: 4 }, null, null],
          [null, { type: 'preset', value: 2 }, null, null, null, null, null, { type: 'preset', value: 8 }, null],
          [null, null, { type: 'preset', value: 3 }, { type: 'preset', value: 2 }, null, { type: 'preset', value: 7 }, null, null, null],
          [null, null, null, null, null, { type: 'preset', value: 1 }, { type: 'preset', value: 3 }, null, { type: 'preset', value: 4 }],
          [null, { type: 'preset', value: 1 }, null, null, { type: 'preset', value: 2 }, null, null, null, null],
          [null, null, null, null, null, null, { type: 'preset', value: 5 }, null, { type: 'preset', value: 6 }],
        ]
      },
      // Prebuilt #5
      {
        initialValues: [
          [{ type: 'preset', value: 7 }, null, null, null, null, null, null, null, { type: 'preset', value: 4 }],
          [null, null, { type: 'preset', value: 1 }, { type: 'preset', value: 2 }, { type: 'preset', value: 3 }, { type: 'preset', value: 4 }, null, null, null],
          [null, { type: 'preset', value: 5 }, null, null, { type: 'preset', value: 6 }, null, null, null, null],
          [null, { type: 'preset', value: 6 }, null, { type: 'preset', value: 4 }, null, null, null, { type: 'preset', value: 2 }, null],
          [null, { type: 'preset', value: 7 }, { type: 'preset', value: 2 }, null, null, null, { type: 'preset', value: 9 }, { type: 'preset', value: 4 }, null],
          [null, { type: 'preset', value: 8 }, null, null, null, { type: 'preset', value: 5 }, null, { type: 'preset', value: 6 }, null],
          [null, null, null, null, { type: 'preset', value: 1 }, null, null, { type: 'preset', value: 8 }, null],
          [null, null, null, { type: 'preset', value: 7 }, { type: 'preset', value: 5 }, { type: 'preset', value: 3 }, { type: 'preset', value: 1 }, null, null],
          [{ type: 'preset', value: 3 }, null, null, null, null, null, null, null, { type: 'preset', value: 6 }],
        ]
      }
    ]
  },
  {
    type: 'killer',
    prebuilts: [
    ]
  },
  {
    type: 'chess knight',
    description: 'Mount up! Mind your tall L and your small L to make it through this kind of puzzle.',
    rulesText: [
      'Normal sudoku rules apply.',
      "Cells separated by a chess knight's move cannot contain the same digit."
    ],
    prebuilts: [
      // Prebuilt #1
      {
        initialValues: [
          [{ type: 'preset', value: 1 }, null, { type: 'preset', value: 2 }, null, null, null, { type: 'preset', value: 6 }, null, { type: 'preset', value: 7 }],
          [null, null, null, { type: 'preset', value: 4 }, null, { type: 'preset', value: 5 }, null, null, null],
          [{ type: 'preset', value: 3 }, null, null, null, null, null, null, null, { type: 'preset', value: 8 }],
          [null, null, null, { type: 'preset', value: 2 }, null, { type: 'preset', value: 3 }, null, null, null],
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, { type: 'preset', value: 1 }, null, { type: 'preset', value: 8 }, null, null, null],
          [{ type: 'preset', value: 4 }, null, null, null, null, null, null, null, { type: 'preset', value: 5 }],
          [null, null, null, { type: 'preset', value: 7 }, null, { type: 'preset', value: 2 }, null, null, null],
          [{ type: 'preset', value: 5 }, null, { type: 'preset', value: 6 }, null, null, null, { type: 'preset', value: 8 }, null, { type: 'preset', value: 9 }],
        ]
      },
      // Prebuilt #2
      {
        initialValues: [
          [null, { type: 'preset', value: 9 }, { type: 'preset', value: 3 }, null, null, null, { type: 'preset', value: 2 }, { type: 'preset', value: 8 }, null],
          [{ type: 'preset', value: 6 }, null, null, null, null, null, null, null, { type: 'preset', value: 3 }],
          [{ type: 'preset', value: 4 }, null, null, null, null, null, null, null, { type: 'preset', value: 9 }],
          [null, null, null, { type: 'preset', value: 8 }, { type: 'preset', value: 3 }, { type: 'preset', value: 4 }, null, null, null],
          [null, null, null, { type: 'preset', value: 1 }, { type: 'preset', value: 5 }, { type: 'preset', value: 9 }, null, null, null],
          [null, null, null, { type: 'preset', value: 6 }, { type: 'preset', value: 7 }, { type: 'preset', value: 2 }, null, null, null],
          [{ type: 'preset', value: 1 }, null, null, null, null, null, null, null, { type: 'preset', value: 6 }],
          [{ type: 'preset', value: 7 }, null, null, null, null, null, null, null, { type: 'preset', value: 4 }],
          [null, { type: 'preset', value: 2 }, { type: 'preset', value: 8 }, null, null, null, { type: 'preset', value: 7 }, { type: 'preset', value: 1 }, null],
        ]
      }
    ]
  },
  {
    type: 'diagonal',
    description: "Rows and columns are all well and good, but what if you had to watch the diagonals too?",
    rulesText: [
      'Normal sudoku rules apply.',
      'Along each of the two diagonals of the puzzle, the digits 1-9 must appear exactly once.'
    ],
    prebuilts: [
      // Prebuilt #1
      {
        initialValues: [
          [null, { type: 'preset', value: 1 }, null, null, null, { type: 'preset', value: 6 }, null, { type: 'preset', value: 4 }, null],
          [{ type: 'preset', value: 8 }, null, { type: 'preset', value: 2 }, null, null, null, { type: 'preset', value: 1 }, null, null],
          [null, { type: 'preset', value: 7 }, null, { type: 'preset', value: 3 }, null, null, null, null, null],
          [null, null, { type: 'preset', value: 6 }, null, { type: 'preset', value: 2 }, null, null, null, null],
          [null, null, null, { type: 'preset', value: 5 }, null, { type: 'preset', value: 1 }, null, null, null],
          [null, null, null, null, { type: 'preset', value: 6 }, null, { type: 'preset', value: 2 }, null, null],
          [null, null, null, null, null, { type: 'preset', value: 7 }, null, { type: 'preset', value: 3 }, null],
          [null, null, { type: 'preset', value: 5 }, null, null, null, { type: 'preset', value: 6 }, null, { type: 'preset', value: 4 }],
          [null, { type: 'preset', value: 3 }, null, { type: 'preset', value: 2 }, null, null, null, { type: 'preset', value: 5 }, null],
        ]
      }
    ]
  },
  {
    type: 'magic square',
    description: "Magic squares! You'll have to be mindful of more than just 9 regions to finish this kind of puzzle.",
    rulesText: [
    'Normal sudoku rules apply.', 
    'Shaded regions are Magic Squares. Each magic square must contain the digits 1-9, and each row, column, and diagonal in each magic square must have the same total.'
    ],
    prebuilts: [
      // Prebuilt #1
      {
        initialValues: [
          [null, null, {type: 'preset', value: 1}, null, null, null, null, null, null],
          [null, {type: 'preset', value: 2}, null, null, null, {type: 'preset', value: 7}, null, null, null],
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, {type: 'preset', value: 2}, null, null, null],
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, {type: 'preset', value: 8}, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, {type: 'preset', value: 3}, null, null, null, {type: 'preset', value: 8}, null],
          [null, null, null, null, null, null, {type: 'preset', value: 9}, null, null]
        ],
        magicSquares: [
          {x: 0, y: 6},
          {x: 2, y: 1},
          {x: 4, y: 5},
          {x: 6, y: 0}
        ]
      },
      // Prebuilt #2
      {
        initialValues: [
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, null, { type: 'preset', value: 6 }, { type: 'preset', value: 7 }, null, null, null],
          [null, null, null, null, null, null, null, null, null],
          [null, { type: 'preset', value: 9 }, null, null, null, null, null, null, null],
          [null, { type: 'preset', value: 2 }, null, null, null, null, null, { type: 'preset', value: 8 }, null],
          [null, null, null, null, null, null, null, { type: 'preset', value: 1 }, null],
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, { type: 'preset', value: 3 }, { type: 'preset', value: 4 }, null, null, null, null],
          [null, null, null, null, null, null, null, null, null],
        ],
        magicSquares: [
          { x: 0, y: 1 }, 
          { x: 1, y: 6 }, 
          { x: 5, y: 0 },
          { x: 6, y: 5 }
        ]
      },
      // Prebuilt #3
      {
        initialValues: [
          [{ type: 'preset', value: 7 }, null, { type: 'preset', value: 4 }, null, null, null, { type: 'preset', value: 8 }, null, null],
          [null, null, null, null, null, null, null, null, { type: 'preset', value: 7 }],
          [{ type: 'preset', value: 6 }, null, null, null, null, null, { type: 'preset', value: 4 }, null, null],
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null],
          [null, null, null, { type: 'preset', value: 5 }, null, null, null, null, null],
          [{ type: 'preset', value: 4 }, null, null, null, null, null, null, null, { type: 'preset', value: 8 }],
          [null, null, { type: 'preset', value: 7 }, null, null, null, null, null, null],
          [{ type: 'preset', value: 8 }, null, null, null, null, null, { type: 'preset', value: 2 }, null, { type: 'preset', value: 4 }],
        ],
        magicSquares: [
          { x: 1, y: 1 }, 
          { x: 0, y: 6 }, 
          { x: 6, y: 0 }, 
          { x: 5, y: 5 }
        ]
      },
      // Prebuilt #4
      {
        initialValues: [
          [null, null, null, { type: 'preset', value: 8 }, null, null, null, null, null],
          [null, null, null, null, null, null, null, { type: 'preset', value: 1 }, null],
          [null, null, null, null, null, { type: 'preset', value: 5 }, null, null, { type: 'preset', value: 2 }],
          [null, null, null, null, null, null, null, null, { type: 'preset', value: 4 }],
          [null, null, null, null, null, null, null, null, null],
          [{ type: 'preset', value: 5 }, null, null, null, null, null, null, null, null],
          [{ type: 'preset', value: 6 }, null, null, { type: 'preset', value: 5 }, null, null, null, null, null],
          [null, { type: 'preset', value: 8 }, null, null, null, null, null, null, null],
          [null, null, null, null, null, { type: 'preset', value: 3 }, null, null, null],
        ],
        magicSquares: [
          { x: 0, y: 0 }, 
          { x: 3, y: 3 }, 
          { x: 6, y: 6 }
        ]
      }
    ]
  }
];

export default Prebuilts;