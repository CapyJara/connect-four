const test = QUnit.test;

QUnit.module('connecting four');

function checkForWin(playedMoves) {
    if(playedMoves.row1.length === 4) {
        if(playedMoves.row1[0] === 1) 
        return 'win';
    }
}

test('row-1 1234', assert => {
    // arrange
    const playedMoves = {
        row1: [1, 2, 3, 4]
    };
    // act
    const result = checkForWin(playedMoves);
    // assert
    assert.equal(result, 'win');
});

test('row-1 1', assert => {
    // arrange
    const playedMoves = {
        row1: [1]
    };
    // act
    const result = checkForWin(playedMoves);
    // assert
    assert.equal(result, 'lose');
});