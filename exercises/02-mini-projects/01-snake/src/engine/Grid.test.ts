import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from './Cell'

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;


  it("should have five apples present", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();

    expect(apples.length).toBe(5);
  });

  it("should detect if there is an apple", () => {
    const grid = new Grid(configuration);
    const apples = grid.getApples();

    expect(grid.isAppleInside(apples[0])).toBeTruthy()
    expect(new Cell(99999,99999)).toBeFalsy()
    expect(apples.length).toBe(5)
});


  it("should remove apple", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples()[0];
    grid.removeApple(apples)
    expect(grid.isAppleInside(apples)).toBeFalsy()
  });

  it("should seed apples", () => {
    const grid = new Grid(configuration);
   grid.removeApple(grid.getApples()[0])
   grid.removeApple(grid.getApples()[0])
   grid.removeApple(grid.getApples()[0])
   grid.removeApple(grid.getApples()[0])
   grid.removeApple(grid.getApples()[0])

   expect(grid.isDone()).toBeTruthy()
   grid.seed()

    const apples = grid.getApples()
    expect(apples.length).toBe(5)
  });




});
