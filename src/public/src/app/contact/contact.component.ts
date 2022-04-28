import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare let Email : any;
const ics = require('ics');


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  iCalandar;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    const event = {
      start: [2018, 5, 30, 6, 30],
      duration: { hours: 6, minutes: 30 },
      title: 'Bolder Boulder',
      description: 'Annual 10-kilometer run in Boulder, Colorado',
      location: 'Folsom Field, University of Colorado (finish line)',
      url: 'http://www.bolderboulder.com/',
      geo: { lat: 40.0095, lon: 105.2669 },
      categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
      organizer: { name: 'Admin', email: 'Race@BolderBOULDER.com' },
      attendees: [
        { name: 'Adam Gibbons', email: 'adam@example.com', rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' },
        { name: 'Brittany Seaton', email: 'brittany@example2.org', dir: 'https://linkedin.com/in/brittanyseaton', role: 'OPT-PARTICIPANT' }
      ]
    }
     
    ics.createEvent(event, (error, value) => {
      if (error) {
        console.log(error)
        return
      }
      console.log(value)
      this.iCalandar = value
  })
}

  ngAfterViewInit(): void {
   
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      emailContact: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      text: ['', Validators.required]
    });
  }


  
  login(): void {
    var dataUri = "data:" + this.iCalandar.type + ";base64," + btoa(this.iCalandar);
    Email.send({
      Host: "smtp.gmail.com",
      Username : "henri.mersch31@gmail.com",
      Password : "henriISABELLE61",
      To : 'mhicity31@gmail.com',
      From : "henri.mersch31@gmail.com",
      Subject : "test New RDV",
      Body : "test rdv calendrier",
      Attachments : [
        {
         name: 'calendar.ics',
         data: dataUri,
         type: 'text/Calendar'
        }]
      }).then(message => {
        console.log(message)
      });
  }

  /* mail.Body += " <html>";
            mail.Body += "<body>";
            mail.Body += "<table>";
            mail.Body += "<tr>";
            mail.Body += "<td>User Name : </td><td> HAi </td>";
            mail.Body += "</tr>";

            mail.Body += "<tr>";
            mail.Body += "<td>Password : </td><td>aaaaaaaaaa</td>";
            mail.Body += "</tr>";
            mail.Body += "</table>";
            mail.Body += "</body>";
            mail.Body += "</html>"; */

}
