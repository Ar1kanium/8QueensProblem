const solution = () => {
    const chessboard = new Array(8)
    for (let i = 0; i < 8; i++) {
        chessboard[i] = new Array(8).fill(0)
    }

    const boardsWith8Queens = []

    const isPossibleSquare = (i, j) => {
        if (chessboard[i].indexOf('Q') !== -1) return false
        for (let z = 0; z < 8; z++) {
            let diff = Math.abs(z - i)
            if (!diff) continue
            if (chessboard[z][j] === 'Q') return false
            if (j + diff < 8 && chessboard[z][j+diff] === 'Q') return false
            if (j - diff >= 0 && chessboard[z][j-diff] === 'Q') return false
        }
        return true
    }

    const putQueen = (i, j) => {
        chessboard[i][j] = 'Q'
    }

    const takeQueen = (i, j) => {
        chessboard[i][j] = 0
    }

    const bruteForce = (counter) => {
        for (let j = 0; j < 8; j++) {
            if (isPossibleSquare(counter, j)) {
                putQueen(counter, j)
                if (counter === 7) {
                    const copyChessBoard = []
                    for (let row of chessboard) {
                        copyChessBoard.push([...row])
                    }
                    boardsWith8Queens.push([...copyChessBoard])
                    takeQueen(counter, j)
                    continue
                }
                bruteForce(counter+1)
                takeQueen(counter, j)
            }
        }
    }

    bruteForce(0)
    return boardsWith8Queens
}