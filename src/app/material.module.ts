import { NgModule } from "@angular/core";
import * as NG_MAT from "@angular/material";
import * as NG_MDC from "@angular-mdc/web";

const MATERIAL_MODULES = [
  NG_MAT.MatPaginatorModule,
  NG_MAT.MatTableModule,
  NG_MAT.MatSidenavModule,
  NG_MAT.MatIconModule,
  NG_MAT.MatButtonModule,
  NG_MAT.MatCardModule,
  NG_MAT.MatInputModule,
  NG_MAT.MatListModule,
  NG_MAT.MatToolbarModule,
  NG_MAT.MatGridListModule,

  NG_MDC.MdcTopAppBarModule,
  NG_MDC.MdcIconModule,
  NG_MDC.MdcMenuModule,
  NG_MDC.MdcListModule,
  NG_MDC.MdcTabModule,
  NG_MDC.MdcTabScrollerModule,
  NG_MDC.MdcTabBarModule,
  NG_MDC.MdcDrawerModule
];
@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MyMaterialModule {}
