Prereq To run the project
1. NodeJs
2. VSCode or any Code editor or terminal

Steps to Run the Project
1. Open folder in VS Code
2. npm install
3. npm run lint --> to find any lint error
4. npm run build --> to create dist dir
5. npm test --> run jest test cases
6. Set env FILE_NAME && BMI_CATEGORY_QUERY --> to set the env variables to be used in app.
7. npm start --> to start the app (index.js)

Summary:  
App is reading the json file (defined in FILE_NAME env) in chunks.
Decorate the given object with BmiIndex, BmiCategory, HealthRisk fields in person object based on given formula and table.
Also given BMI_CATEGORY_QUERY (could be "Overweight" to find number of Overweight ppl), will out put the number of ppl matching this criteria.
Also included the jest test cases to verify BmiCategory and HealthRisk with different BmiIndex values.




