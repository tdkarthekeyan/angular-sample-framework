import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mdc-top-app-bar-with-tabs",
  templateUrl: "./mdc-top-app-bar-with-tabs.component.html",
  styleUrls: ["./mdc-top-app-bar-with-tabs.component.scss"]
})
export class MdcTopAppBarWithTabsComponent implements OnInit {
  tabs = [
    { label: "Flights", icon: "airplanemode_active" },
    { label: "Hotel", icon: "hotel" },
    { label: "Favorites", icon: "favorite" }
  ];

  links = [
    { label: "Inbox", icon: "inbox" },
    { label: "Star", icon: "star" },
    { label: "Sent Mail", icon: "send" },
    { label: "Drafts", icon: "drafts" }
  ];

  constructor() {}

  ngOnInit() {}
}
