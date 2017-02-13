
Scrabble = {
  score : function(word) {
    word = word || "";

    var currentScore = 0;
    var characters = (word.split(""));

    var totalScores = characters.map(function(letter) {
      return Scrabble.letterScore(letter.toLowerCase());
    })

    currentScore = (totalScores).reduce(function(sum,score) {
      return sum + score;
    },0);

    return currentScore;
  },
  letterScore : function(letter) {
    return { a : 1, e : 1, i : 1, o : 1,
             u : 1, l : 1, n : 1, r : 1,
             s : 1, t : 1, d : 2, g : 2,
             b : 3, c : 3, m : 3, p : 3,
             f : 4, h : 4, v : 4, w : 4,
             y : 4, k : 5, j : 8, x : 8,
             q : 10, z : 10 }[letter];
  }

};


  console.log(Scrabble.score("ayaseenhello"))
