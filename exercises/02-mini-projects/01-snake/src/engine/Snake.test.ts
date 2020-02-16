import { Configuration } from './Configuration';
import { Snake } from './Snake'
import { Cell } from './Cell'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })

    it("should take three cells at the beginning", () => {
        const snake = new Snake()
        
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })
    
    it("should move down", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(2, 1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

     it("should move right", () => {
        const snake = new Snake()
        
        snake.setDirection('Right')
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("should move right", () => {
        const snake = new Snake()
        
        snake.setDirection('Up')
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(2, -1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("should not be able to move in invalid directions", () => {
        const snake = new Snake()
        
        snake.setDirection('Left')
        expect(snake.getDirection()).toEqual('Right')

        snake.setDirection('Down')
        snake.setDirection('Up')
        expect(snake.getDirection()).toEqual('Down')

        snake.setDirection('Left')
        snake.setDirection('Right')
        expect(snake.getDirection()).toEqual('Left')

        
        snake.setDirection('Up')
        snake.setDirection('Down')
        expect(snake.getDirection()).toEqual('Up')
        
    })

    it("should move right", () => {
        const snake = new Snake()
        
        snake.setDirection('Down')
        snake.move()
        snake.setDirection('Left')
        snake.move()

        expect(snake.getDirection()).toEqual('Left')
        expect(snake.getHead()).toEqual(new Cell(1, 1))
        expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)])
    })
    
    it("should grow three times", () => {
        const snake = new Snake()
        
        snake.grow()
        snake.move()
        snake.move()
        snake.move()
        
        

    
        expect(snake.getHead()).toEqual(new Cell(5, 0))
        expect(snake.getTail()).toEqual([
            new Cell(0, 0), 
            new Cell(1, 1),
            new Cell(2, 0),
            new Cell(3, 0),
            new Cell(4, 0)
        ])
    })

    
    
})