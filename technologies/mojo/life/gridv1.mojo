@fieldwise_init
struct Grid(Copyable):
    var rows: Int
    var cols: Int
    var data: List[List[Int]]

    fn grid_str(self) -> String:
    str = String()

    for row in range(self.rows):
        for col in range(self.cols):
            if self.data[row][col] == 1:
                str += "*"
            else:
                str += " "
        if row != self.rows-1: 
            str += "\n"
    return str
