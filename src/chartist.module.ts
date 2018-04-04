import { NgModule } from '@angular/core';

import { ChartistComponent } from './chartist.component';

@NgModule({
  declarations: [ChartistComponent],
  exports: [ChartistComponent]
})
export class ChartistModule {}

// // for angular-cli
// @todo [Will] is this still needed?
// export default {
//   directives: [ChartistComponent]
// };
