let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]

let transform = (grade) => 
    {
        if(grade>=90)
            return 'A';
        else if(grade>=80)
            return 'B';
        else if(grade>=70)
            return 'C';
        else
            return 'F';
        
    }
let total = studentScores.reduce((counts, score) => 
    {
        let grade = transform(score);
        counts[grade] = (counts[grade] || 0) + 1;
        return counts
    }
    , {A: 0, B: 0, C: 0, D: 0});
    
console.log(total);

