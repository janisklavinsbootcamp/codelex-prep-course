import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to click in cell", () => {
    const game = new Game();

    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
});

it("should place marks properly", () => {
  const game = new Game();

  game.onClick(0)
  game.onClick(1)
  game.onClick(2)

  expect(game.getCells()).toEqual([
    "X", "O", "X",
    "-", "-", "-",
    "-", "-", "-"
  ]);
  expect(game.getTurn()).toBe("O");
  expect(game.getWinner()).toBe("-");
  expect(game.isTie()).toBe(false);
});

it("click should not overwrite cell value", () => {
  const game = new Game();

  game.onClick(0)
  game.onClick(0)
 

  expect(game.getCells()).toEqual([
    "X", "-", "-",
    "-", "-", "-",
    "-", "-", "-"
  ]);
  expect(game.getTurn()).toBe("O");
  expect(game.getWinner()).toBe("-");
  expect(game.isTie()).toBe(false);
});


it("X should win if first horizontal line filled", () => {
  const game = new Game();

  game.onClick(0)
  game.onClick(3)
  game.onClick(1)
  game.onClick(4)
  game.onClick(2)
 

  expect(game.getCells()).toEqual([
    "X", "X", "X",
    "O", "O", "-",
    "-", "-", "-"
  ]);

  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("should win if first vertical line filled", () => {
  const game = new Game();

  game.onClick(0)
  game.onClick(1)
  game.onClick(3)
  game.onClick(4)
  game.onClick(6)
 

  expect(game.getCells()).toEqual([
    "X", "O", "-",
    "X", "O", "-",
    "X", "-", "-"
  ]);

  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});


it("should clear cells on restart", () => {
  const game = new Game();

  game.onClick(0)
  game.onClick(1)
  game.onClick(3)
  game.onClick(4)
  game.onClick(6)
 
  game.restart();

  expect(game.getCells()).toEqual([
    "-", "-", "-",
    "-", "-", "-",
    "-", "-", "-"
  ]);

  expect(game.getWinner()).toBe("-");
  expect(game.isTie()).toBe(false);
});

});
