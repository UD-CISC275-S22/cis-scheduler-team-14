Class Object
  - name: string //Name of the class
  - courseID: string //Number at the end of class (355, 108, 275 etc.)
  - department: string //Letter acronym (CISC, MATH, HIST etc.)
  - professor: string //Name of professor
  - credits: number //Number of credits fufilled by the class
  - creditTypes: list of COURSETYPES? //What type of credit the class fufills
  - semestersOffered: list of SEMESTERTYPES? //What semester(s) the class is offered in

Semester Object
  - name: SEMESTERTYPE //Fall, Spring, Winter, Summer
  - year: number //2022, 2023 etc.
  - classes: list of CLASS OBJECTS //What classes are currently scheduled
  - credits: number //How many credits are being taken in the semester
 
List of Semesters as top level data object???
  - Semester panel will be updated by using .map to display the list of semesters
 
SEMESTER PANEL
  - Creates new semester objects
  - Allows user to put class objects into the classes list in the semester object
  - Allows user to update classes list to add and remove classes
  - Allows user to add and remove semesters from schedule list

CREDITS PANEL
  - Reads semesters from the list of semesters
  - Displays credits broken down by semester and type of credit
  - Totals credits at the end

CLASSES PANEL
  - Allows the user to find classes from dropdowns
  - Classes will be sorted into different lists based on what credit types they fufill
  - Classes will be displayed in increasing order of difficulty (106 at the top, 953 Super Mega AI Class at the bottom)
 
