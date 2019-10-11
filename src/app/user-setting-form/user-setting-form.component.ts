import { Component, OnInit } from "@angular/core";
import { UserSettings } from "../data/user-settings";

@Component({
  selector: "app-user-setting-form",
  templateUrl: "./user-setting-form.component.html",
  styleUrls: ["./user-setting-form.component.css"]
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: "Milton",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: "here are some notes..."
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() {}

  ngOnInit() {}
}
