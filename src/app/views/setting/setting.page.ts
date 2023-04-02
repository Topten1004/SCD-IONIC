import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  settingList = [
    {
      label : "Update Your Profile",
      link : "/edit-profile"
    },
    {
      label : "Personal Dashboard",
      link : "/edit-profile"
    },
    {
      label : "See your Activity",
      link : "/edit-profile"
    },
    {
      label : "Update your Log",
      link : "/edit-profile"
    },
    {
      label : "Reminders",
      link : "/edit-profile"
    },
    {
      label : "About Sickle In Africa",
      link : "/about-sickle"
    },
    {
      label : "Dictionary",
      link : "/edit-profile"
    },
    {
      label : "Contact Us",
      link : "/edit-profile"
    }
  ]

}
