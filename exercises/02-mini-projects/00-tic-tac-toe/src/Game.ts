export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter(it => it === 'X').length
    const countO = this.cells.filter(it => it === 'O').length
    if (countX === countO) {
      return 'X'
    }
      return 'O';
  }

  getWinner(): XO {
    if(this.isCellContentEqual(0, 1, 2)) {
      return this.cells[0];
    }
    if(this.isCellContentEqual(0, 3, 6)) {
      return this.cells[0];
    }
    return "-";
  }

  isCellContentEqual(n1: number, n2: number, n3: number,): boolean {
    return this.cells[n1] === this.cells[n2] && this.cells[n2] === this.cells[n3]
  }


  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
    if(this.cells[i] === '-') {
    this.cells[i] = this.getTurn()
  }
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    console.log("restart called");
  }
}
