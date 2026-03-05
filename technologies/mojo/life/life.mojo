from gridv1 import Grid

fn grid_str(grid: Grid) -> String:
    str = String()

    for row in range(grid.rows):
        for col in range(grid.cols):
            if grid.data[row][col] == 1:
                str += "*"
            else:
                str += " "
        if row != grid.rows-1: 
            str += "\n"
    return str

def main():
    glider = [
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]
    start = Grid(8, 8, glider^)
    result = grid_str(start)
    print(result)