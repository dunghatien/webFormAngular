import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'web-app';
    listTestScript = [
        { id: 1, name: 'Cras justo odio1' },
        { id: 2, name: 'Crastural lead-in to additional content. This card has even longer content than the first to show that equal he justo odio2' },
        { id: 3, name: 'Cras justo odio3' },
        { id: 4, name: 'Cras justo odio4' }
    ]

    listTestMethodOfTestScript = [];

    listTestMethod = [
        { id: 1, methodName: 'Method name 1' },
        { id: 2, methodName: 'Method name 2' },
        { id: 3, methodName: 'Method name 3' },
        { id: 4, methodName: 'Method name 4' },
        { id: 5, methodName: 'Method name 5' },
        { id: 6, methodName: 'Method name 6' },
        { id: 7, methodName: 'Method name 7' },
    ];
    listTestCase = [
        { id: 1, testCaseName: 'test case 1' },
        { id: 2, testCaseName: 'test case 2' },
        { id: 3, testCaseName: 'test case 3' },
        { id: 4, testCaseName: 'test case 4' },
        { id: 5, testCaseName: 'test case 5' },
        { id: 6, testCaseName: 'test case 6' },
        { id: 7, testCaseName: 'test case 7' },
    ]
    listTestCaseOfMethod = [];

    listTestMethodNull = [];
    listTestCaseNull = [];
    showTestMethodOfTestScript(i) {
        this.listTestMethodOfTestScript = this.listTestMethod;

        this.listTestMethodNull = [];
        for (var j = 0; j < i; j++) {
            this.listTestMethodNull.push(this.listTestScript[j]);
        }
    }

    showTestCaseOfTestMethod(j) {
        console.log(j);
        this.listTestCaseNull = [];
        for (var k = 0; k < j; k++) {
            this.listTestCaseNull.push(this.listTestMethodOfTestScript[k]);
        }
        this.listTestCaseOfMethod = this.listTestCase;
    }

}
