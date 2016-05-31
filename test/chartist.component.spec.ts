import {
  describe,
  it,
  expect,
  beforeEach,
  inject,
  async
} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { ChartistComponent } from './../angular2-chartist';

describe('chartist component', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));

  it('should say hello world', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      fixture.detectChanges();
      expect(fixture.nativeElement).toHaveText('Hello world from the Angular2 Chartist module!');
    });
  }));
});
