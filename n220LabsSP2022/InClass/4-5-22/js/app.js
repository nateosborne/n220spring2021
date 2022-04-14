var grid = [

    [ 1,1,1 ],

    [ 0,0,0 ],

    [ 0,0,0 ],

];

for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[0].length; j++) {
        if(grid[i][i]==1){
            console.log(grid[i][i]);
        }
    }
 }