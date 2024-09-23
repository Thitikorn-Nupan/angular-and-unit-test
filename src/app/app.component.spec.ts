import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
/*
  This test script, which ends with .spec.ts
  The Angular testing package includes two utilities called TestBed and async.
  ** TestBed is the main Angular utility package.
  ** 1. The describe container contains different blocks (it, beforeEach, xit, etc.).
  ** 2. beforeEach runs before any other block. Other blocks do not depend on each other to run:
*/
describe('AppComponent', () => {
  // ** the first block is the beforeEach(...) inside the container (describe). This is the only block that runs before any other block (it).
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // The component (AppComponent) declared in the beforeEach block is the main component we want to have in this testing environment.
        AppComponent
      ],
      // ** The compileComponents object is called to compile your component’s resources like the template, styles, etc.
    }).compileComponents();
  });

  // ** second block
  it('should create AppComponent', () => {
    // ** fixture.componentInstance creates an instance of the class (AppComponent).
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // ** We will test to see if the instance of the class is truly created or not using toBeTruthy()
    expect(app)
      .toBeTruthy();
  });

  // ** The third block demonstrates how you can have access to the properties of the created component (AppComponent).
  it(`should have as title 'lab-ag-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // **  You can easily check if the title you set has changed or not from the instance of the component (AppComponent) created
    expect(app.title)
      .toEqual('lab-ag-unit-testing');
  });

  // ** The fourth block demonstrates how the test behaves in the browser environment.
  it(`should render element h1 as 'Hello, lab-ag-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    // ** After creating the component, an instance of the created component (detectChanges) to simulate running on the browser environment is called.
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; //
    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Hello, lab-ag-unit-testing');
     /* if .html have this <h1>Hello, {{title}}</h1> will be success */
  });

});
