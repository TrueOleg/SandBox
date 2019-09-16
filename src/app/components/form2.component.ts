import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "form2",
  templateUrl: "./form2.component.html"
})
export class Form2Component {
  @Input() form: number;
  name;
  email;
  company;
  title;
  number;

  constructor(private http: HttpClient) {}
  submit() {
    this.http.post("https://postman-echo.com/post", {
      name: this.name,
      email: this.email,
      company: this.company,
      title: this.title,
      number: this.number
    });
  }
}
