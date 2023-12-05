type GermanGrade=1 | 2 | 3 | 4 | 5 | 6;
type AmericanGrade="A" | "B" | "C" | "D" | "E" | "F";
type Student={
    firstname:string,
    lastname:string,
    age:number,
    grades: Array<GermanGrade | AmericanGrade | undefined>,
}