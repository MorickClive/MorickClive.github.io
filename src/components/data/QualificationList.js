// Colours: Purple,     Pink,       Orange,     Yellow,     Green,  Blue,       White/Grey
// Grade:   PHD,        Masters,    Bachelors,  A-Level,    GCSE,   Level 1-2,  Certification 
// Value:   7,          6,          5,          4-3,        2,      1,          0
const GradeStyle = ["lightslategrey", "#095688", "#226f22", "#888809", "#772200", "#007d7f", "#6326a0"];


const QualificationsList = {
       "Header" : "Qualifications",
        "List" : [
            {"Level" : "BSc.",
            "Style" : GradeStyle[5],
            "Title" : "Computer Games Development", 
            "Academy" : "University of South Wales",
            "Grade" : "2.1",
            "Year" :"2016"},
            {"Level" : "BTECH Level 3.",
            "Style" : GradeStyle[4],
            "Title" : "Extended Diploma in IT", 
            "Academy" : "Coleg y Cymoedd/College of the Valleys",
            "Grade" : "Triple Distinction*",
            "Year" :"2013"},
            {"Level" : "BTECH Level 3.",
            "Style" : GradeStyle[4],
            "Title" : "Applied Forensic Science", 
            "Academy" : "Blaengwawr Comprehensive School",
            "Grade" : "Double Distinction",
            "Year" :"2011"},
            {"Level" : "Level 3.",
            "Style" : GradeStyle[4],
            "Title" : "Communication", 
            "Academy" : "Coleg y Cymoedd/College of the Valleys",
            "Grade" : "Pass",
            "Year" :"2013"}]
    };

    export default QualificationsList;