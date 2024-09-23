import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableComponent} from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  // ** the first block is the beforeEach(...) inside the container (describe). This is the only block that runs before any other block (it).
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // *** test component create
  it('should create TableComponent', () => {
    expect(component).toBeTruthy();
  });

  // *** test prop of component create
  it(`should have as title 'Users Table'`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;
    // **  You can easily check if the title you set has changed or not from the instance of the component (AppComponent) created
    expect(app.title).toEqual('Users Table');
  });

  // *** test html element of component create
  it(`should render element table.tbody.tr.td as 'Mark'`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    // ** After creating the component, an instance of the created component (detectChanges) to simulate running on the browser environment is called.
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; // for get element of html
    // **
    expect(
      // access follow order of tag table
      compiled.querySelector('table')?.
        querySelector('tbody')?.
          querySelector('tr')?.
           // first row, td is mark
            querySelector('td')?.textContent)
      .toContain('alex');
      /*
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">1</th>
            ** <td>alex</td>
            <td>19</td>
            <td>Active</td>
          </tr>
      */
  });

});
