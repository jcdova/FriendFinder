

var friends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);	
	}); 

	app.post("/api/new", function(req, res) {
        var newClient = req.body;
        var myScore = newClient.scores;
        var total = 0;
        var bestMatch = 100;
        var index = -1;

        for(var j=0; j < friends.length; j++){
            //Iterate through the whole list of friends
            total = 0;

            for(var i =0; i< myScore.length; i++){
                //for each friend calculate the total value
                var dif = Math.abs(myScore[i] - friends[j].scores[i]);
                total += dif;
            }

            if(total < bestMatch){
                bestMatch = total;
                index = j;
            }

        }

        console.log('best Choice', friends[index]);
        friends.push(newClient);
        res.json(friends[index]);
    });

	


}
