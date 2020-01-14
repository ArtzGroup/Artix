import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

export interface DialogData {
  designer: string;
  fDeveloper: string;
  bDeveloper: string;
  fsDeveloper: string;
  tester: string;
  pmanager: string;
}

@Component({
  selector: "app-opportunities",
  templateUrl: "./opportunities.component.html",
  styleUrls: ["./opportunities.component.scss"]
})
export class OpportunitiesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(value): void {
    const dialogRef = this.dialog.open(PopupDialog, {
      data: { passedValue: value },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}

@Component({
  selector: "popup-dialog",
  templateUrl: "./popupDialog.component.html"
})
export class PopupDialog {
  name: string;
  constructor(
    public dialogRef: MatDialogRef<PopupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = data.passedValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(){
      if (window.confirm('Did you Submit the Form?'))
    {
      this.dialogRef.close();
    }
    else
    {
      return false;
    }
  }
}
